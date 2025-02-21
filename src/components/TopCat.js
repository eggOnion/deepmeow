import React from "react";

import "../styles/topCat.css";


const TopCat = () => {
    return (
        <div className="video-container">
            <div className="topcat-video">
                <iframe
                    width="400"
                    height="225"
                    src="https://www.youtube.com/embed/E8S00MK-0_c?autoplay=1&loop=1&playlist=E8S00MK-0_c&controls=0&showinfo=0&modestbranding=1"
                    title="Small YouTube Video with Sound"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            </div>
            <br />
            <div className="topcat-video-description">
                <h2>OIIA OIIA (Spinning Cat)</h2>
            </div>
        </div>
    );
};

export default TopCat;
