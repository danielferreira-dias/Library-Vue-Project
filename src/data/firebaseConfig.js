// firebase.js or firebaseConfig.js

import firebase from 'firebase/app';
import 'firebase/auth'; // Import specific Firebase services as needed

const firebaseConfig = {
    apiKey: "AIzaSyDvDdOmcS-ozbptf5gTyZTWSfW3CygkGZA",
    authDomain: "library-project-vue.firebaseapp.com",
    projectId: "library-project-vue",
    storageBucket: "library-project-vue.appspot.com",
    messagingSenderId: "1030813898774",
    appId: "1:1030813898774:web:7a7082e8a3167ef4817d37",
    measurementId: "G-SEWJNR1G2M"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
