// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByDcMEeS10cAif0IJKt0kFCJJNsamMg6k",
  authDomain: "react-yoga-auth.firebaseapp.com",
  projectId: "react-yoga-auth",
  storageBucket: "react-yoga-auth.appspot.com",
  messagingSenderId: "232813696075",
  appId: "1:232813696075:web:40c1da59064d31475369ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;