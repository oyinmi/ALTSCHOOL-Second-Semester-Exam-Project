import React from "react";
import { Helmet } from "react-helmet-async";


export default function Contact () {
    throw new Error ("error!!!!!!!")
    return(
        <>
            <Helmet>
                <title>Contact</title>
                <meta name="description" content="Contact me" />
                <link rel="canonical" href="/contact" />
            </Helmet>

            <div className="container">
                <h1>Contact</h1>
            </div>
        </>
    );
}