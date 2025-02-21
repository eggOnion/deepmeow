import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo_img from '../assets/logo.png';

import '../styles/companyLogo.css';


const CompanyLogo = () => {

    const navigate = useNavigate();
    const isUserLogin = !!localStorage.getItem('token');

    const handleLogoClick = () => {
        navigate(isUserLogin ? "/home" : "/");
        window.location.reload();
    };

    return (
        <header>
            <div className="logo-container">
                <img
                    src={logo_img}
                    alt="Logo"
                    className="logo"
                    onClick={handleLogoClick}                  
                />
            </div>
        </header>
    );
};

export default CompanyLogo;
