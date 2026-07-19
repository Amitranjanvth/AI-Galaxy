import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "ai-galaxy-97.firebaseapp.com",
  projectId: "ai-galaxy-97",
  storageBucket: "ai-galaxy-97.firebasestorage.app",
  messagingSenderId: "526786516234",
  appId: "1:526786516234:web:74326dd25267101c21d6f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();

export { auth, googleprovider };