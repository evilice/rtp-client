import { BrowserRouter } from 'react-router-dom';

import { BaseLayout } from './components/layouts/base';
import { Pages } from './components/pages';

import './global-styles.css';

function App() {
  return (
    <BaseLayout>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </BaseLayout>
  );
}

export default App;
