import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config = {
    apiKey: "AIzaSyCgj5wza7OTMg-ozt5oXUN6ANCfK7If5e4",
    authDomain: "haiku-c1f8c.firebaseapp.com",
    projectId: "haiku-c1f8c",
    storageBucket: "haiku-c1f8c.appspot.com",
    messagingSenderId: "306255023660",
    appId: "1:306255023660:web:539aaa60de37bd6fefcb89"
}

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

console.log('firebase', firebase);

export { firebase, FieldValue} ;