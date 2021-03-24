import { Router } from '@reach/router';

import { BaseLayout } from './components/layouts/base';
import { StartPage } from './components/pages/start';
import { SigninPage } from './components/pages/signin';
import { MainPage } from './components/pages/main';
import { useAuthUser } from './contexts/AuthUser';

import './global-styles.css';

function App() {
  const { error } = useAuthUser();

  return (
    <BaseLayout>
    {
      !error ? (
        <Router>
          <StartPage path='/' />
          <MainPage path='main' />
        </Router>
      ) : <SigninPage />
    }
    </BaseLayout>
  );
}

export default App;
