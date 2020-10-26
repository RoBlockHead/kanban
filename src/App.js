import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthStuff from './AuthStuff';
import { auth, firestore } from './firebase';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Login from './components/Login';
import Home from './components/Home';

function App() {
  const [user] = useAuthState(auth);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
      {user ? <h2>Signed In {user.displayName ? "as " + user.displayName : "Anonymously"}</h2> : <h2>Not signed in</h2>}
      <AuthStuff />
      
    </BrowserRouter>
  );

}

export default App;