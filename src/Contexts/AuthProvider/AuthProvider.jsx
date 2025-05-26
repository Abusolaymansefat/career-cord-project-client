import React from 'react';
import { AuthContex } from '../AuthContex/AuthContex';

const AuthProvider = ({ children }) => {

    const authInfo = {

    }
    return (
       <AuthContex value={authInfo}>
        {children}

       </AuthContex>
    );
};

export default AuthProvider;