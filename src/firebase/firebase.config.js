// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF9DtF56VKoGeVEpOCtRZxkpfWBswHaOc",
  authDomain: "ema-john-with-firebase-a-f08b4.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-f08b4",
  storageBucket: "ema-john-with-firebase-a-f08b4.appspot.com",
  messagingSenderId: "265300919808",
  appId: "1:265300919808:web:ebd326b06877e1b1503ae5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;