import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDdQJgkKPgG7ymzBZPrULncL-al7v1Su0I",
    authDomain: "react-ecommerce-80cbd.firebaseapp.com",
    projectId: "react-ecommerce-80cbd",
    storageBucket: "react-ecommerce-80cbd.appspot.com",
    messagingSenderId: "490696088151",
    appId: "1:490696088151:web:45417f1ac36d48fd44e112",
};

const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)
