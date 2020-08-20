// Import
import * as firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB-BHyW2bjamDwBWn4G7LB83qDQZr3MzlE',
  authDomain: 'cat-bomb.firebaseapp.com',
  databaseURL: 'https://cat-bomb.firebaseio.com',
  projectId: 'cat-bomb',
  storageBucket: 'cat-bomb.appspot.com',
  messagingSenderId: '112403410991',
  appId: '1:112403410991:web:456adc1bf515e5b66056da',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
