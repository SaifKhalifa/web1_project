import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAYo0JnmJ_NHn2BhRr81-Jr3aTsRR8ntNk",
  authDomain: "web1-finalproject-team23.firebaseapp.com",
  projectId: "web1-finalproject-team23",
  storageBucket: "web1-finalproject-team23.appspot.com",
  messagingSenderId: "742492200049",
  appId: "1:742492200049:web:85554a921975d34d1d4fd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);
export default db;
