<<<<<<< HEAD:src/api/post-user.js
async function postCreateUser(username, password, email) {
    const url = `${import.meta.env.VITE_API_URL}/signup`;
=======
async function postSignup(username, password, email) {
    const url = `${import.meta.env.VITE_API_URL}/users/`;
    console.log("POST SIGNUP FUNCTION");
    
>>>>>>> test:src/api/post-signup.js
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${window.localStorage.getItem("token")}`
        },
        body: JSON.stringify({
            username: username,
            password: password,
            email: email,
        }),
    });

    if (!response.ok) {
        const fallbackError = `Error trying to join create account`;
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

export default postCreateUser;
