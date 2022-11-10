import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div className='flex flex-col h-screen justify-between'>
            <Header></Header>
            <Outlet className=' mb-auto'></Outlet>
            <Footer className=''></Footer>
            
        
            
        </div>
    );
};

export default Main;