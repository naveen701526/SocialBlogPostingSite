// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDHQx8YjqHS9RV4VWl7RXVT1BeV0Y57Zwc',
  authDomain: 'blogwithreact.firebaseapp.com',
  projectId: 'blogwithreact',
  storageBucket: 'blogwithreact.appspot.com',
  messagingSenderId: '36081761170',
  appId: '1:36081761170:web:e33e87c8c4de8a00031f4b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
