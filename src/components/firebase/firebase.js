import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCXsFYMIpWnaZSHbY1gav-XN-A9M-0Z7gQ",
  authDomain: "resource-docket.firebaseapp.com",
  projectId: "resource-docket",
  storageBucket: "resource-docket.appspot.com",
  messagingSenderId: "319277841741",
  appId: "1:319277841741:web:c22520f683529dcd3e0b04"
};
// Initialize Firebase

firebase.initializeApp(config);

export default firebase;
