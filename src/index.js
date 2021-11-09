import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import C from './Root';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-9vl71yeh.us.auth0.com"
      clientId="pwqZUxVbMEoEOlJO7O3A7ZNR9dhmD2Xk"
      redirectUri={window.location.href}
      audience="https://dev-9vl71yeh.us.auth0.com/api/v2/"
      scope="read:current_user"
    >
      <C />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
