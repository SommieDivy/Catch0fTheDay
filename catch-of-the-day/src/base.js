import Rebase from "re-base";
import firebase from "firebase";
//create firebase app by copying the codes from firebase web app and pasting it on the firebase app below
const firebaseApp = firebase.initializeApp(
  //paste d code from firebase web app
  {
    apiKey: "AIzaSyB8N9dCMVQhw2QS179ONT2j4YGMdMHg0W8",
    authDomain: "catch-of-the-day-sommie-divy.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-sommie-divy.firebaseio.com"
  }
);
//create the rebase binding
//the database function in the code below will return the actual database that we have
const base = Rebase.createclass(firebaseApp.database());

//this is a named export ie why its in {} just like {formatPrice} in the helper.js file which formats money
export { firebaseApp };

export default base;

//now goto app.js mand mirror fish state over to my firebase
