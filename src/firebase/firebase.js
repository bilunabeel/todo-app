// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDwzNtWpdyMYFR6h6ASHwfIl9qaWTrY-ss',
  authDomain: 'todo-app-e6b8d.firebaseapp.com',
  projectId: 'todo-app-e6b8d',
  storageBucket: 'todo-app-e6b8d.appspot.com',
  messagingSenderId: '1011000980175',
  appId: '1:1011000980175:web:986b49ec43e6920a3d3dba',
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default auth;
