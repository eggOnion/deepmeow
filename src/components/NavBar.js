import React from 'react';

import ThemeToggle from './ThemeToggle';
import ProfilePic from './ProfilePic';
import Logout from '../components/Logout';

import '../styles/navbar.css';


const Navbar = () => {
    return (
        <nav>
            <div className='navbar'>
                <ThemeToggle />
                <ProfilePic />
                <Logout />
            </div>
        </nav>
    );
};

export default Navbar;
