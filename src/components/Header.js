import React, { useEffect, useState } from 'react';

import Navbar from './NavBar';
import CompanyLogo from './CompanyLogo';

import '../styles/header.css';


const Header = () => {

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setIsVisible(false); // Hide when scrolling down
            } else {
                setIsVisible(true); // Show when scrolling up
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={`header-banner ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="logo-container">
                <CompanyLogo />
            </div>
            <div className="navbar-container">
                <Navbar />
            </div>
        </header>
    );
};

export default Header;
