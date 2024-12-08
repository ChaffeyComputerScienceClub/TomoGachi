import { initializeApp } from "../firebase-sdk/firebase-app.js";
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
  // swapping window.value = value to localStorage.setItem("value", JSON.stringify(value));

  const app = initializeApp(firebaseConfig);
  const auth=getAuth();
  const provider=new GoogleAuthProvider();
  let user = null;
  
  localStorage.setItem("app", JSON.stringify(app));
  window.app = JSON.parse(localStorage.getItem("app"));
  
  localStorage.setItem("user", JSON.stringify(user));
  window.user = JSON.parse(localStorage.getItem("user"));
//   localStorage.setItem("getAuth", JSON.stringify(getAuth));
//   window.getAuth = JSON.parse(localStorage.getItem("getAuth"));

//   localStorage.setItem("GoogleAuthProvider", JSON.stringify(GoogleAuthProvider));
//   window.GoogleAuthProvider = JSON.parse(localStorage.getItem("GoogleAuthProvider"));

  localStorage.setItem("provider", JSON.stringify(provider));
  window.provider = JSON.parse(localStorage.getItem("provider"));

//   localStorage.setItem("signInWithPopup", JSON.stringify(signInWithPopup));
//   window.signInWithPopup = JSON.parse(localStorage.getItem("signInWithPopup"));
  
//   localStorage.setItem("signOut", JSON.stringify(signOut));
//   window.signOut = JSON.parse(localStorage.getItem("signOut"));
  
//   localStorage.setItem("onAuthStateChanged", JSON.stringify(onAuthStateChanged));
//   window.onAuthStateChanged = JSON.parse(localStorage.getItem("onAuthStateChanged"));
  
  localStorage.setItem("auth", JSON.stringify(auth));
  window.auth = JSON.parse(localStorage.getItem("auth"));
  
//   localStorage.setItem("set", JSON.stringify(set));
//   window.set = JSON.parse(localStorage.getItem("set"));
  
//   localStorage.setItem("get", JSON.stringify(get));
//   window.get = JSON.parse(localStorage.getItem("get"));
  
//   localStorage.setItem("update", JSON.stringify(update));
//   window.update = JSON.parse(localStorage.getItem("update"));
  
//   localStorage.setItem("remove", JSON.stringify(remove));
//   window.remove = JSON.parse(localStorage.getItem("remove"));
  
//   localStorage.setItem("ref", JSON.stringify(ref));
//   window.ref = JSON.parse(localStorage.getItem("ref"));
  
//   localStorage.setItem("child", JSON.stringify(child));
//   window.child = JSON.parse(localStorage.getItem("child"));
  
//   localStorage.setItem("push", JSON.stringify(push));
//   window.push = JSON.parse(localStorage.getItem("push"));
  

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

onAuthStateChanged(auth, (user)=>{
    if(user){
    signOutButton.style.display="block";
    message.style.display="block";
    userName.innerHTML=user.displayName;
    }else{
        console.log("eror");
    signOutButton.style.display="none";
    message.style.display="none";
    }
})

function CreateUser(){
set(ref(db, user.displayName),{
    UserName: user.displayName
}).catch((error)=>{

})
}

function NextPage(){
    if(user){
        console.log(user);
        window.location.href = "mainPage.html";
    }
    else {
        console.log("user is not defined");
    }

}
signInButton.addEventListener('click', userSignIn);
signOutButton.addEventListener('click', userSignOut);
nextpg.addEventListener('click', NextPage);







