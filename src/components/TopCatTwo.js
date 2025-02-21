import React from "react";

import "../styles/topCat.css";


const TopCatTwo = () => {
    return (
        <div className="video-container">
            <div className="topcat-video">
                <iframe
                    width="400"
                    height="225"
                    src="https://www.youtube.com/embed/0tOXxuLcaog?autoplay=1&loop=1&playlist=0tOXxuLcaog&controls=0&showinfo=0&modestbranding=1"
                    title="Small YouTube Video with Sound"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            </div>
            <br />
            <div className="topcat-video-description">
                <h2>Chipi Chipi Chapa Chapa Cat</h2>
            </div>
        </div>
    );
};

export default TopCatTwo;
