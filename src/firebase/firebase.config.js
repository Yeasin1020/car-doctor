// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDahHB5Ff_pJUv6hT5VhiXlIEaiCOjDLFs",
  authDomain: "cars-doctor-a217b.firebaseapp.com",
  projectId: "cars-doctor-a217b",
  storageBucket: "cars-doctor-a217b.appspot.com",
  messagingSenderId: "1004852084562",
  appId: "1:1004852084562:web:62e474a1d744820527c48b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;