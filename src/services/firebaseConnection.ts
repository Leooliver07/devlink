
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2wDFgeVjHEmXPutai5yZRZbX5FvKyWXU",
  authDomain: "devlinks-81378.firebaseapp.com",
  projectId: "devlinks-81378",
  storageBucket: "devlinks-81378.appspot.com",
  messagingSenderId: "314465122514",
  appId: "1:314465122514:web:83efc0db64452ebaa2950b"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app);

export {db, auth};