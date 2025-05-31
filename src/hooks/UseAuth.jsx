import React, { use } from 'react';
import { AuthContex } from '../Contexts/AuthContex/AuthContex';

const UseAuth = () => {
    const authInfo = use(AuthContex)
    return authInfo
};

export default UseAuth;