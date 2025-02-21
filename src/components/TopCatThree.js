import React from "react";

import "../styles/topCat.css";


const TopCatThree = () => {
    return (
        <div className="video-container">
            <div className="topcat-video">
                <iframe
                    width="400"
                    height="225"
                    src="https://www.youtube.com/embed/NSU2hJ5wT08?autoplay=1&loop=1&playlist=NSU2hJ5wT08&controls=0&showinfo=0&modestbranding=1"
                    title="Small YouTube Video with Sound"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            </div>
            <br />
            <div className="topcat-video-description">
                <h2>Happy Happy Happy Cat</h2>
            </div>
        </div>
    );
};

export default TopCatThree;
