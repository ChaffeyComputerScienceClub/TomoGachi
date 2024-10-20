import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
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
const app = initializeApp(firebaseConfig);
import {getDatabase, set, get, update, remove, ref, child}
from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";
const db=getDatabase();
const auth=getAuth();

import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";



//code to add goals
var dateInput=document.getElementById("dateInput");
var amountInput=document.getElementById("amountInput");
var titleInput=document.getElementById("titleInput");
var userName=document.getElementById("userName");

function CreateItem(){
  var user=auth.currentUser;
  console.log(user);
  generate(amountInput.value, titleInput.value, dateInput.value);
  set(ref(db, "User/" + user.displayName + "/GoalSavings/" + titleInput.value),{
    GoalDate: dateInput.value,
    GoalAmount: amountInput.value
})
}

function generate(amountValue, titleInput, dateInput){
var title = document.createElement("h2");
title.innerHTML = titleInput;
document.body.appendChild(title);

var current=document.createElement("h3");
current.innerHTML=0;
document.body.appendChild(current);

var goal=document.createElement("h3");
goal.innerHTML=amountValue;
document.body.appendChild(goal);

var meter=document.createElement("meter");
meter.max=amountValue;
meter.min=0;
meter.value=0;
document.body.appendChild(meter);
//newElement.classList.add("my-class"); // Add a CSS class
}

function updateMeter(){


}

var addButton=document.querySelector("#addButton");
addButton.addEventListener('click', CreateItem);

onAuthStateChanged(auth, (user)=>{
  if(user){
    console.log(user);
  }else{
    console.log("error")
  }
})