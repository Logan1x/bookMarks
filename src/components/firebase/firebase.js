import firebase from "firebase";

import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDAueYZAct1LCf2ngfF_lKgla-cRM3Tmc0",
  authDomain: "bookmarks-6faac.firebaseapp.com",
  projectId: "bookmarks-6faac",
  storageBucket: "bookmarks-6faac.appspot.com",
  messagingSenderId: "190350792223",
  appId: "1:190350792223:web:2bc20067c4f0916193672a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
