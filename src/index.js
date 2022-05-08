import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import { authSettings } from "./components/AuthConfig";

ReactDOM.render(
  <React.StrictMode>
      <Auth0Provider
        domain={authSettings.domain}
        clientId={authSettings.clientId}
        redirectUri={window.location.origin}
      >
      <App />
      </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
