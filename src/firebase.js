import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { login,logout } from "./redux/features/auth/authSlice";
import { store } from "./redux/app/store";



const firebaseConfig = {
  apiKey: "AIzaSyC3tK9dsL7zXsOaUwWTV9U_cpv8wxa4oaE",
  authDomain: "movies-646f7.firebaseapp.com",
  projectId: "movies-646f7",
  storageBucket: "movies-646f7.appspot.com",
  messagingSenderId: "518038130442",
  appId: "1:518038130442:web:f4f738f01104d01277f4f3",
  measurementId: "G-W82XE228BC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

export const Register = async(email,password) =>{
    try{
        const {user} = await createUserWithEmailAndPassword(auth,email,password)
        return user;
    }
    catch(error){
        console.log(error.message);
    }
}

export const Login = async(email,password) =>{
    try{
        const {user} = await signInWithEmailAndPassword(auth,email,password)
        return user;
    }
    catch(error){
        console.log(error.message);
    }
}

export const Logout = async() =>{
    try{
        await signOut(auth);
        return true;
    }
    catch(error){
        console.log(error.message);
    }
}
onAuthStateChanged(auth, (user) => {
    
    
    if (user) {
        store.dispatch(login(user));
    } else {
        store.dispatch(logout(user));
        console.log("Kullanıcı Oturumu Kapattı");
    }
  });

    



export default app;

