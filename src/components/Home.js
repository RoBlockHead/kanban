import React, { Component } from 'react';
import { auth, firestore } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth/dist/auth';
import "firebase/auth";
import "firebase/firestore";

function Home() {
    const [user] = useAuthState(auth);
    return(
      <h1>Home</h1>
    );
}

export default Home;