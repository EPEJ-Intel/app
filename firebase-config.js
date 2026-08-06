// ============================================================
// Configuration Firebase — EPEJ
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyCj7Ay-miuIdaomDwAjtIC_16nDUQk3BAI",
  authDomain: "epej-app.firebaseapp.com",
  projectId: "epej-app",
  storageBucket: "epej-app.firebasestorage.app",
  messagingSenderId: "658526425498",
  appId: "1:658526425498:web:ae1ecfff81da76d405ea23"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
