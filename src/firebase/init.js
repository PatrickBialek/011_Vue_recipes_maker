import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBAb1HE9bWcNKuiGnAh8XHXO_0VLNKmTP8",
  authDomain: "drink-creator-e2966.firebaseapp.com",
  databaseURL: "https://drink-creator-e2966.firebaseio.com",
  projectId: "drink-creator-e2966",
  storageBucket: "drink-creator-e2966.appspot.com",
  messagingSenderId: "970468632547"
};

const firebaseApp = firebase.initializeApp(config);

// Export firebase databse
export default firebaseApp.firestore()
