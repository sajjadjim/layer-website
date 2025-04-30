import React from 'react';
import NavBar from '../Components/Home Page/Navbar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../Components/Home Page/Footer/Footer';

const Root = () => {
    return (
        <div className='w-5/6 mx-auto'>
            <NavBar></NavBar>
            
            <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default Root;