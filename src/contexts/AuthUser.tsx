import { FC, useState, useCallback, useMemo, useEffect } from 'react';
import { createContainer } from 'unstated-next';
import axios, { AxiosResponse } from 'axios';
import '../utils/axios-settings';

import { IUser } from '../types';

import { TOKEN, REFRESH_TOKEN } from '../constants';

type TUser = IUser | null;

interface ITokens {
  token: string;
  refreshToken: string;
}
type ISigninResponse = AxiosResponse & {
  data: ITokens
}

const getUserDataFromToken = (token?: string): TUser => {
  if (!token)
    return null;

  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);
};

const setTokens = (token: string, refreshToken: string) => {
  localStorage.setItem(TOKEN, token);
  localStorage.setItem(REFRESH_TOKEN, refreshToken);
};

const getTokens = () => {
  return {
    token: localStorage.getItem(TOKEN),
    refreshToken: localStorage.getItem(REFRESH_TOKEN)
  };
};

const removeTokens = () => {
  localStorage.removeItem(TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
};

const AuthUserState = (userData:TUser = null) => {
  const [user, setUser] = useState<TUser | null>(userData);
  const [error, setError] = useState<{ description: string } | null>(null);

  const signin = useCallback(async (username: string, password: string) => {
    const { data }: ISigninResponse = await axios.post('/auth/login', { username, password });
    if (data) {
      setTokens(data.token, data.refreshToken);
      setUser(getUserDataFromToken(data.token));
      setError(null);
    } else {
      setError({ description: 'Unauthorized' });
    }
  }, [setUser, setError]);

  const signout = useCallback(() => {
    removeTokens();
    setUser(null);
  }, [setUser]);

  const refreshUserData = useCallback(async () => {
    const { token } = getTokens();
    if (token) {
      const { status }: AxiosResponse = await axios.get('/check-token');
      if ([200, 201].includes(status)) {
        const { token } = getTokens();
        const user = getUserDataFromToken(token || '');
        user && setUser(user);
        setError(null);
      } else {
        setError({ description: 'Unauthorized' });
      }
    }
  }, [setUser]);

  useEffect(() => {
    (!user) && refreshUserData();
  }, [user, refreshUserData]);

  return useMemo(() => ({
    user,
    error,
    signin,
    signout
  }), [user, error, signin, signout]);
};

const AuthUser = createContainer(AuthUserState);

export const AuthUserProvider:FC = ({ children }) => {
  return (
    <AuthUser.Provider>
      { children }
    </AuthUser.Provider>
  );
};

export const useAuthUser = AuthUser.useContainer;