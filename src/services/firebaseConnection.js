import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyDomc753k7JPBU0flWJm6bGWruKwcKl5XA",
    authDomain: "login-78288.firebaseapp.com",
    projectId: "login-78288",
    storageBucket: "login-78288.appspot.com",
    messagingSenderId: "394538641569",
    appId: "1:394538641569:web:10115ab0525c340f4fe8e0"
  };

  // se não tiver nenhum conexão aberta, vou inicair uma conexão.
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig)
  }

  export default firebase;