import { useParams } from "react-router";
import useProfile from "../hooks/use-profile.js";

import "./HomePage.css";
import "../components/NavBar.css"
import "../components/ProfileCard"



function ProfilePage() {
    const { id } = useParams();
    const { profile, isLoading, error } = useProfile(id);

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
            <h3>Username: {profile.username}</h3>
        </div>
    );
}

export default ProfilePage;