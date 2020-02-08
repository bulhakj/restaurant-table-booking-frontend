import React, { useEffect, useState } from 'react';
import './App.css';
import SignIn from "./containers/SingIn/SignIn"
import { Box } from '@material-ui/core/';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, ImplicitCallback } from '@okta/okta-react';
import { withAuth } from '@okta/okta-react';
import { Auth0Provider } from './contexts/auth0-context';
import { BrowserRouter } from 'react-router-dom';

const config = {
  issuer: `${process.env.REACT_APP_OKTA_DOMAIN}`,
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: `${process.env.REACT_APP_CLIENT_ID}`,
  pkce: true
}

const App = () => {
  return (
    <Auth0Provider>
      <BrowserRouter>
        <div>ELUWA</div>
      </BrowserRouter>
    </Auth0Provider>
  
  );
}

export default App;
