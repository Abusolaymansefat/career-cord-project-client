import React, { useEffect, useState } from "react";
import { AuthContex } from "../AuthContex/AuthContex";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import axios from "axios";

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (createUser) => {
      setUser(createUser);
      setLoading(false);
      if (createUser?.email){
        const userData = {email: createUser.email };
        axios.post('http://localhost:3000/jwt',userData, { withCredentials: true})
        .then(res => {
          console.log(" token after jwt", res.data)
          // const token =res.data.token;
          // localStorage.setItem('token', token)
        })
        .catch(error => console.log(error))
      }
      console.log("user in the auth state change", createUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    loading,
    user,
    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser

  };
  return <AuthContex value={authInfo}>{children}</AuthContex>;
};

export default AuthProvider;
