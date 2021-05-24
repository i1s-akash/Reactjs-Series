import React, { useContext } from 'react';
import CompC from './CompC'
import {FirstName, LastName} from './App8';

const CompB = () => {
    const fname = useContext(FirstName); 
    const lname = useContext(LastName);
    
    return (
        <h1>I am {fname} {lname}.</h1>
    );

/*
    return <>
        <CompC/>
    </> 
*/       
}

export default CompB;