// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5UOd2Bp2ghS8FkYvGIi65ZY0tKQ4a7jo",
  authDomain: "task-management-app-264b6.firebaseapp.com",
  projectId: "task-management-app-264b6",
  storageBucket: "task-management-app-264b6.appspot.com",
  messagingSenderId: "729153308920",
  appId: "1:729153308920:web:12df7f74bb4bff688f930d",
  measurementId: "G-6J6D9TZEZS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase
export const db = firebase.firestore();