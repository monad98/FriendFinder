const firebase = require("firebase");
const config = {
  // fill this config
};
firebase.initializeApp(config);
const database = firebase.database();

module.exports = database;