import firebase from 'firebase'


var config = {
  apiKey: "AIzaSyAys930lhbE-iwNdcc01umCBqvZlGXt7Xs",
  authDomain: "inventoryredux.firebaseapp.com",
  databaseURL: "https://inventoryredux.firebaseio.com",
  projectId: "inventoryredux",
  storageBucket: "inventoryredux.appspot.com",
  messagingSenderId: "316811676181"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const database = firebase.database();
