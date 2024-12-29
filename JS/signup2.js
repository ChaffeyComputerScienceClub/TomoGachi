import { initializeApp } from "../firebase-sdk/firebase-app.js";
import { getAnalytics } from "../firebase-sdk/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "../firebase-sdk/firebase-auth.js";
import {getDatabase, set, get, update, remove, ref, child, push} from "../firebase-sdk/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyCDsIup2KaJeQMPL5jvCMzMA7RTpPiPg7o",
  authDomain: "tomotaru-bb27a.firebaseapp.com",
  databaseURL: "https://tomotaru-bb27a-default-rtdb.firebaseio.com",
  projectId: "tomotaru-bb27a",
  storageBucket: "tomotaru-bb27a.appspot.com",
  messagingSenderId: "281838524572",
  appId: "1:281838524572:web:ee113e29d661a9c1a73559",
  measurementId: "G-9HY07GMSFH"
};
let user = null;
const app = initializeApp(firebaseConfig);
const db=getDatabase();
const auth=getAuth();

        const userEmail = document.querySelector("#userEmail");
        const userPassword = document.querySelector("#userPassword");
        const signUpButton = document.querySelector("#signUpButton");
        const signInButton = document.querySelector("#signInButton");
        const signOutButton = document.querySelector("#signOutButton");


        const userSignUp = async() => {
            const signUpEmail = userEmail.value;
            const signUpPassword = userPassword.value;
            createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
            .then((userCredential) => {
                user = userCredential.user;

                alert("Your account has been created!");
                set(ref(db, "User/" + user.uid + "/Bank/" ),{
                    Money: 0
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode + errorMessage)
            })
        }

        const userSignIn = async() => {
            const signInEmail = userEmail.value;
            const signInPassword = userPassword.value;
            signInWithEmailAndPassword(auth, signInEmail, signInPassword)
            .then((userCredential) => {
                user = userCredential.user;
                alert("You have signed in successfully!");
                set(ref(db, "User/" + user.uid + "/Bank/" ),{
                    Money: 0
                })
                NextPage();
   
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode + errorMessage)
            })
        }

        function NextPage(){
            if(user){
                document.cookie = "user=" + encodeURIComponent(JSON.stringify(user)) + "; path=/";
                window.location.href = "mainPage.html";
        
            }
            else {
                console.log("user isn't defined");
            }
        }



        signUpButton.addEventListener('click', userSignUp);
        signInButton.addEventListener('click', userSignIn);
        // signOutButton.addEventListener('click', userSignOut);