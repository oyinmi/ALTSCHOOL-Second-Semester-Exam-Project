import React from "react";
import { Helmet } from "react-helmet-async";
import { authContext } from "../../components/authContext";
import "./style.css";


export default function Login () {
    const { login } = React.useContext(authContext);
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("")

    function doLogin(e) {
        e.preventDefault();
        if (username.trim().length && email.trim().length && password.trim().length) {
            login(username, email, password);
        }
    }

    function onUsernameChange(e) {
        setUsername(e.target.value);
    }

    function onEmailChange(e) {
        setEmail(e.target.value);
    }

    function onPasswordChange(e) {
        setPassword(e.target.value);
    }
    
    return(
        <>
            <Helmet>
                <title>Login</title>
                <meta name="description" content="Login" />
                <link rel="canonical" href="/" />
            </Helmet>

            <form className="container" onSubmit={doLogin}>
                <div className="form" 
                    // onLogin={doLogin} loggingIn={loggingIn}
                >
                    <h1>Login</h1>

                    <div>
                        <label for="name">Username</label>
                        <input 
                            type="text" 
                            className="form-input" 
                            placeholder="Enter username" 
                            value={username}
                            onChange={onUsernameChange}
                            required
                        /> 
                    </div>

                    <div>
                        <label for="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            className="form-input" 
                            placeholder="Enter email address" 
                            onChange={onEmailChange} 
                            required 
                        />
                    </div>

                    <div>
                        <label for="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            className="form-input" 
                            placeholder="Enter password" 
                            onChange={onPasswordChange} 
                            required 
                        />
                    </div>

                    <button 
                        type="submit" 
                    >
                        Submit
                    </button>

                </div>
            </form>
        </>
    );
}