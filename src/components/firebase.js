// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq8Ol7tJs8CEl0LkjGl6F-q_gKc1d1Vwo",
  authDomain: "personal-gallery-55e21.firebaseapp.com",
  projectId: "personal-gallery-55e21",
  storageBucket: "personal-gallery-55e21.appspot.com",
  messagingSenderId: "833566184638",
  appId: "1:833566184638:web:fe89264cdb6370d230faef",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const gallStorage = firebase.storage();
const gallFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { gallStorage, gallFirestore, timestamp };
