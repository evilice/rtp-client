import { FC, useEffect } from 'react';
import { RouteComponentProps, useNavigate } from '@reach/router';
import useAxios from 'axios-hooks';
import { LoadingLayout } from '../../layouts/loading';

export const StartPage: FC<RouteComponentProps> = () => {
  const [{ data, error }] = useAxios('/check-token');
  const navigate = useNavigate();

  useEffect(() => {
    if (error && error.response?.status === 401)
      navigate('/signin');
    else if (data) {
      navigate('/main');
    }
  }, [data, error, navigate]);

  return (
    <LoadingLayout />
  );
};