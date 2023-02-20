// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3tK9dsL7zXsOaUwWTV9U_cpv8wxa4oaE",
  authDomain: "movies-646f7.firebaseapp.com",
  projectId: "movies-646f7",
  storageBucket: "movies-646f7.appspot.com",
  messagingSenderId: "518038130442",
  appId: "1:518038130442:web:f4f738f01104d01277f4f3",
  measurementId: "G-W82XE228BC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;