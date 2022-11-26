import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzfdVeVYGuldphNMfci5TbZnVPuQpj1WA",
  authDomain: "zomato-clone-72b10.firebaseapp.com",
  projectId: "zomato-clone-72b10",
  storageBucket: "zomato-clone-72b10.appspot.com",
  messagingSenderId: "238485349393",
  appId: "1:238485349393:web:25dd385fb0e83997cebdb0",
  measurementId: "G-HPTX9J1PYF"
};

//connects to database
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db,auth } ;
