import React from "react";

const initialValueState = {
    user: null,
}

export const authContext = React.createContext(initialValueState);


export function AuthContextProvider(props) {
    const [user, setUser] = React.useState('');
    

    // authentication
    const login = (username, email, password) => {
        setUser({
            username,
            email,
            password
        });
    }

    // logout
    function logout() {
        setUser(null);
    }

    return (
        <authContext.Provider
            value={{
                user,
                login,
                logout,
            }}
        >
             {props.children}
         </authContext.Provider>
     );
 
};