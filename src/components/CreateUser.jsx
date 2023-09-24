import { useState } from "react";
import { useNavigate } from "react-router-dom";

<<<<<<< HEAD:src/components/CreateUser.jsx
import postCreateUser from "../api/post-user";
=======


import postSignup from "../api/post-signup";
>>>>>>> test:src/components/SignupForm.jsx

function CreateUser() {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
        email: "",
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("HANDLE SUBMIT TRIGGERED")
        if (credentials.username && credentials.email && credentials.password) {
<<<<<<< HEAD:src/components/CreateUser.jsx
            postCreateUser(
=======
            console.log("HELLO FROM HERE")
            postSignup(
>>>>>>> test:src/components/SignupForm.jsx
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
                        id="username"
                        name="username"
                        placeholder="Enter username"
                        onChange={handleChange}
                        autoComplete="username"
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
                        autoComplete="email"
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
                        autoComplete="password"
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
