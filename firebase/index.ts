import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/database';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCN5rz8Pcr_mS2tWJD7359lflTI3VR8U2w",
    authDomain: "w-learning-6405b.firebaseapp.com",
    projectId: "w-learning-6405b",
    storageBucket: "w-learning-6405b.appspot.com",
    messagingSenderId: "183144491739",
    appId: "1:183144491739:web:c815adadf88424f161bafe"
};

firebase.initializeApp(firebaseConfig);

export const authRef = getAuth();
// export const firestoreRef = firebase.firestore();
// export const functionsRef = firebase.functions();
// export const storage = firebase.storage();
// export const storageRef = storage.ref();
// export const databaseRef = firebase.database();
// export const { database } = firebase;
// export const { firestore } = firebase;