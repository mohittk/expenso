import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { Provider } from "./context/context";
import './index.css';
import firebase from "firebase/compat/app";


firebase.initializeApp({
    apiKey: "AIzaSyDcg_3FogwyFNNpc66LCc56tfqkhmY-8gw",
    authDomain: "expenso-a33e5.firebaseapp.com",
    projectId: "expenso-a33e5",
    storageBucket: "expenso-a33e5.appspot.com",
    messagingSenderId: "291595298909",
    appId: "1:291595298909:web:4fc217652e5134c11d45b4"
});
  


ReactDOM.render(
    <Provider>
    <App />
    </Provider>, document.getElementById('root')
)
