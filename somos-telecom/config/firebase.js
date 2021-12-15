import firebase from "firebase"
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyDnUkX7_rEy0PsNl9wbXFcV-DSSQyLnH9o",
  authDomain: "somos-64ffb.firebaseapp.com",
  projectId: "somos-64ffb",
  storageBucket: "somos-64ffb.appspot.com",
  messagingSenderId: "144268457481",
  appId: "1:144268457481:web:8437473e1dbd2e16442ad8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase