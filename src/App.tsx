import React, { useEffect } from 'react';
import './App.css';
import SignIn from "./containers/SingIn/SignIn"
import { Box } from '@material-ui/core/';
import { Security, ImplicitCallback } from '@okta/okta-react';

const config = {
  issuer: 'https://${yourOktaDomain}/oauth2/default',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '{clientId}',
  pkce: true
}


const App = () => {
  useEffect(() => {
    console.log(process.env.REACT_APP_CLIENT_ID)
  })
  return (
    <div>
      <SignIn />
    </div>
  
  );
}

export default App;
