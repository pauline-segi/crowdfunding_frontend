import { createContext, useState } from "react";

// Here we create the Context
export const AuthContext = createContext();

// Here we create the component that will wrap our app, this means all its children can access the context using our hook
export const AuthProvider = (props) => {
    // Using an object for the state here, this way we can add mroe properties to the state later on like user id
    const [auth, setAuth] = useState({
        // here we initizlise the context with teh token from local stroage, this way if the user refreshes the page we can still have the token in memory
        token: window.localStorage.getItem("token",)
    });

    return (
        <AuthContext.Provider value={{ auth, setAuth}}>
            {props.children}
        </AuthContext.Provider>
    );
};
