import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

import "./NavBar.css";

function NavBar() {
    const {auth,setAuth} = useAuth();

    const handleLogout = () => {
        window.localStorage.removeItem("token");
        setAuth({ token: null });
    };

    return (
        <div id="nav-bar">
            <nav>
                <Link to="/">Home</Link>
                {auth.token ? (
                    <Link to="/" onClick={handleLogout}>
                    Log Out
                    </Link>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </nav>
            <Outlet />
        </div>
    );
}

export default NavBar;