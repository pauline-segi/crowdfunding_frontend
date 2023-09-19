import { useState } from "react";
import { useNavigate } from "react-router-dom";

import postCreateUser from "../api/post-user";

function CreateUser() {
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
            postCreateUser(
                credentials.username,
                credentials.password,
                credentials.email
            )
                .then((token) => {
                    window.localStorage.setItem("token", token);
                    navigate("/");
                })
                .catch((error) => {
                    console.error("Error creating your account:", error);
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
        </form>
    );
}

export default CreateUser;
