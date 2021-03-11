import React, { FC, useMemo, useState, useContext, Dispatch, useCallback, SetStateAction } from "react";
import { IUser } from "../types";

interface IUserContext {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
}

const AuthorizationContext = React.createContext<IUserContext>({
  user: null,
  setUser: () => {}
});

const AuthoriaztionContextProvider: FC = ({ children }) => {
  const jsonUserData = localStorage.getItem('user');
  const storageUser: IUser | null = jsonUserData ? JSON.parse(jsonUserData) : null;
  const [user, setUser] = useState<IUser | null>(storageUser);

  return (
    <AuthorizationContext.Provider value={{ user, setUser }}>
      { children }
    </AuthorizationContext.Provider>
  );
};

const useUser = () => {
  const { user, setUser } = useContext(AuthorizationContext);

  const updateUser = useCallback((user) => {
    if (user) {
      localStorage.setItem('token', user.token);
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
    setUser(user);
  }, [setUser]);

  return useMemo(() => ({
    user,
    setUser: updateUser
  }), [user, updateUser])
};

AuthorizationContext.displayName = "AuthorizationContext";

export {
  useUser,
  AuthorizationContext,
  AuthoriaztionContextProvider
};