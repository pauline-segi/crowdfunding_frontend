import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';

import './NavBar.css';
import "../pages/HomePage.css";

import kmLogoVrt from '../img/km-logo-vrt.png';


function NavBar() {
    const { auth, setAuth } = useAuth();

    const handleLogout = () => {
        window.localStorage.removeItem('token');
        setAuth({ token: null });
    };


    return (
        <div>
            {/* NavBar */}
            <div id="nav-bar">
                <Link to="/" className="navbar-logo-link">
                    <img src={kmLogoVrt} alt="KnowMads Logo" className="navbar-logo" />
                </Link>
                <nav>
                    <Link to="/" className="home-link">Home</Link>
                    <Link to="/signup" className="signup-link">Sign Up</Link>
                    <Link to="/createproject" className="createproject-link">Create Project</Link>

                    {auth.token ? (
                        <Link to="/" onClick={handleLogout}>
                            Log Out
                        </Link>
                    ) : (
                        <Link to="/login" id="login-link">Login</Link>
                    )}
                </nav>
            </div>

            {/* Content Container */}
            <div className="content-container">
                <Outlet />
            </div>
        </div>
    );
}

export default NavBar;
