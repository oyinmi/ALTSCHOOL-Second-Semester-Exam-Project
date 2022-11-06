import React from "react";
import { Helmet } from "react-helmet-async";


export default function Topics () {
    return(
        <>
            <Helmet>
                <title>Topics</title>
                <meta name="description" content="Blog posts" />
                <link rel="canonical" href="/topics" />
            </Helmet>

            <div className="container">
                <h1>blog topics</h1>
            </div>
        </>
    );
}