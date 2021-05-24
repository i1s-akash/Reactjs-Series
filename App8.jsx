import React, { createContext } from 'react';
import CompA from './CompA'

const FirstName = createContext();
const LastName = createContext();

const App8 = () => {
    return (
        <>
            <FirstName.Provider value="Akash">
                <LastName.Provider value="Prajapati">
                    <CompA/>
                </LastName.Provider>                
            </FirstName.Provider>
        </>
    );
};

export default App8;
export {FirstName, LastName};