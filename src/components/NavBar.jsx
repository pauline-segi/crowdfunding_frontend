// links: .navbar-logo-link, .home-link, .projects-link, .profile-link, .signup-link, .createproject-link, .login-link, .login-button,

import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';

import './NavBar.css';
import '../pages/HomePage.css';

import kmLogoVrt from '../img/km-logo-vrt.png';

function NavBar() {
    const { auth, setAuth } = useAuth();
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        window.localStorage.removeItem("token");
        setAuth({ token: null });
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            {/* NavBar Desktop View */}
            {!isMobileView && (
                <div id="nav-bar">
                    <Link to="/" className="navbar-logo-link">
                        <img src={kmLogoVrt} alt="KnowMads Logo" className="navbar-logo" />
                    </Link>
                    <nav className="desktop-nav">
                        <Link to="/" className="home-link">
                            Home
                        </Link>
                        <Link to="/users" className="signup-link">
                            Join KnowMads
                        </Link>
                        <Link to="/users/:id" className="profile-link">
                            My Profile
                        </Link>
                        <Link to="/projects" className="createproject-link">
                            Create Project
                        </Link>
                        {auth.token ? (
                            <Link to="/" onClick={handleLogout} className="logout-button">
                                Log Out
                            </Link>
                        ) : (
                            <Link to="/login" id="login-link">
                                Login
                            </Link> 
                        )}
                    </nav>
                </div>
            )}

            {/* Unicode character for the menu icon */}
            {isMobileView && (
                <div id="nav-bar" className={isMenuOpen ? "mobile-menu-open" : ""}>
                    <div className="menu-icon" onClick={toggleMenu}>
                        &#9776;
                    </div>
                    <Link to="/" className="navbar-logo-link">
                        <img src={kmLogoVrt} alt="KnowMads Logo" className="navbar-logo" />
                    </Link>
                    <nav className="mobile-nav">
                        <Link to="/" className="home-link">
                            Home
                        </Link>
                        <Link to="/users" className="signup-link">
                            Join KnowMads
                        </Link>
                        <Link to="/users/:id" className="profile-link">
                            My Profile
                        </Link>
                        <Link to="/projects" className="createproject-link">
                            Create Project
                        </Link>
                        {auth.token ? (
                            <Link to="/" onClick={handleLogout} className="logout-button">
                                Log Out
                            </Link>
                        ) : (
                            <Link to="/login" id="login-link">
                                Login
                            </Link>
                        )}
                    </nav>
                </div>
            )}

            {/* Content Container */}
            <div className="content-container">
                <Outlet />
            </div>
        </div>
    );
}

export default NavBar;
