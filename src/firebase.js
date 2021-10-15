import firebase, { firestore } from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDRu-KWil7Wr2Kr8PP8OVEJpIXtJRHY5RM",
  authDomain: "facebook-clone-56597.firebaseapp.com",
  projectId: "facebook-clone-56597",
  storageBucket: "facebook-clone-56597.appspot.com",
  messagingSenderId: "704657167857",
  appId: "1:704657167857:web:a69b921bb8cd4e23bee050"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;