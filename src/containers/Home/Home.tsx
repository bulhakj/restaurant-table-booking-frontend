import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth0 } from '../contexts/auth0-context';

function Home():JSX.Element {
  let history = useHistory()

  useEffect(() => {
    console.log("useEffect here")
    console.log(history)
  }, [history])

    return (
        <div>This is home page</div>
    );
}
export default Home;