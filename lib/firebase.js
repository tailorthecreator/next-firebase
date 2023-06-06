// this is where we import the SDK from firebase
import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// this is the configuration for our firebase app, that you can get from firebase console

const firebaseConfig = {
    apiKey: "AIzaSyC9bSxikwEkrZWBijtP0Sti_NQ03mnPSlk",
    authDomain: "nextfire-b2b67.firebaseapp.com",
    projectId: "nextfire-b2b67",
    storageBucket: "nextfire-b2b67.appspot.com",
    messagingSenderId: "1093874351507",
    appId: "1:1093874351507:web:4f31bc0138491bbe2bfc66"
}
  

// this is to check if firebase is already initialized. 
//Because if it is, we don't want to initialize it again. 
// The reading of the initialization only happens once, 
// but twice because of the way things work in development.


//If the initializeApp is already called for an existing project, it is
// going to cause an error. But we can avoid that by wrapping in a condition 
// that checks the apps length, and will only initialize the app if the length is zero.

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

//Now the the app is initialized, we can export the actual SDK's we want to work with


export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();