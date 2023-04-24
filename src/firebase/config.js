// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2BANbSGGiDKIAEFDPbSMj1YhvL3yBDvU",
  authDomain: "fakebook-b1d55.firebaseapp.com",
  projectId: "fakebook-b1d55",
  storageBucket: "fakebook-b1d55.appspot.com",
  messagingSenderId: "249437141362",
  appId: "1:249437141362:web:c163cd94a44ea80a9c45eb",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
// export const FirebaseDb = getFirestore(FirebaseApp);
