import firebaseConfig from "../firebaseConfig";
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseapp=initializeApp(firebaseConfig);
const auth=getAuth(firebaseapp);
export {auth};