import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [auth, setAuth] = useState({
        token: window.localStorage.getItem("token") || null,
    });

    const [isNewUser, setIsNewUser] = useState(false);

    useEffect(() => {
        if (!auth.token) {
            const newToken = generateNewToken();
            
            window.localStorage.setItem("token", newToken);
            setAuth({ ...auth, token: newToken });

            setIsNewUser(true);
        } else {
            setIsNewUser(false);
        }
    }, [auth.token]); 

    return (
        <AuthContext.Provider value={{ auth, setAuth, isNewUser }}>
            {props.children}
        </AuthContext.Provider>
    );
};

function generateNewToken() {
    return "newTokenForNewUser";
}
