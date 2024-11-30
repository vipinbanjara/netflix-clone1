
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, 
  getAuth,
   signInWithEmailAndPassword, signOut } from "firebase/auth";
 import {addDoc, collection, getFirestore}from "firebase/firestore";
import { toast } from "react-toastify";


 const firebaseConfig = {
  apiKey: "AIzaSyBc8UmAKpIP8C9LgDbVC1IZy7aWXSQQvac",
  authDomain: "javascript-f8b3b.firebaseapp.com",
  projectId: "javascript-f8b3b",
  storageBucket: "javascript-f8b3b.firebasestorage.app",
  messagingSenderId: "121739906895",
  appId: "1:121739906895:web:c20a19bd8e33d2cea3ff3a",
  measurementId: "G-4WH02PFC31"
};

const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const db = getFirestore(app);

const signup = async(name, email,possword)=>{
try {
 const res= await createUserWithEmailAndPassword(auth,email,possword);
 const user=res.user;
 await addDoc(collection(db,"user"),{
  uid:user.uid,
  name,
  authProvider:"local",
  email,
 });
} catch (error) {
  console.log(error);
  toast.error(error.code.split('/')[1].split('-').join(" "));
}
}
const login= async(email,possword)=>{
try {
   await signInWithEmailAndPassword(auth,email,possword);
} catch (error) {
  console.log(error);
 toast.error(error.code.split('/')[1].split('-').join(" "));
  
}
}
const logout=()=>{
  signOut(auth);
}
export {auth,db,login,signup,logout};