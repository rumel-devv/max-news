import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const MianLayout = ({children}) => {
    return (
        <div>
         <Header/>
         <Navbar/>
         {children}
        </div>
    );
};

export default MianLayout;