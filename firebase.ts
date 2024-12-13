// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAey-gsNJK4pNRKrkCcB5eG2nntydkenh4",
    authDomain: "aureonix-69db9.firebaseapp.com",
    projectId: "aureonix-69db9",
    storageBucket: "aureonix-69db9.firebasestorage.app",
    messagingSenderId: "872997736666",
    appId: "1:872997736666:web:51c9b36f3d51aac8aa15e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const instances = {app, auth}

export default instances