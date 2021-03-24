import { FC, useEffect } from 'react';
import { RouteComponentProps, useNavigate } from '@reach/router';
// import useAxios from 'axios-hooks';
import { useAuthUser } from '../../../contexts/AuthUser';
import { LoadingLayout } from '../../layouts/loading';

export const StartPage: FC<RouteComponentProps> = () => {
  // const [{ data, error }, execute] = useAxios('/check-token', { manual: true });
  const { user } = useAuthUser();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(user ? '/main' : '/signin');
  }, [user, navigate]);

  return (
    <LoadingLayout />
  );
};