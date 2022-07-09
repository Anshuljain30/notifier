import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

let search = window.location.search;
let params = new URLSearchParams(search);
let apiKey = params.get("apiKey");
let authDomain = params.get("authDomain");
let projectId = params.get("projectId");
let storageBucket = params.get("storageBucket");
let messagingSenderId = params.get("messagingSenderId");
let appId = params.get("appId");

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
