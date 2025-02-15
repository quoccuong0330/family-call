// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByLm9LYEqWKECAeoSeLwinCvkmWwq3RdI",
  authDomain: "family-call-a2153.firebaseapp.com",
  projectId: "family-call-a2153",
  storageBucket: "family-call-a2153.firebasestorage.app",
  messagingSenderId: "243977330015",
  appId: "1:243977330015:web:e9afcd665c835d105aeaea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
