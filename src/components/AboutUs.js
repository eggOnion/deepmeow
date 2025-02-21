import React from "react";

import "../styles/aboutUs.css";


const AboutUs = () => {

    const aboutUs = "We are deepmeow, a place for cat lovers to share cat videos, reels & memes"

    return (
        <div className="about-us-container">
            <p className="about-us-text">
                <span className="quote">“</span>
                <span className="about-us-content">{aboutUs}</span>
                <span className="quote">”</span>
            </p>
        </div>
    );
};

export default AboutUs;
