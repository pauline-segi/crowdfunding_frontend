import { useParams } from "react-router";

import "./HomePage.css";
import "../components/NavBar.css"
import "../components/About"



function AboutPage() {

    if (isLoading) {
        return (<p>loading...</p>)
    }

    if (error) {
        return (<p>{error.message}</p>)
    }


    return (
            <div>
                <h2>Welcome to Know Mads!</h2>

            </div>
    );
}

export default AboutPage;