import React from "react";
import { Helmet } from "react-helmet-async";
import { authContext } from "../../components/authContext";
import "./style.css";


export default function Home () {
    const { user } = React.useContext(authContext);
    return(
        <>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Hi! Welcome" />
                <link rel="canonical" href="/home" />
            </Helmet>

            <div className="HomePage">
                <p className="Salutation">Hi {user.username}, Welcome</p>
            </div>
        </>
    );
}