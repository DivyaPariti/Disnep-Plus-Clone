import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBypbuQVEr1W6GX4CWFxn7mAKKDMOSVJ_A",
    authDomain: "disney-hotstar-clone-1fa1c.firebaseapp.com",
    projectId: "disney-hotstar-clone-1fa1c",
    storageBucket: "disney-hotstar-clone-1fa1c.appspot.com",
    messagingSenderId: "906526972052",
    appId: "1:906526972052:web:b499ed9a67c93c9affbc81",
    measurementId: "G-4XYW0JMCS1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;