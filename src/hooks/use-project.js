import { useState, useEffect } from "react";

import getProject from "../api/get-project";


export default function useProject(projectId) {
    const [project, setProject] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    
    async function fetchProject(id) {
        const url = `${import.meta.env.VITE_API_URL}/projects/${id}`;
        const response = await fetch(url, {
            method: "GET",
        });
        if (!response.ok) {
        }
        return response.json();
    }
    
    useEffect(() => { 
        // Here we pass the projectId to the getProject function.
        getProject(projectId)
        .then((project) => {
            setProject(project);
            setIsLoading(false);
        })
        .catch((error) => {
            setError(error);
            setIsLoading(false);
        });
        

        // This time we pass the projectId to the dependency array so that the hook will re-run if the projectId changes.
    }, [projectId]);
    

    return { project, isLoading, error };
}
