// Conveniently import this file anywhere to use db

import firebase from "firebase/app";
import "firebase/firestore";

// var firebaseConfig = {
//   apiKey: "AIzaSyB0uZFZ3LEn-_QJ82g9i_6xd2VhWP0aB4A",
//   authDomain: "vuefiretest-1b59a.firebaseapp.com",
//   databaseURL: "https://vuefiretest-1b59a.firebaseio.com",
//   projectId: "vuefiretest-1b59a",
//   storageBucket: "vuefiretest-1b59a.appspot.com",
//   messagingSenderId: "559508278704",
//   appId: "1:559508278704:web:f9335dfcb3ee078df4da75",
//   measurementId: "G-HSVYT48LGV"
// };

export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyB0uZFZ3LEn-_QJ82g9i_6xd2VhWP0aB4A",
    authDomain: "vuefiretest-1b59a.firebaseapp.com",
    databaseURL: "https://vuefiretest-1b59a.firebaseio.com",
    projectId: "vuefiretest-1b59a",
    storageBucket: "vuefiretest-1b59a.appspot.com",
    messagingSenderId: "559508278704",
    appId: "1:559508278704:web:f9335dfcb3ee078df4da75",
    measurementId: "G-HSVYT48LGV"
  })
  .firestore();

// Export types that exists in Firestore - Uncomment if you need them in your app
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };
