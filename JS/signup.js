import { initializeApp } from "../firebase-sdk/firebase-app.js";
import { getAnalytics } from "../firebase-sdk/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "../firebase-sdk/firebase-auth.js";
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
const provider=new GoogleAuthProvider();

  

const signInButton=document.getElementById("signInButton");
const signOutButton=document.getElementById("signOutButton");

const nextpg=document.getElementById("nextpg");

const message=document.getElementById("message");
const userName=document.getElementById("userName");
signOutButton.style.display="none";
message.style.display="none";

const userSignIn=async()=>{
    signInWithPopup(auth, provider)
    .then((result)=>{
        user=result.user
    }).catch((error)=>{
        console.log(error);
        const errorCode=error.errorCode
        
        
        const errorMessage=error.message
    })
}

const userSignOut=async()=>{
    signOut(auth).then(()=>{
        alert("You have signed out successfully!")
    })
}

onAuthStateChanged(auth, (newUser)=>{
    console.log("state changed");
    if(newUser){
        console.log(newuser.uid);
    signOutButton.style.display="block";
    message.style.display="block";
    userName.innerHTML=newuser.uid;
    user = newUser;
    }else{
        console.log("no user");
    signOutButton.style.display="none";
    message.style.display="none";
    }
})

function CreateUser(){
set(ref(db, user.uid),{
    UserName: user.uid
}).catch((error)=>{

})
}

function NextPage(){
    if(user){
        
        window.location.href = "mainPage.html?user=" + encodeURIComponent(JSON.stringify(user));

    }
    else {
        console.log("user isn't defined");
    }

}
signInButton.addEventListener('click', userSignIn);
signOutButton.addEventListener('click', userSignOut);
nextpg.addEventListener('click', NextPage);







