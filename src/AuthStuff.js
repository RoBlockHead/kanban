import React, {Component} from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider, FirebaseAuthConsumer, IfFirebaseAuthed, IfFirebaseAuthedAnd } from "@react-firebase/auth";

const config = {
  apiKey: "AIzaSyAM6np9mIhYkRpkg4jRQKUAfDtv6WA65Qc",
  authDomain: "kanban-16a8e.firebaseapp.com",
  databaseURL: "https://kanban-16a8e.firebaseio.com",
  projectId: "kanban-16a8e",
  storageBucket: "kanban-16a8e.appspot.com",
  messagingSenderId: "462961531842",
  appId: "1:462961531842:web:1ebeaba4ae124b5b78945b",
  measurementId: "G-LD6XE7BZJ9"
}
class AuthStuff extends Component {
  render() {
    return (
      <FirebaseAuthProvider {...config} firebase={firebase}>
        <div>
        <button
            onClick={() => {
              const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
              firebase.auth().signInWithPopup(googleAuthProvider);
            }}
          >
            Sign In with Google
          </button>
        <button
            data-testid="signin-anon"
            onClick={() => {
              firebase.auth().signInAnonymously();
            }}
          >
            Sign In Anonymously
          </button>
        <button
            onClick={() => {
              firebase.auth().signOut();
            }}
          >
            Sign Out
          </button>
          <FirebaseAuthConsumer>
            {({ isSignedIn, user, providerId }) => {
              return (
                <pre style={{ height: 300, overflow: "auto" }}>
                  {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
                </pre>
              );
            }}
          </FirebaseAuthConsumer>
          <div>
            <IfFirebaseAuthed>
              {() => {
                return <div>You are authenticated</div>;
              }}
            </IfFirebaseAuthed>
            <IfFirebaseAuthedAnd
              filter={({ providerId }) => providerId !== "anonymous"}
            >
              {({ providerId }) => {
                return <div>You are authenticated with {providerId}</div>;
              }}
            </IfFirebaseAuthedAnd>
          </div>
        </div>
      </FirebaseAuthProvider>
    )
  }
}
export default AuthStuff;