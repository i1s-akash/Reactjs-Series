/*
//Complete Responsive Animated Website
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App16 from './App16';

ReactDOM.render(
    <>
        <BrowserRouter>
            <App16/>
        </BrowserRouter>
    </>
    ,
    document.getElementById('root')
);
*/


/*
//
import React from 'react';
import ReactDOM from 'react-dom';
import App15 from './App15';

ReactDOM.render(<App15/>, document.getElementById('root'));
*/


/*
//
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App14 from './App14';

ReactDOM.render(
    <BrowserRouter>
        <App14/>
    </BrowserRouter>, 
    document.getElementById('root')
);
*/


/*
//Live Search Filter
import React from 'react';
import ReactDOM from 'react-dom';
import App13 from './App13';

ReactDOM.render(<App13/>, document.getElementById('root'));
*/


/*
//React Router DOM
import React from 'react';
import ReactDOM from 'react-dom';
import App12 from  './App12';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App12/>
    </BrowserRouter>, 
    document.getElementById('root')
);
*/


/*
//React API call | Axios | useEffect
import React from 'react';
import ReactDOM from 'react-dom';
import App11 from  './App11';

ReactDOM.render(<App11/>, document.getElementById('root'));
*/


/*
//useEffect() & useState() challenge
import React from 'react';
import ReactDOM from 'react-dom';
import App10 from './App10';

ReactDOM.render(<App10/>, document.getElementById('root'));
*/


/*
//useEffect();
import React from 'react';
import ReactDOM from 'react-dom';
import App9 from './App9'

ReactDOM.render(<App9/>, document.getElementById('root'))
*/


/*
//createContext(); & useContext();
import React from 'react';
import ReactDOM from 'react-dom';
import App8 from './App8.jsx';

ReactDOM.render(<App8/>, document.getElementById('root'));
*/


/*
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from "./App7";

ReactDOM.render(
    <> <App/> </>, document.getElementById('root')
)
*/


/*
import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './ToDoList.jsx';
import App from './Bootstrap.jsx';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
*/


// import React from 'react';
// import ReactDOM from 'react-dom';
// import Clock from './ReactDigitalClock';



// ReactDOM.render(<Clock />, document.getElementById('root'))

/*
//Have to check this code is associated to .................?
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App6 = () => {
    const purple = '#ff0000';
    const naam = "Do Hurry";
    const [bg, setBg] = useState(purple);
    const [name, setName] = useState("Click me");
    const bgChange = () => {
        let yellow = '#ffff00';
        setBg(yellow);
        setName("Aha!!!");
        console.log("Clicked!!!");
    }

    return (
        <>
           <div style={{backgroundColor: bg}}>
                <button style={{}} onDoubleClick={bgChange}>{name}</button>
           </div>
        </>
    )
}

ReactDOM.render(
    <>
        <App6/>
    </>,
    document.getElementById('root')
)
*/


/*
//Tenth Challenge
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App5 from './App5.jsx';

ReactDOM.render(
    <>
        <App5/>
    </>,
    document.getElementById('root')
)
*/


/*
//Ninth Challenge
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App4 from './App4.jsx';

    ReactDOM.render(
        <>
            <App4/>
        </>,
        document.getElementById('root')
    )    
*/


/*
//Eighth Challenge
import React from 'react';
import ReactDOM from 'react-dom';
import App3 from './App3.jsx';

ReactDOM.render(
    <>
        <App3/>
    </>,
    document.getElementById('root')
)
*/


/*
//Slot Machine Game - Seventh Challenge
import React from 'react';
import ReactDOM from 'react-dom';

const x = '😄';
const y = '😄';
const z = '😄';

function Slot(){
    if(x==y && y==z){
        return(
            <h1>{x} {y} {z}</h1>
        )
    }
}

ReactDOM.render(
    <>
         <h1 style={ {fontWeight: 'bold'}}>Slot Machine Game</h1>
         <Slot/>
    </>,
    document.getElementById('root')
)
*/


/*
//Sixth Challenge - 6
import React from 'react';
import ReactDOM from 'react-dom';
import App2 from './App2.jsx';

ReactDOM.render(
    <>
        <App2/>
        </>,
        document.getElementById('root')
    )
*/   


/*
////Sixth Challenge - 5
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App1 from './App1.jsx';
// console.log(Sdata[0]);

// function nCard(value){
//     console.log(value);
//     return (
//         <Card 
//             imgSrc={value.imgSrc}
//             title={value.title}
//             sName={value.sName}
//             link={value.link}
//         />     
//     )
// }

ReactDOM.render(
    <>
        <App1/>
    </>,
    document.getElementById('root')
)*/


/*
//Sixth Challenge - 4
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.jsx';
import Sdata from './Sdata.jsx';
import "./index.css";
// console.log(Sdata[0]);

function nCard(value){
    console.log(value);
    return (
        <Card 
            //Here value means {Sdata[0].imgSrc}
            imgSrc={value.imgSrc}
            title={value.title}
            sName={value.sName}
            link={value.link}
        />     
    )
}

ReactDOM.render(
    <>
        {Sdata.map(nCard)}
            //The are the attributes of Card tag
            // imgSrc={Sdata[0].imgSrc}
            // title={Sdata[0].title}
            // sName={Sdata[0].sName}
            // link={Sdata[0].link}        
    </>,
    document.getElementById('root')
)/*


/*
//Sixth Challenge - 3
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Card.jsx';
import Sdata from './Sdata.jsx';
import "./index.css";
// console.log(Sdata[0]);


ReactDOM.render(
    <>
    <h1 className="heading">List of 5 Rich Netfelix Series</h1>
        <App //Don't make it Card bcoz here you imported file name as function name
            imgSrc={Sdata[0].imgSrc}
            title={Sdata[0].title}
            sName={Sdata[0].sName}
            link={Sdata[0].link}
        />
        <App 
            imgSrc={Sdata[1].imgSrc}
            title={Sdata[1].title}
            sName={Sdata[1].sName}
            link={Sdata[1].link}
        />
        <App 
            imgSrc={Sdata[2].imgSrc}
            title={Sdata[2].title}
            sName={Sdata[2].sName}
            link={Sdata[2].link}
        />                
    </>,
    document.getElementById('root') 
)
*/


