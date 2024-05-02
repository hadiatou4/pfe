import { initializeApp } from "firebase/app";
import 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyD4F1zLfh6mMTkT89CR777I3dbNU0VB7Uk",
  authDomain: "taxik-3355b.firebaseapp.com",
  projectId: "taxik-3355b",
  storageBucket: "taxik-3355b.appspot.com",
  messagingSenderId: "522010989089",
  appId: "1:522010989089:web:82bfd41adb5bad605f4960"
};
const app = initializeApp(firebaseConfig);
export {app};