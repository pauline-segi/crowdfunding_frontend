import React, { useEffect, useState } from 'react';

import "./ProjectCard.css";


function AboutPage() {
    const [aboutContent, setAboutContent] = useState({});

    useEffect(() => {
        fetch('/api/about/') 
            .then((response) => response.json())
            .then((data) => {
                setAboutContent(data[0]);
            })
            .catch((error) => {
                console.error('Error fetching About content:', error);
            });
    }, []);

    return (
        <div>
            <h1>{aboutContent.title}</h1>
            <p>{aboutContent.content}</p>
        </div>
    );
}

export default AboutPage;
