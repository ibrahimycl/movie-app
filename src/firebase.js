import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, onSnapshot,query,where,deleteDoc,getDocs,doc } from "firebase/firestore";
import { login,logout } from "./redux/features/auth/authSlice";
import { store } from "./redux/app/store";
import { setId } from "./redux/features/movid/movidSlice";
import { toast, Toast } from "react-hot-toast";



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
export const db = getFirestore(app);

export const Register = async(email,password) =>{
    try{
        const {user} = await createUserWithEmailAndPassword(auth,email,password)
        toast.success("Kayıt Başarıyla gerçekleşti");
        return user;
    }
    catch(error){
        toast.error(error.message);
    }
}

export const Login = async(email,password) =>{
    try{
        const {user} = await signInWithEmailAndPassword(auth,email,password);
        toast.success("Giriş İşlemi gerçekleşti");
        return user;
    }
    catch(error){
        toast.error(error.message);
    }
}

export const Logout = async() =>{
    try{
        await signOut(auth);
        return true;
    }
    catch(error){
        toast.error(error.message);
    }
}

onAuthStateChanged(auth, (user) => {
    
    if (user) {
        store.dispatch(login(user));
    } 
    else{
        store.dispatch(logout(user));
        console.log("Kapalı");
    }
    onSnapshot(query(collection(db,"movies_id") , where('uid', '==' , auth.currentUser.uid)),(doc)=>{
        store.dispatch(
            setId(
                doc.docs.reduce((id,i)=>[...id,i.data()],[])
            ))
    });
  });

export const addData = async data =>{
    try {
        const newData = await addDoc(collection(db,"movies_id"),data);
        toast.success("Film Favorilere Eklendi");
        console.log(newData);
    } catch (error) {
        toast.error(error.message);
    }
}

export const deleteMoviesById = async (id) => {
    const moviesRef = collection(db, "movies_id");
    const q = query(moviesRef, where("id", "==", id));
  
    const querySnapshot = await getDocs(q);
  
    querySnapshot.docs.forEach(async(doc) => {
      await deleteDoc(doc.ref);
      toast.success("Film Başırıyla Kaldırıldı");
    });
  };

export default app;

