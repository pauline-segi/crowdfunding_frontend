import { Link } from "react-router-dom";
import "./ProjectCard.css";


function ProfileCard(props) {
    const { profileData } = props;
    const profileLink = `users/${user.id}`;
    
    return (
        <div>
            <Link to={profileLink}>
                <img src={profileData.image} />
                <h3>{profileData.name}</h3>
                <h3>{profileData.username}</h3>
                <h3>{profileData.email}</h3>
            </Link>
        </div>
    );
}

export default ProfileCard;