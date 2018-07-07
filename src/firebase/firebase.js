import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyDmpkw3ktGpOlWxFJB1ht4mIpiYsD-zDb4",
    authDomain: "reindeergames-89188.firebaseapp.com",
    databaseURL: "https://reindeergames-89188.firebaseio.com",
    projectId: "reindeergames-89188",
    storageBucket: "reindeergames-89188.appspot.com",
    messagingSenderId: "478238340116"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
const db = firebase.database();
const auth = firebase.auth();

export {
    db,
    auth,
  };