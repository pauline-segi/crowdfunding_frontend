import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import postProject from '../api/post-project';

function CreateProject() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [projectData, setProjectData] = useState({
        title: "",
        description: "",
        goal: 0,
        image: null,
    });

    const handleChange = (e) => {
        if (e.target.id === "image") {
            setProjectData({
                ...projectData,
                image: e.target.files[0], 
            });
        } else {
            setProjectData({
                ...projectData,
                [e.target.id]: e.target.value,
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData();
        formData.append("title", projectData.title);
        formData.append("description", projectData.description);
        formData.append("goal", projectData.goal);
        formData.append("image", projectData.image);

        postProject(formData)
            .then(() => {
                navigate("/"); 
            })
            .catch(() => {
                setIsLoading(false);
            });
    }

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">KnowMad Title</label>
                <input 
                    type="text" 
                    id="title" 
                    placeholder="Enter name for your KnowMad funding" 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input 
                    type="text" 
                    id="description" 
                    placeholder="What do you want to achieve with your KnowMad funds?"
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label htmlFor="goal">Goal</label>
                <input 
                    type="text" 
                    id="goal" 
                    placeholder="How much do you need to make this happen?" 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label htmlFor="image">Add an image to get your KnowMad crowd inspired!</label>
                <input 
                    type="file"
                    id="image" 
                    onChange={handleChange} 
                />
            </div>
            <input type="submit" value="Send your KnowMad out there!" />
        </form>
    );
}

export default CreateProject;
