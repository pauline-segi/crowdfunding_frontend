import { useParams } from "react-router-dom";
import useProfile from "../hooks/use-profile";

import "./HomePage.css";
import "../components/NavBar.css"



function ProfilePage() {
    const { id } = useParams();
    const { project, isLoading, error } = useProfile(id);

    if (isLoading) {
        return (<p>loading...</p>)
    }

    if (error) {
        return (<p>{error.message}</p>)
    }


    return (
            <div>
                <h2>{profile.name}</h2>
                <h3>Email: {profile.email}</h3>
                <h3>Username: {profile.email}</h3>
            </div>
    );
}

export default ProfilePage;