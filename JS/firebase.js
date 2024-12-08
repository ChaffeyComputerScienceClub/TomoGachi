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
const app = initializeApp(firebaseConfig);
const db=getDatabase();
const auth=getAuth();
const provider=new GoogleAuthProvider();

const testUser = "TestUserSam";
let inventory = null;
let bank = await get(ref(db, testUser + "/Bank/"));
let bankAmount = bank.child("Money").val();
//export {getDatabase, set, get, update, remove, ref, child, push};

//import {getDatabase, set, get, update, remove, ref, child, push} from './firebase.js'; add to other non-module files


// swapping window.value = value to localStorage.setItem("value", JSON.stringify(value));
localStorage.setItem("bank", JSON.stringify(bank));
localStorage.setItem("bankAmount", JSON.stringify(bankAmount));
localStorage.setItem("testUser", JSON.stringify(testUser));
localStorage.setItem("inventory", JSON.stringify(inventory));

localStorage.setItem("app", JSON.stringify(app));
localStorage.setItem("db", JSON.stringify(db));
localStorage.setItem("auth", JSON.stringify(auth));
localStorage.setItem("provider", JSON.stringify(provider));

localStorage.setItem("getAuth", JSON.stringify(getAuth));
localStorage.setItem("GoogleAuthProvider", JSON.stringify(GoogleAuthProvider));
localStorage.setItem("signInWithPopup", JSON.stringify(signInWithPopup));
localStorage.setItem("signOut", JSON.stringify(signOut));
localStorage.setItem("onAuthStateChanged", JSON.stringify(onAuthStateChanged));

localStorage.setItem("getDatabase", JSON.stringify(getDatabase));
localStorage.setItem("set", JSON.stringify(set));
localStorage.setItem("get", JSON.stringify(get));
localStorage.setItem("update", JSON.stringify(update));
localStorage.setItem("remove", JSON.stringify(remove));
localStorage.setItem("ref", JSON.stringify(ref));
localStorage.setItem("child", JSON.stringify(child));
localStorage.setItem("push", JSON.stringify(push));

// Retrieve and parse all stored values from localStorage, assigning them to window properties
window.bank = JSON.parse(localStorage.getItem("bank"));
window.bankAmount = JSON.parse(localStorage.getItem("bankAmount"));
window.testUser = JSON.parse(localStorage.getItem("testUser"));
window.inventory = JSON.parse(localStorage.getItem("inventory"));

window.app = JSON.parse(localStorage.getItem("app"));
window.db = JSON.parse(localStorage.getItem("db"));
window.auth = JSON.parse(localStorage.getItem("auth"));
window.provider = JSON.parse(localStorage.getItem("provider"));

window.getAuth = JSON.parse(localStorage.getItem("getAuth"));
window.GoogleAuthProvider = JSON.parse(localStorage.getItem("GoogleAuthProvider"));
window.signInWithPopup = JSON.parse(localStorage.getItem("signInWithPopup"));
window.signOut = JSON.parse(localStorage.getItem("signOut"));
window.onAuthStateChanged = JSON.parse(localStorage.getItem("onAuthStateChanged"));

window.getDatabase = JSON.parse(localStorage.getItem("getDatabase"));
window.set = JSON.parse(localStorage.getItem("set"));
window.get = JSON.parse(localStorage.getItem("get"));
window.update = JSON.parse(localStorage.getItem("update"));
window.remove = JSON.parse(localStorage.getItem("remove"));
window.ref = JSON.parse(localStorage.getItem("ref"));
window.child = JSON.parse(localStorage.getItem("child"));
window.push = JSON.parse(localStorage.getItem("push"));

// window.bank = bank;
// window.bankAmount = bankAmount;
// window.testUser = testUser;
// window.inventory = inventory;

// window.app = app;
// window.db = db;
// window.auth = auth;
// window.provider = provider;

// window.getAuth = getAuth;
// window.GoogleAuthProvider = GoogleAuthProvider;
// window.signInWithPopup = signInWithPopup;
// window.signOut = signOut;
// window.onAuthStateChanged = onAuthStateChanged;

// window.getDatabase = getDatabase;
// window.set = set;
// window.get = get;
// window.update = update;
// window.remove = remove;
// window.ref = ref;
// window.child = child;
// window.push = push;