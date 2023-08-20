// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWYb0iITufY6DESBm0MxsIWD4eYYLDnxA",
  authDomain: "pomodoroapp-fccc7.firebaseapp.com",
  projectId: "pomodoroapp-fccc7",
  storageBucket: "pomodoroapp-fccc7.appspot.com",
  messagingSenderId: "788407420978",
  appId: "1:788407420978:web:ffc5fe6e206ef7e90c542b",
  measurementId: "G-5FKEVJVFTC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
