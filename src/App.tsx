import { LanguageContextProvider } from "./contexts/Language";
import { ThemeContextProvider } from "./contexts/Theme";
import { Router } from '@reach/router';

import { BaseLayout } from './components/layouts/base';
import { StartPage } from './components/pages/start';
import { SigninPage } from './components/pages/signin';
import { MainPage } from './components/pages/main';
// import {} from '';
import './global-styles.css';
import './utils/axios-settings';

function App() {
  return (
    <LanguageContextProvider>
      <ThemeContextProvider>
        <BaseLayout>
          <Router>
            <StartPage path='/' />
            <SigninPage path='signin' />
            <MainPage path='main' />
          </Router>
        </BaseLayout>
      </ThemeContextProvider>
    </LanguageContextProvider>
  );
}

export default App;
