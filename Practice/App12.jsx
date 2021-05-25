import react from 'react';
import { Route, Switch } from "react-router-dom";
import AboutRouter from './AboutRouter';
import ContactRouter from './ContactRouter';
import ErrorRouter from './ErrorRouter';

const Name = () => {
    return <h1>I am Name Page!</h1>
}

const App12 = () => {
    return (
        <>
            <h1>React Router</h1>
            <Switch> 
                <Route exact path="/" component={AboutRouter}></Route>
                <Route exact path="/contact" component={ContactRouter}></Route>
                <Route exact path="/contact/name" component={Name}></Route>
                <Route component={ErrorRouter}></Route>
            </Switch>
            {/* <AboutRouter/>
            <ContactRouter/> */}
        </>
    );
};

export default App12;