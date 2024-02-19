// import firebase from 'firebase/app';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAl3MFkXiJ9eVGHKOTQicoqbtKieHt2TEo",
  authDomain: "droodle-3024f.firebaseapp.com",
  projectId: "droodle-3024f",
  storageBucket: "droodle-3024f.appspot.com",
  messagingSenderId: "1091273252625",
  appId: "1:1091273252625:web:75cbc672092bdb720976b0",
  measurementId: "G-7NQ8JC3N2M",
};
let app;

app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
