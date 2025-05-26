import React, { useState } from 'react';
import { AuthContex } from '../AuthContex/AuthContex';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        loading,
        createUser
    }
    return (
       <AuthContex value={authInfo}>
        {children}

       </AuthContex>
    );
};

export default AuthProvider;