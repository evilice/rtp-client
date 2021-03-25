import { Router, Redirect } from '@reach/router';

import { BaseLayout } from './components/layouts/base';
import { SigninPage } from './components/pages/signin';
import { MainPage } from './components/pages/main';
import { useAuthUser } from './contexts/AuthUser';
import { LoadingLayout } from './components/layouts/loading';

import './global-styles.css';

function App() {
  const { error, user } = useAuthUser();
  console.log({ error, user });
  return (
    <BaseLayout>
    {
      (!error && user) ? (
        <Router>
          <Redirect from="/signin" to="/main" />
          <MainPage path="/" />
        </Router>
      ) : (error && !user ? <SigninPage /> : <LoadingLayout />)
    }
    </BaseLayout>
  );
}

export default App;
