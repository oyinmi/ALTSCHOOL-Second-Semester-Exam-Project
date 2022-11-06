import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { authContext } from "../../components/authContext";


export default function Profile () {
    const { user } = React.useContext(authContext);
    
    return(
        <>
            <Helmet>
                <title>Profile</title>
                <meta name="description" content="User's profile" />
                <link rel="canonical" href="/profile" />
            </Helmet>

            <div className="container">
                <h2>Hello {user.username}!!</h2>
                <h4>Kindly click on the "contact" link to test the error boundary function.</h4>
                <Link to="/profile/contact">
                    <p className="blogCon">Contact</p>
                </Link>
            </div>

            <Outlet />
        </>
        
    );
}