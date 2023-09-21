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
        });
        if (!response.ok) {
        }
        return response.json();
    }
    
    useEffect(() => { 
        getProfile(userId)
        .then((profile) => {
            setProfile(profile);
            setIsLoading(false);
        })
        .catch((error) => {
            setError(error);
            setIsLoading(false);
        });
        

    }, [userId]);
    

    return { profile, isLoading, error };
}
