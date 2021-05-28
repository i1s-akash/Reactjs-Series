import React from 'react';
// import web from './logo.svg'
// import {NavLink} from 'react-router-dom';
import Common_CRAW from './Common_CRAW';
import web from './logo.svg'


const Home_CRAW = () => {
    return (
        <>
            <Common_CRAW name="Welcome to home page" imgsrc={web} visit="/service" btname="Get Started" />
        </>
    );
}

export default Home_CRAW;