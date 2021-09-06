  import firebase from "firebase"
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA6WLRobEU4lBhLkrnt578ugSneuSOp5ec",
    authDomain: "portfolio-49c99.firebaseapp.com",
    databaseURL: "https://portfolio-49c99.firebaseio.com",
    projectId: "portfolio-49c99",
    storageBucket: "portfolio-49c99.appspot.com",
    messagingSenderId: "638947842676",
    appId: "1:638947842676:web:537bb03e9f142c3e548f21",
    measurementId: "G-5NF2WTJL17"
  };
  
    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    const auth = firebase.auth();
    const storage = firebase.storage()
  
    export {auth,storage}
    export default db; 