/*
//Sixth Challenge - 2
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Card.jsx';
//Note in functional components we pass a third party object which manages data for a function like find imgSrc through props object

ReactDOM.render(
    <>
        <App 
            imgSrc="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRVoPjJKz6rq__SwUPC2yNoLARfdxVn8uuCysd48hp4ubjYf8uc"
            title="A Netfelix Original Series"
            sName="DARK"
            link="https://cineb.net/watch-movie/watch-2-states-free-3790.2522357"
        />
        <App 
            imgSrc="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRVoPjJKz6rq__SwUPC2yNoLARfdxVn8uuCysd48hp4ubjYf8uc"
            title="A Netfelix Original Series"
            sName="DARK"
            link="https://cineb.net/watch-movie/watch-2-states-free-3790.2522357"
        />
        <App 
            imgSrc="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRVoPjJKz6rq__SwUPC2yNoLARfdxVn8uuCysd48hp4ubjYf8uc"
            title="A Netfelix Original Series"
            sName="DARK"
            link="https://cineb.net/watch-movie/watch-2-states-free-3790.2522357"
        />                
    </>,
    document.getElementById('root') 
)*/


/*
//Sixth Challenge - 1
import React from 'react';
import ReactDOM from 'react-dom';


function App(){
    return (
        <div className='cards'>
            <div className="card">
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRVoPjJKz6rq__SwUPC2yNoLARfdxVn8uuCysd48hp4ubjYf8uc" 
                     alt='My Pic' 
                     className="card_img"/>
                <div className="card__info">
                    <span className="card_category">A Netfelix Original Series</span>
                    <h3 className="card_title">DARK</h3>
                    <a href="https://cineb.net/watch-movie/watch-2-states-free-3790.2522357" target="_blank">
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
        </div>  
    )  
};


ReactDOM.render(
    <>
        <App 
        //  This is just for your undestading, Mean we can create Custom Atrributes too, called React XML attr or JSx Attr
        //     imgSrc="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRVoPjJKz6rq__SwUPC2yNoLARfdxVn8uuCysd48hp4ubjYf8uc"
        //     title="A Netfelix Original Series"
        //     sName="DARK"
        //     link="https://cineb.net/watch-movie/watch-2-states-free-3790.2522357"            
        />
    </>,
    document.getElementById('root') 
)
*/


/*
//Fifth Challenge
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'; //I think it takes only prebuilt jsx tags that's why we have to give here format too 

//import * as que from './calculator'; //We can create here an object to access calculator's 

ReactDOM.render(<App />, document.getElementById('root'));
*/


/*
//Fourth Challenge
import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './Heading.jsx';
import Para from './Para';
import List from './List.jsx';

ReactDOM.render(
    <>
        <Heading></Heading>
        <Para></Para>
        <List/>
    </>,
     document.getElementById('root')
)   
*/


/*
//Third Challenge
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let d = new Date(2021, 5, 7, 19);
    d = d.getHours();
let greet;
const cssStyle = {};

if(d >= 12 && d <= 19){
    greet = "Good Afternoon";
    cssStyle.color = "Red";
}else if(d >=19 && d<=24) {
    greet = "Midnight";
    cssStyle.color = "Yellow";
}else{
    greet = "Good Morning";
    cssStyle.color = "Blue";
}

ReactDOM.render(
    <React.Fragment>
        <div>
            <h1>Hello Sir, <span style={cssStyle}>{greet}</span></h1>
        </div>
    </React.Fragment>,
    document.getElementById('root')
)*/


//Second Challenge
/*
import React from "react";
import ReactDOM from "react-dom";

const d = new Date();
const t = new Date().toLocaleTimeString();

ReactDOM.render(
    <React.Fragment>
        <h1>Let's work with Date Methods</h1>
        <p>`This is Current Date: {d.getDay()}/{d.getMonth()}/{d.getFullYear()} `</p>
        <p>This is Current Time: {t}</p>
    </React.Fragment>,
    document.getElementById('root')
)
*/


//First Challenge
/*
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
    <>
        <h1>Netfelix Collection</h1>
        <p>5 Inspirational Movies</p>
        <ol>
            <li>Guru</li>
            <li>Manjhi: The Mountain Man</li>
            <li>Bhaag Mikha Bhaag</li>
            <li>Lakshya</li>
            <li>English Vinglish</li>
        </ol>
    </>,
     document.getElementById('root'));
*/


//My First APP
/*     
// var React = require('react');
// var ReactDOM = require('react-dom');

OR

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <h1>My First APP</h1>,
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/


/*
//Handling Events
import React from 'react';
import ReactDOM from 'react-dom';
import AppHE from './AppHE';

ReactDOM.render(<AppHE/>, document.getElementById('root'));
*/

/*
//Forms | Controlled vs Unctrolled Component

*/


/*
//Double Input Forms
import React from 'react';
import ReactDOM from 'react-dom';
import AppForms from './AppForms';

ReactDOM.render(<AppForms/>, document.getElementById('root'));
*/


/*

*/
import React from 'react';
import ReactDOM from 'react-dom';
import AppForms from './AppForms';

ReactDOM.render(<AppForms/>, document.getElementById('root'));