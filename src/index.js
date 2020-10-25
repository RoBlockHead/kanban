import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

// var firebaseConfig = {
//   apiKey: "AIzaSyAM6np9mIhYkRpkg4jRQKUAfDtv6WA65Qc",
//   authDomain: "kanban-16a8e.firebaseapp.com",
//   databaseURL: "https://kanban-16a8e.firebaseio.com",
//   projectId: "kanban-16a8e",
//   storageBucket: "kanban-16a8e.appspot.com",
//   messagingSenderId: "462961531842",
//   appId: "1:462961531842:web:1ebeaba4ae124b5b78945b",
//   measurementId: "G-LD6XE7BZJ9"
// }
// firebase.initializeApp(firebaseConfig);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
