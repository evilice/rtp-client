import { FC } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import { SigninPage } from './signin';
import { MainPage } from './main';
import { StartPage } from './start';
import { RegistrationPage } from './registration';
import { DisconnectPage } from './disconnect';
import { useAuthUser } from '../../contexts/AuthUser';

export const Pages:FC = () => {
  const { user } = useAuthUser();
  const { pathname } = useLocation();

  const isPublic = ['/signin', '/registration', '/start', '/disconnect'].includes(pathname);
  const redirectTo = !user ? (isPublic ? false : '/start') : (isPublic && '/');

  return (
    <Switch>
      { redirectTo && (<Redirect to={ redirectTo } />) }
      <Route path="/start" component={ StartPage } />
      <Route path="/signin" component={ SigninPage } />
      <Route path="/registration" component={ RegistrationPage } />
      <Route path="/disconnect" component={ DisconnectPage } />
      <Route path="/" component={ MainPage } />
    </Switch>
  );
};