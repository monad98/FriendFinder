const firebase = require("firebase");
const config = {
  apiKey: "ThisIsFakeAPIKey",
  authDomain: "survey-35d7e.firebaseapp.com",
  databaseURL: "https://survey-35d7e.firebaseio.com",
  projectId: "survey-35d7e",
  storageBucket: "survey-35d7e.appspot.com",
  messagingSenderId: "111111111"
};
firebase.initializeApp(config);
const database = firebase.database();

module.exports = database;