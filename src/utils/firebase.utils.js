// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6b9NQUo0gcHI4dUjaFijagIK5PCEp3YU",
  authDomain: "onlinestore-db-4c9f6.firebaseapp.com",
  projectId: "onlinestore-db-4c9f6",
  storageBucket: "onlinestore-db-4c9f6.appspot.com",
  messagingSenderId: "1028602224504",
  appId: "1:1028602224504:web:53e50beb839fc010bcb28d",
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  //if user data exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }
  return userDocRef;

  //if not exists,, set the document form data in userAuth in my collection

  //return user data
};
