import React, { useState } from "react";
import "../styles/slider.css"; // Ensure this file exists
import AboutUs from "./AboutUs";
import TopCat from "./TopCat";
import TopCatTwo from "./TopCatTwo";
import TopCatThree from "./TopCatThree";

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Sections to render when switching
    const sections = [
        <div className="section"><AboutUs /></div>,
        <div className="section"><TopCat /></div>,
        <div className="section"><TopCatTwo /></div>,
        <div className="section"><TopCatThree /></div>,
    ];

    return (
        <div className="slider-wrapper">
            {/* Render active section */}
            <div className="section-container">{sections[activeIndex]}</div>

            {/* Dotted Navigation */}
            <div className="dots">
                {sections.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${activeIndex === index ? "active" : ""}`}
                        onClick={() => setActiveIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slider;
