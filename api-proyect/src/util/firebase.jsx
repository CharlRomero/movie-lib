// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw1K4EcATL7-ee9fp0zrWH8lj-xkj1BOc",
  authDomain: "api-movie-636b1.firebaseapp.com",
  projectId: "api-movie-636b1",
  storageBucket: "api-movie-636b1.appspot.com",
  messagingSenderId: "434819824328",
  appId: "1:434819824328:web:edb3d8ed47f12531b343fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
