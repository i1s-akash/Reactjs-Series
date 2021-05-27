import React, { useState } from 'react';

const AppForms = () => {
    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
    });

    const inputEvent = (event) => {
        // setName(event.target.value);
        console.log(event.target.value);
        console.log(event.target.name);
        // console.log(event.target.placeholder);

        const value = event.target.value;
        const name = event.target.name;

        setFullName((preValue) => {
            console.log(preValue);

            if(name === "fname"){
                return {
                    fname: value,
                    lname: preValue.lname,
                }
            } else if (name === 'lname'){
                return {
                    fname: preValue.fname,
                    lname: value,
                }                
            }
        }); 
    }   

    const Submit = (event) => {
        event.preventDefault();
        alert('Congrats, You did it 👍!');
    }

    return (
        <>
            <div>
                <form onSubmit={Submit}>
                    <h1>Dear {fullName.fname} {fullName.lname}</h1>
                    <input type="text" placeholder="Enter Your First Name" name="fname" onChange={inputEvent} value={fullName.fname}/>
                    <input type="text" placeholder="Enter Your Last Name"name="lname" onChange={inputEvent} value={fullName.lname}/>
                    <button onClick={Submit}>Submit it 👍</button>
                </form>                
            </div>
        </>
    );
};

export default AppForms;
//name