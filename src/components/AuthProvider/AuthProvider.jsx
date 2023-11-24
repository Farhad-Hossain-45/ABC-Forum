/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import auth from "../../Firebase/Firebase.config";

// import useAxiosPublic from "../hooks/Axios/useAxiosPublic";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser] =useState()
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    // const axiosPublic = useAxiosPublic()
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const singIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth ,email,password)

    }

    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const googleSingIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    } 

    const singOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const updatedUser = (name,photo)=>{
        return updateProfile(auth.currentUser,{

            displayName: name, photoURL: photo

        })
    }

    useEffect(()=>{
         const unSubscribe = onAuthStateChanged(auth, currentUser =>{
                setUser(currentUser)
                console.log('current user', currentUser)
                // const userInfo = {email: currentUser.email}
                // if(currentUser){
                //     axiosPublic.post('/jwt', userInfo)
                //     .then(res =>{
                //         if(res.data.token){
                //             localStorage.setItem('token-access', res.data.token)
                //         }
                //     })
                // }
                // else{
                //     localStorage.removeItem('token-access')
                // }
                setLoading(false)
            })
            return ()=>{
                return unSubscribe()
            }
    },[])

    const authInfo ={
        user,
        loading,
        createUser,
        singIn,
        singOut,
        updatedUser,
        googleSignIn,
        googleSingIn

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;