import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";
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


import {getDatabase, set, get, update, remove, ref, child, push}
from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";
const db=getDatabase();

const testUser = "TestUserSam";

//export {getDatabase, set, get, update, remove, ref, child, push};

//import {getDatabase, set, get, update, remove, ref, child, push} from './firebase.js'; add to other non-module files
window.testUser = testUser;
window.db = db;
window.getDatabase = getDatabase;
window.set = set;
window.get = get;
window.update = update;
window.remove = remove;
window.ref = ref;
window.child = child;
window.push = push;