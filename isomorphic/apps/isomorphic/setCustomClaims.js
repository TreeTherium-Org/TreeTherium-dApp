// setCustomClaims.js
const { auth } = require('./firebaseAdminConfig');

async function setCustomClaims(uid, role) {
  try {
    await auth.setCustomUserClaims(uid, { role });
    console.log(`Custom claims set for ${uid}`);
  } catch (error) {
    console.error('Error setting custom claims:', error);
  }
}

module.exports = { setCustomClaims };
