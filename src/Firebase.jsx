import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyAmppVe7upQdPZhHCfn-0QaKx5dAAateJ8",
  authDomain: "kafedra-hpi.firebaseapp.com",
  projectId: "kafedra-hpi",
  storageBucket: "kafedra-hpi.appspot.com",
  messagingSenderId: "1000485759455",
  appId: "1:1000485759455:web:ab2f2d3ab13eb26ebf3c6a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
