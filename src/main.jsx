import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgM7NK8iJeHVnjyDWdW-k_T4qhzTfF9eQ",
  authDomain: "zorluhukuk-39a53.firebaseapp.com",
  databaseURL: "https://zorluhukuk-39a53-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "zorluhukuk-39a53",
  storageBucket: "zorluhukuk-39a53.appspot.com",
  messagingSenderId: "711208899613",
  appId: "1:711208899613:web:0aa2345893fedf8e3be2f4",
  measurementId: "G-CB1Q0BEVNE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
