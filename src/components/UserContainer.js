import React from 'react';
import { auth, firestore } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import { GoogleSignInButton, GithubSignInButton, SignOutButton, EmailSignUpForm, Userinfo, PassResetForm } from './Login';
import Navbar from './Navbar';
function UserContainer() {
  const [ user ] = useAuthState(auth);
  return(<div>
    <Navbar />
    {user ?
    //show if signed in
    <div className="signedIn">
      {
        user.isAnonymous == false ?
        //show if signed in not as anonymous
        <h2>Signed in as {user.displayName}</h2>

        :
        <h2>Not signed in (anonymous user)</h2>
      }
      <SignOutButton />
      <Userinfo />
    </div>
    :
    <>
    <h2>Not signed in</h2>
    <GoogleSignInButton />
    <GithubSignInButton />
    <EmailSignUpForm />
    <PassResetForm />
    </>
    
    }
    </div>
  )
}
export default UserContainer;