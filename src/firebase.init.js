// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDtnrqURwWj0t-NgZQYy914hYuErjctFY",
  authDomain: "waer-wolf.firebaseapp.com",
  projectId: "waer-wolf",
  storageBucket: "waer-wolf.appspot.com",
  messagingSenderId: "1023218909457",
  appId: "1:1023218909457:web:e11c0487726cbfcba20cb0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
