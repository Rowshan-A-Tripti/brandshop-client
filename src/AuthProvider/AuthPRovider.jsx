import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../FireBase/firebase.config";
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

export const AuthContext = createContext(null)
const AuthPRovider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,  password)
    }
    const loginUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const googleLogged = () => {

        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const allLogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    



    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    },[])
const myItems = {
    user, loading, createUser, loginUser, googleLogged, allLogOut, 

}
    return (
    
        <AuthContext.Provider value={myItems}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthPRovider;