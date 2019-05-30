import firebase from 'firebase';

//CONEXION A FIREBASE
const config = {
    apiKey: "AIzaSyAMwQxIA0Bu5OmTuboz_9pDCrwcL32olDg",
    authDomain: "crud-e9839.firebaseapp.com",
    databaseURL: "https://crud-e9839.firebaseio.com",
    projectId: "crud-e9839",
    storageBucket: "crud-e9839.appspot.com",
    messagingSenderId: "980007301652"
  };

  const fire = firebase.initializeApp(config);

  export default fire;


  