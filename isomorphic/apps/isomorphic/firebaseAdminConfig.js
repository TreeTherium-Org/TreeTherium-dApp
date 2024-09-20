// firebaseAdminConfig.js
const admin = require('firebase-admin');
const serviceAccount = require('./treetherium-firebase-adminsdk-s4e5v-cdff8c2d69.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const auth = admin.auth();

module.exports = { auth };
