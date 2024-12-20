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

window.bank = bank;
window.bankAmount = bankAmount;
window.testUser = testUser;
window.inventory = inventory;

window.app = app;
window.db = db;
window.auth = auth;
window.provider = provider;

window.getAuth = getAuth;
window.GoogleAuthProvider = GoogleAuthProvider;
window.signInWithPopup = signInWithPopup;
window.signOut = signOut;
window.onAuthStateChanged = onAuthStateChanged;

window.getDatabase = getDatabase;
window.set = set;
window.get = get;
window.update = update;
window.remove = remove;
window.ref = ref;
window.child = child;
window.push = push;