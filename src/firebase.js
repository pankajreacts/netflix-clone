import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBpilJ7SYilUl_DGVarMpi9p30iuf5QnZk",
  authDomain: "netflix-clone-yt-first.firebaseapp.com",
  projectId: "netflix-clone-yt-first",
  storageBucket: "netflix-clone-yt-first.appspot.com",
  messagingSenderId: "264686065095",
  appId: "1:264686065095:web:41c36effa44e98191eb5e2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
