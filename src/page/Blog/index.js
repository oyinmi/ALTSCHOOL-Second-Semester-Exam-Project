import React from "react";
import { Link, Outlet } from 'react-router-dom'
import { Helmet } from "react-helmet-async";

export default function Blog () {
    return(
        <>
            <Helmet>
                <title>Blog</title>
                <meta name="description" content="Blog" />
                <link rel="canonical" href="/blog" />
            </Helmet>

            <div>
                <Link to="/blog/topics">
                    <p className="blogCon">Topics</p>
                </Link>
            </div>

            <Outlet />
        </>
    );
}