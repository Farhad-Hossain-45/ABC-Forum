// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdEZvdi7SHg_z6b3OpQNtnzfnHGb9aF2g",
  authDomain: "final-assignment-client.firebaseapp.com",
  projectId: "final-assignment-client",
  storageBucket: "final-assignment-client.appspot.com",
  messagingSenderId: "891397730588",
  appId: "1:891397730588:web:e26ac73808f815c8010ad9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;