import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Slider from "../components/Slider";
import Login from "../components/Login";

import '../styles/genesis.css';


const Genesis = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = !!localStorage.getItem('token') && !!localStorage.getItem('username');

        if (isAuthenticated) {
            navigate("/home");
        }
    }, [navigate]);

    return (
        <body>
            <div className="genesis-container">
                <div className="about-us-section">
                    <Slider />
                </div>
                <div className="login-section">
                    <Login />
                </div>
            </div>
        </body>
    );
}

export default Genesis;
