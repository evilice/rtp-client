import { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { LoadingLayout } from '../../layouts/loading';

export const StartPage: FC<RouteComponentProps> = () => {
  return (
    // <div>START</div>
    <LoadingLayout />
  );
};