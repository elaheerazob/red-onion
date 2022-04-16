
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9QhOHNr-_CCcdxT0TrT7lUzXUzYvIBT0",
  authDomain: "red-onion-d4818.firebaseapp.com",
  projectId: "red-onion-d4818",
  storageBucket: "red-onion-d4818.appspot.com",
  messagingSenderId: "772762794149",
  appId: "1:772762794149:web:f6141d0424c389d76fb54c"
};

const app = initializeApp(firebaseConfig);
const auth =getAuth(app);

export default auth;