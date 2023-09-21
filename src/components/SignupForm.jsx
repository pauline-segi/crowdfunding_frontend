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
        console.log("HANDLE SUBMIT TRIGGERED")
        if (credentials.username && credentials.email && credentials.password) {
            console.log("HELLO FROM HERE")
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
                        id="username"
                        name="username"
                        placeholder="Enter username"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        onChange={handleChange}
                        />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        />
                </div>
                <button type="submit" onSubmit={handleSubmit}>
                    Get KnowMadding!
                </button>
            </div>
        </form>
    );
}

export default SignupForm;
