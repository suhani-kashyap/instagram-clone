import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCBkBtNsHXGrsDQkIrEj9gmWDzli39HbpA",
    authDomain: "instagram-clone-38786.firebaseapp.com",
    databaseURL: "https://instagram-clone-38786-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-38786",
    storageBucket: "instagram-clone-38786.appspot.com",
    messagingSenderId: "88753074941",
    appId: "1:88753074941:web:2715dcdd1ba5c6c8268494",
    measurementId: "G-61FHB324HE"
  };

// initialize the firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// for db, auth and storage
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};