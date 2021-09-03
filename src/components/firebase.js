// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "personal-gallery-55e21.firebaseapp.com",
  projectId: "personal-gallery-55e21",
  storageBucket: "personal-gallery-55e21.appspot.com",
  messagingSenderId: process.env.MESSAGING_ID,
  appId: process.env.APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const gallStorage = firebase.storage();
const gallFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { gallStorage, gallFirestore, timestamp };
