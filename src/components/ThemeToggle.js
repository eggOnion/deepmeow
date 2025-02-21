import React, { useState, useEffect } from "react";

import '../styles/themeToggle.css';


const ThemeToggle = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <label className="theme-toggle">
            <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} />
            <span className="slider">
                <span className="emoji-wrapper">
                    {theme === "light" ? <span className="emoji">☀️</span> : <span className="emoji">🌙</span>}
                </span>
            </span>
        </label>
    );
};


export default ThemeToggle;
