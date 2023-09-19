async function postSignup(username, password, email) {
<<<<<<< HEAD
    const url = `${import.meta.env.VITE_API_URL}/api-token-auth/`;
    const response = await fetch(url, {
        method: "POST",
        // We need to tell the server that we are sending JSON data so we set the Content-Type header to application/json
=======
    const url = `${import.meta.env.VITE_API_URL}/users`;
    const response = await fetch(url, {
        method: "POST",
>>>>>>> 88b0d8ed1e13e7eeafbe395cdcf15f4562303457
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
<<<<<<< HEAD
            "username": username,
            "password": password,
            "email": email,
        }),
    });
    
    if (!response.ok) {
        const fallbackError = `Error trying to sign up`;

        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });

        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    
    return await response.json();
}

export default postSignup;
=======
            username: username,
            password: password,
            email: email,
        }),
    });

    if (!response.ok) {
        const fallbackError = `Error trying to join KnowMads`;
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }


    const responseData = await response.json();

    if (responseData && responseData.token) {
        return responseData.token;
    } else {
        throw new Error("Token not found in response");
    }
}

export default postSignup;
>>>>>>> 88b0d8ed1e13e7eeafbe395cdcf15f4562303457
