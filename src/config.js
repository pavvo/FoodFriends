import firebase from "firebase";

var config = {
  apiKey: "AIzaSyDpts3zBI7HsGlvQ4TzeqIr9MYeD_wdih8",
  authDomain: "fun-food-friends-be28f.firebaseapp.com",
  databaseURL: "https://fun-food-friends-be28f.firebaseio.com",
  projectId: "fun-food-friends-be28f",
  storageBucket: "fun-food-friends-be28f.appspot.com",
  messagingSenderId: "404714182388"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
