import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmhzXLpBVaoahxVH50Hoj8sQXNHBsMub0",
  authDomain: "finace-app-80947.firebaseapp.com",
  projectId: "finace-app-80947",
  storageBucket: "finace-app-80947.appspot.com",
  messagingSenderId: "832141975058",
  appId: "1:832141975058:web:578858c17fc62f56b282cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
