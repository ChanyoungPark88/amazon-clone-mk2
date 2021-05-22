import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTbf4rRLSmHWCrK47wGqZmMwrd9Q6O39w",
  authDomain: "clone-mk2.firebaseapp.com",
  projectId: "clone-mk2",
  storageBucket: "clone-mk2.appspot.com",
  messagingSenderId: "976308512505",
  appId: "1:976308512505:web:59da359af85047e6a46428",
  measurementId: "G-6RWGWS6G8Q"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { db, auth }