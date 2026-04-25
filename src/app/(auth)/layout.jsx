import Navbar from '@/components/shared/Navbar';
import React from 'react';
import { monserrat } from '../layout';

const AuthLayout = ({children}) => {
    return (
        <div className={`${monserrat}`}>
            <Navbar/>
            {children}
        </div>
    );
};

export default AuthLayout;