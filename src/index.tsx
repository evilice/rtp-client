import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import App from './App';
import { LanguageContextProvider } from "./contexts/Language";
// import { ThemeContextProvider } from "./contexts/Theme";
import { DisconnectProvider } from './contexts/Disconnect';
import { AuthUserProvider } from './contexts/AuthUser';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <LanguageContextProvider>
      {/* <ThemeContextProvider> */}
      <DisconnectProvider>
        <AuthUserProvider>
          <App />
        </AuthUserProvider>
      </DisconnectProvider>
      {/* </ThemeContextProvider> */}
    </LanguageContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
