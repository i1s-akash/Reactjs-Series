import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home_CRAW from './Home_CRAW.jsx';
import About_CRAW from './About_CRAW.jsx';
import Contact_CRAW from './Contact_CRAW.jsx';
import Service_CRAW from './Service_CRAW.jsx';
import Navbar_CRAW from './Navbar_CRAW.jsx';
import { Switch, Route, Redirect } from 'react-router';
import "./index.css";
import Footer_CRAW from './Footer_CRAW';

const App16 = () => {
    return (
        <>
            <Navbar_CRAW/>
            <Switch>
                <Route exact path="/" component={Home_CRAW}/>
                <Route exact path="/about" component={About_CRAW}/>
                <Route exact path="/contact" component={Contact_CRAW}/>
                <Route exact path="/service" component={Service_CRAW}/>
                <Redirect to="/" />
            </Switch>
            <Footer_CRAW/>
        </>
    );
}

export default App16;