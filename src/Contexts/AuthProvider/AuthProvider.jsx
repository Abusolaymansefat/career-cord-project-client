import React, { useEffect, useState } from 'react';
import { AuthContex } from '../AuthContex/AuthContex';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, createUser =>{
            setUser(createUser);
            setLoading(false)
            console.log('user in the auth state change', createUser)
        })
        return() => {
            unSubscribe();
        }
    }, [])
    const authInfo = {
        loading,
        user,
        createUser,
        signInUser,
        signOutUser
    }
    return (
       <AuthContex value={authInfo}>
        {children}

       </AuthContex>
    );
};

export default AuthProvider;