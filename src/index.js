import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyAu_E4dO-0y0H6paI1IwOEMtbeweN9Pv7U",
//   authDomain: "proyecto-coderhouse-a5061.firebaseapp.com",
//   projectId: "proyecto-coderhouse-a5061",
//   storageBucket: "proyecto-coderhouse-a5061.appspot.com",
//   messagingSenderId: "401130081517",
//   appId: "1:401130081517:web:b0c7c088da51e234d310e4"
// };

// initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)


