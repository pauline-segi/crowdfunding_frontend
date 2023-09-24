import React, { useState, useEffect } from 'react';

import "./ProjectCard.css";


function About() {
    const [aboutData, setAboutData] = useState({});

    useEffect(() => {
        fetch('/api/about/')
            .then((response) => response.json())
            .then((data) => setAboutData(data));
    }, []);

    return (
        <div>
            <h1>About Know Mads</h1>
            <p>{aboutData.content}</p>
        </div>
    );
}

export default About;
