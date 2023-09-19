import { useState } from "react";
import { useNavigate } from "react-router-dom";

import postSignup from "../api/post-signup";

<<<<<<< HEAD

=======
>>>>>>> 88b0d8ed1e13e7eeafbe395cdcf15f4562303457
function SignupForm() {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
        email: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
<<<<<<< HEAD
        if (credentials.username &&credentials.email && credentials.password) {
            postSignup(
                credentials.username,
                credentials.email,
                credentials.password
            ).then((response) => {
                // console.log("Response from postSignup:", response);
                window.localStorage.setItem("token", response.token);
                navigate("/");
            });
        }
    };

    return (
        <form>
            <div>
                <label htmlFor="username">Username:</label>
                <input 
                type="text" 
                mame="username" 
                placeholder="Enter username" 
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                type="email" 
                name="email" 
                placeholder="Enter email" 
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>
                Sign Up
                </button>
=======
        if (credentials.username && credentials.email && credentials.password) {
            postSignup(
                credentials.username,
                credentials.password,
                credentials.email
            )
                .then((token) => {
                    window.localStorage.setItem("token", token);
                    navigate("/");
                })
                .catch((error) => {
                    console.error("Error during signup:", error);
                });
        }
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <div className="signup">
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter username"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        onChange={handleChange}
                        />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        />
                </div>
                <button type="submit" onSubmit={handleSubmit}>
                    Get KnowMadding!
                </button>
            </div>
>>>>>>> 88b0d8ed1e13e7eeafbe395cdcf15f4562303457
        </form>
    );
}

<<<<<<< HEAD
export default SignupForm;
=======
export default SignupForm;
>>>>>>> 88b0d8ed1e13e7eeafbe395cdcf15f4562303457
