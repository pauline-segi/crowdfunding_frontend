import { Link } from "react-router-dom";
import "./ProjectCard.css";


function ProjectCard(props) {
    const { projectData } = props;
    const projectLink = `project/${projectData.id}`;
    
    return (
        <div>
            <Link to={projectLink}>
                <img src={projectData.image} />
                <h3>{projectData.title}</h3>
                <h3>{projectData.desciption}</h3>
                <h3>{projectData.goal}</h3>
            </Link>
        </div>
    );
}

export default ProjectCard;