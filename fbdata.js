firebase = require("firebase");
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyDmpkw3ktGpOlWxFJB1ht4mIpiYsD-zDb4",
    authDomain: "reindeergames-89188.firebaseapp.com",
    databaseURL: "https://reindeergames-89188.firebaseio.com",
    projectId: "reindeergames-89188",
    storageBucket: "reindeergames-89188.appspot.com",
    messagingSenderId: "478238340116"
};
firebase.initializeApp(config);
  var database = firebase.database();
database.ref().on("child_added", function(childSnapshot, prevChildKey){
   console.log(childSnapshot.val());

//console.log(username);
})