import { Link } from "react-router-dom";


function ProfileCard(props) {
    const { profileData } = props;
    const profileLink = `users/${profileData.id}`;
    
    return (
        <div>
            <Link to={profileLink}>
                {/* <img src={profileData.image} /> */}
                <h3>{profileData.name}</h3>
                <h3>{profileData.username}</h3>
                <h3>{profileData.email}</h3>
            </Link>
        </div>
    );
}

export default ProfileCard;