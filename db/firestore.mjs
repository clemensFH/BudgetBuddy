// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyLZN4g9XNhbTwkQrTXDxeSo1UF7Oi5cQ",
    authDomain: "budgetbuddy-18ae7.firebaseapp.com",
    projectId: "budgetbuddy-18ae7",
    storageBucket: "budgetbuddy-18ae7.appspot.com",
    messagingSenderId: "33155432701",
    appId: "1:33155432701:web:78eddc9b258335c655be94",
    measurementId: "G-KDQX47B3YF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, auth, db, analytics };