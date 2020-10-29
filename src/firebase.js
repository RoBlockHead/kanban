import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAM6np9mIhYkRpkg4jRQKUAfDtv6WA65Qc",
  authDomain: "kanban-16a8e.firebaseapp.com",
  databaseURL: "https://kanban-16a8e.firebaseio.com",
  projectId: "kanban-16a8e",
  storageBucket: "kanban-16a8e.appspot.com",
  messagingSenderId: "462961531842",
  appId: "1:462961531842:web:1ebeaba4ae124b5b78945b",
  measurementId: "G-LD6XE7BZJ9"
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googProv = new firebase.auth.GoogleAuthProvider();

export const githubProv = new firebase.auth.GithubAuthProvider();