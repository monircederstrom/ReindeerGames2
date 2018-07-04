import firebase from 'firebase';
import '/auth';
import 'firebase/database';

const prodConfig = {
  apiKey: "AIzaSyDmpkw3ktGpOlWxFJB1ht4mIpiYsD-zDb4",
  authDomain: "reindeergames-89188.firebaseapp.com",
  databaseURL: "https://reindeergames-89188.firebaseio.com",
  projectId: "reindeergames-89188",
  storageBucket: "reindeergames-89188.appspot.com",
  messagingSenderId: "478238340116"
};

const devConfig = {
  apiKey: "AIzaSyDmpkw3ktGpOlWxFJB1ht4mIpiYsD-zDb4",
  authDomain: "reindeergames-89188.firebaseapp.com",
  databaseURL: "https://reindeergames-89188.firebaseio.com",
  projectId: "reindeergames-89188",
  storageBucket: "reindeergames-89188.appspot.com",
  messagingSenderId: "478238340116"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
