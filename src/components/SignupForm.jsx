import { useState } from "react";
import { useNavigate } from "react-router-dom";

import postSignup from "../api/post-signup";

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
        if (credentials.username && credentials.email && credentials.password) {
            postSignup(
                credentials.username,
                credentials.password,
                credentials.email
            )
                .then((response) => {
                    window.localStorage.setItem("token", response.token);
                    navigate("/");
                })
                .catch((error) => {
                    console.error("Error during signup:", error);
                });
        }
    };

    return (
        <form>
            <div className="signup-link">
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
            <button type="submit" onClick={handleSubmit}>
                Get KnowMadding!
            </button>
        </form>
    );
}

export default SignupForm;
