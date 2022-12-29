import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCsu2ASNJlwPdVg7CxVxeo4RAHbrwi4c9w",
  authDomain: "verano-2022-practica.firebaseapp.com",
  projectId: "verano-2022-practica",
  storageBucket: "verano-2022-practica.appspot.com",
  messagingSenderId: "1007186736801",
  appId: "1:1007186736801:web:a82bdb331c2806579762e0"
};

 initializeApp(firebaseConfig);
const auth = getAuth()
export{auth};