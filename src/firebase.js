// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqc--RtOa1uT42DW12fAwfHUzKG03CJms",
    authDomain: "portfoliorone.firebaseapp.com",
    projectId: "portfoliorone",
    storageBucket: "portfoliorone.appspot.com",
    messagingSenderId: "905195641227",
    appId: "1:905195641227:web:598a7e19aad1f40ad9778e"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()

export default db