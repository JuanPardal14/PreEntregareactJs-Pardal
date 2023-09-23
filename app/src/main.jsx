import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrouserRouter} from 'react-router-dom'
import { initializeApp } from "firebase/app";
import App from './App.jsx'
import './index.css'

const firebaseConfig = {

  apiKey: "AIzaSyC58Zut2WYdHODyAchx50x06J3E07vF1c8",

  authDomain: "proyectocoder-dc2af.firebaseapp.com",

  projectId: "proyectocoder-dc2af",

  storageBucket: "proyectocoder-dc2af.appspot.com",

  messagingSenderId: "456276548376",

  appId: "1:456276548376:web:6e9200cb631c2531e15c6d"

};

initializeApp(firebaseConfig); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrouserRouter>
      <App />
    </BrouserRouter>
  </React.StrictMode>,
);
