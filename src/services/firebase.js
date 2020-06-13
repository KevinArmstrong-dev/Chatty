import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAQE3wpM7g4gaRrfRynwO1hjQ2m_3FKj54",
    authDomain: "chatty-ffb1e.firebaseapp.com",
    databaseURL: "https://chatty-ffb1e.firebaseio.com"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth;
  export const db = firebase.database();