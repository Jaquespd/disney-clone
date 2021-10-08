import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBxhpSYLkWl7bjXQ6Q3uXDlRoACW7oFLKM",
  authDomain: "disney-clone-80ebd.firebaseapp.com",
  projectId: "disney-clone-80ebd",
  storageBucket: "disney-clone-80ebd.appspot.com",
  messagingSenderId: "1006604358386",
  appId: "1:1006604358386:web:cbee69d6598407686fb66b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
