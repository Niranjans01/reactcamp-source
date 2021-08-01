const initApp = require('firebase-admin');

initApp.initializeApp();

const db = initApp.firestore();

module.exports = {db, initApp};