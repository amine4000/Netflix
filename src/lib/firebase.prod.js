import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyBW_LNn4yxqFCVAP6Dmrsh5WIN-ortZskc",
  authDomain: "data-b80c2.firebaseapp.com",
  databaseURL: "https://data-b80c2.firebaseio.com",
  projectId: "data-b80c2",
  storageBucket: "data-b80c2.appspot.com",
  messagingSenderId: "991577741000",
  appId: "1:991577741000:web:b7979d2ae3a7065aa0b7fd"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
