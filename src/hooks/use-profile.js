import { useState, useEffect } from "react";

import getProfile from "../api/get-profile";


export default function useProfile(userId) {
    const [profile, setProfile] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    
    async function fetchUser(id) {
        const url = `${import.meta.env.VITE_API_URL}/users/${id}`;
        const response = await fetch(url, {
            method: "GET",
          // Add appropriate headers and handle errors
        });
        if (!response.ok) {
          // Handle error
        }
        return response.json();
    }
    
    useEffect(() => { 
        // Here we pass the projectId to the getProject function.
        getProfile(userId)
        .then((profile) => {
            setProfile(profile);
            setIsLoading(false);
        })
        .catch((error) => {
            setError(error);
            setIsLoading(false);
        });
        

        // This time we pass the projectId to the dependency array so that the hook will re-run if the projectId changes.
    }, [profileId]);
    

    return { profile, isLoading, error };
}
