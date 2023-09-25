// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'internship-tracker-e47ea.firebaseapp.com',
  projectId: 'internship-tracker-e47ea',
  storageBucket: 'internship-tracker-e47ea.appspot.com',
  messagingSenderId: '1013863893306',
  appId: '1:1013863893306:web:122f6a2f0edabcccace803',
  measurementId: 'G-N7M08GMDE2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
