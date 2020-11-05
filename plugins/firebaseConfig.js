import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyAmCdID1RbomU3Lbj2yM4UV5ZT6SC8MwOw",
        authDomain: "refresh-18a86.firebaseapp.com",
        databaseURL: "https://refresh-18a86.firebaseio.com",
        projectId: "refresh-18a86",
        storageBucket: "refresh-18a86.appspot.com",
        messagingSenderId: "898900694765",
        appId: "1:898900694765:web:a8c27e37544fa2bffe5ee4",
        measurementId: "G-KNE92VF6C1"
    }
    firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()