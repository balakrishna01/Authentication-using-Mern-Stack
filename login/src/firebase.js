// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhN0_8UCcdSovQJGT9mVVzG1s3grZzvIA",
  authDomain: "ar-classroom-programme.firebaseapp.com",
  projectId: "ar-classroom-programme",
  storageBucket: "ar-classroom-programme.appspot.com",
  messagingSenderId: "255353901956",
  appId: "1:255353901956:web:9a3f960c9d1811cf1443d1",
  measurementId: "G-NPDYD12HSR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);