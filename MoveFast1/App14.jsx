import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home404 from './Home404';
import About404 from './About404';
import Error404 from './Error404';

const App14 = () => {
    return( 
        <>
            <Switch>
                <Route exact path="/home404" component={Home404}/>
                <Route exact path="/about404" component={About404}/>
                {/* <Route component={Error404}/> */}
                <Redirect to="/home404"/>
            </Switch>
        </>
    )
};

export default App14;