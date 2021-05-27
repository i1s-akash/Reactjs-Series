import React from 'react';
import { NavLink } from 'react-router-dom';

const Error404 = () => {
    return (
        <>
            <h1>This is Error404.</h1>
            <NavLink to="/home404">Go to our Home404</NavLink>
        </>
    )
};

export default Error404;