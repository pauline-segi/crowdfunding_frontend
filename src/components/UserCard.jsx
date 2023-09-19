import { Link } from "react-router-dom";
import "./ProjectCard.css";


function UserCard(props) {
    const { userData } = props;
    const userLink = `users/${userData.id}`;
    
    return (
        <div>
            <Link to={userLink}>
                <img src={userData.image} />
                <h3>{userData.title}</h3>
            </Link>
        </div>
    );
}

export default UserCard;