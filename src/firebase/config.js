import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBfzsytgqQ5U6q7RPu7lFKVsuzvFD6eMb0",
    authDomain: "vue-blog-system-17697.firebaseapp.com",
    projectId: "vue-blog-system-17697",
    storageBucket: "vue-blog-system-17697.appspot.com",
    messagingSenderId: "308830875520",
    appId: "1:308830875520:web:baab92cbb50321427fdb65"
  };

  firebase.initializeApp(firebaseConfig);
  let db=firebase.firestore();
  let auth=firebase.auth();
  let timestamp=firebase.firestore.FieldValue.serverTimestamp;

  export {db,timestamp,auth}
