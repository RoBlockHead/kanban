import React, { useState } from 'react';
import { auth, googProv, githubProv} from '../firebase';
import * as firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import {isMobile} from 'react-device-detect'; 

export const GoogleSignInButton = () => {
  const showLogin = () => {
    //check if mobile
    if(isMobile){
      auth.signInWithRedirect(googProv).then(function(result){
        console.log(result.user.displayName + result.user.email);
      });
    }
    else {
    // show google popup signin [NOT MOBILE]
      auth.signInWithPopup(googProv).then(function(result){
        console.log(result.user.displayName + result.user.email);
      });
    }
    console.error("Ran showLogin");
  }
  return(
    <button onClick={showLogin} className="loginGoogleBtn" >
      Sign In With Google 
    </button>
  );
}

export const GithubSignInButton = () => {
  const showLogin = () => {
    githubProv.addScope('user');
    //check if mobile
    if(isMobile){
      auth.signInWithRedirect(githubProv).then(function(result){
        console.log(result.user);
      }).catch(function(error){
        console.error(error);
      });
    }
    else {
    // show google popup signin [NOT MOBILE]
      auth.signInWithPopup(githubProv).then(function(result){
        console.log(result.user);
      }).catch(function(error){
        console.error(error);
      });
    }
    console.error("Ran showLogin");
  }
  return(
    <button onClick={showLogin} className="loginGithubBtn" >
      Sign In With Github 
    </button>
  );
}

export const EmailSignUpForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleForm = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(Userinfo.user);
  }

  const signUp = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(error);
        // ...
      });
  };
  return (
    <form onSubmit={e => signUp(e)}>
      <label>
        Email:
        <input
          name="email"
          type="email"
          target="email"
          value={email}
          onChange={e => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input
          name="password"
          type="password"
          target="password"
          value={password}
          onChange={e => setPassword(e.target.value)} />
      </label>
      <input type="submit" value="Sign Up"/>
    </form>
  );
}

export const SignOutButton = () => {
  const [user] = useAuthState(auth);
  const signOut = () => {
    if(user.isAnonymous){

    }
    auth.signOut().then(function() {
      // Sign-out successful.
      console.log("signed out successfully")
    }).catch(function(error) {
      // An error happened.
      console.error(error);
    });
  }
  return(
    <button onClick={signOut} className="signOutButton">Sign Out</button>
  );
} 

export const PassResetForm = () => {
  const [email, setEmail] = useState('');

  const resetPass = () => {
    auth.sendPasswordResetEmail(email).then(function() {
      console.log("Sent");
      // Email sent.
    }).catch(function(error) {
      console.error(error);
      // An error happened.
    });

  }
  return(
    <form onSubmit={resetPass} >
      <input 
      type="email"
      value={email}
      onChange={e => setEmail(e.target.value)} />
      <input type="submit" value="Send a Password Reset Email" />
    </form>
  )
}
export const Userinfo = () => {
  const [user] = useAuthState(auth);
  return(
    <pre>{JSON.stringify(user,null,2)}</pre>
  )
}

export default GoogleSignInButton;
export function Login() {
  
}
