import React from 'react';
import {FirstName, LastName} from './App8';

const CompC = () => {
    return (
        <>
            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>
                            {(lname) => {
                                return <h1>I am {fname} {lname}.</h1>;
                            }}
                        </LastName.Consumer>                        
                    );
                }}
            </FirstName.Consumer>            
        </>
    );
};

export default CompC;

// I think this chain is called callback