import { useState, useCallback, useMemo, useEffect } from 'react';
import { InputChangeEvent } from '../../../types';
import { useAuthUser } from '../../../contexts/AuthUser';
import useAxios from 'axios-hooks';

export interface IRegistrationFormState {
  name: string;
  password: string;
  rePassword: string;
};

const initRegistrationFormState: IRegistrationFormState = {
  name: '',
  password: '',
  rePassword: ''
};

export const useRegistrationFormState = () => {
  const [state, setState] = useState<IRegistrationFormState>(initRegistrationFormState);
  const [isPasswordsEqual, setIsPasswordsEqual] = useState<boolean>(true);
  const [{ data, loading, error }, execute] = useAxios({ url: '/users/create', method: 'POST' }, { manual: true });
  const { signin } = useAuthUser();

  const changeStateHandler = useCallback(({ target: { name, value }}: InputChangeEvent) => {
    const newState = {
      ...state,
      [name]: value
    };
    setState(newState);
    setIsPasswordsEqual(newState.password === newState.rePassword);
  }, [state, setState]);

  const submitHandler = useCallback(() => {
    if (state.password && state.password === state.rePassword) {
      execute({ data: { name: state.name, password: state.password }});
    }
  }, [state, execute]);

  useEffect(() => {
    if (!error && data) {
      signin(state.name, state.password);
    }
  }, [data, error, state, signin]);

  return useMemo(() => ({
    state,
    error: (isPasswordsEqual ? (error && 2) : 1) || void 0,
    loading,
    submitHandler,
    changeStateHandler
  }), [state, submitHandler, changeStateHandler, error, loading]);
};