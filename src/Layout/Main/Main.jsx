import React from 'react';
import Navbar from '../../page/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../page/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;