import { useEffect } from 'react';
import { useAuthUser } from '../../../contexts/AuthUser';

export const SignoutPage = () => {
  const { signout } = useAuthUser();

  useEffect(() => {
    signout();
  }, [signout]);

  return null;
};