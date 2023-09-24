import CreateProject from "../components/CreateProject";
import { useAuth } from '../hooks/use-auth.js';

import "./HomePage.css";
import "../components/NavBar.css";

function CreateProjectPage() {
    const { auth } = useAuth(); 

    if (!auth.token) {
        return <p>Please log in to create a new project.</p>;
    }

    return (
        <div>
            <h2>Create a New Project</h2>
            <CreateProject />
        </div>
    );
}

export default CreateProjectPage;
