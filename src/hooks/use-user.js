import { useState, useEffect } from "react";

import getUser from "../api/get-user";


export default function useUser(userId) {
    const [user, setUser] = useState();
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
        getUser(userId)
        .then((user) => {
            setUser(user);
            setIsLoading(false);
        })
        .catch((error) => {
            setError(error);
            setIsLoading(false);
        });
        

    }, [userId]);
    

    return { user, isLoading, error };
}
