import React, { use } from 'react';
import { AuthContex } from '../Contexts/AuthContex/AuthContex';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {

    const {user} = use(AuthContex)

    if(!user){
        <Navigate to="/signin"></Navigate>
    }
    return children
};

export default PrivateRoute;