import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const App9 = () => {
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);

    useEffect(() => {
         alert("I am Clicked")
         console.log("I am clicked");
        }, [num]);

    return (
        <>
            <button onClick={
                () => { setNum(num + 1)}}
            >Click My {num} </button>

            <br></br>

            <button onClick={
                () => { setNums(nums + 1)}}
            >Click My {nums} </button>                
        </>
    );
}; 

export default App9;