import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCp4osSmPZosqmb4w0GpCPTfoCCruqQ5co",
  authDomain: "react-netflicks.firebaseapp.com",
  projectId: "react-netflicks",
  storageBucket: "react-netflicks.appspot.com",
  messagingSenderId: "853887553664",
  appId: "1:853887553664:web:2a22c8dcdeeeb01ed69665"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, db };
