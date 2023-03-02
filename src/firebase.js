import { initializeApp } from "firebase/app";

// console.log(process.env)
// console.log(process.env.REACT_APP_FIREBASE_APP_ID)
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// };

// console.log(import.meta.env)
// console.log(import.meta.env.REACT_APP_FIREBASE_API_KEY)
// const firebaseConfig = {
//   apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.REACT_APP_FIREBASE_APP_ID,
// };

const firebaseConfig = {
    apiKey: "AIzaSyBIhq3Rp2FQrG-ukzvClhkMhe-Y7vdQkmQ",
    authDomain: "myappbd-b2776.firebaseapp.com",
    projectId: "myappbd-b2776",
    storageBucket: "myappbd-b2776.appspot.com",
    messagingSenderId: "829772110096",
    appId: "1:829772110096:web:0667ad222145994293ed95",
    measurementId: "G-74N7DHDHZR"
};

const app = initializeApp(firebaseConfig);