import React, { useState } from 'react';

const AppForms = () => {
    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
    });

    const inputEvent = (event) => {
        // setName(event.target.value);
        // console.log(event.target.value);
        // console.log(event.target.name);
        // console.log(event.target.placeholder);

        // const value = event.target.value;
        // const name = event.target.name;

        const {value, name} = event.target;

        setFullName((preValue) => {
            console.log(value)
            console.log(preValue.lname);
            console.log(preValue)
            
            return {
                ...preValue,
                [name]: value, //It is supposed to be a new value/property.
            }


            // if(name === "fname"){
            //     return {
            //         fname: value,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phone: preValue.phone,
            //     }
            // } else if (name === 'lname'){
            //     return {
            //         fname: preValue.fname,
            //         lname: value,
            //         email: preValue.email,
            //         phone: preValue.phone,                    
            //     }                
            // } else if (name === 'email'){
            //     return {
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: value,
            //         phone: preValue.phone,
            //     }                
            // } else if (name === 'phone'){
            //     return {
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phone: value,                    
            //     }                
            // }
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
                    <h1>Dear {fullName.fname}  {fullName.lname} {fullName.email} {fullName.phone}</h1>
                    <input type="text" placeholder="Enter Your First Name" name="fname" onChange={inputEvent} value={fullName.fname}/>
                    <input type="text" placeholder="Enter Your Last Name" name="lname" onChange={inputEvent} value={fullName.lname}/>
                    <input type="email" placeholder="Enter Your Email" name="email" onChange={inputEvent} value={fullName.email}/>
                    <input type="text" placeholder="Enter Your Phone" name="phone" onChange={inputEvent} value={fullName.phone}/>
                    <button onClick={Submit}>Submit it 👍</button>
                </form>                
            </div>
        </>
    );
};

export default AppForms;


/*
import React, { useState } from 'react';

const AppForms = () => {
    const [value, setValue] = useState("");
    const [last, setLast] = useState("");
    const [fullName, setFullName] = useState("");
    const [lastName, setLastName] = useState("");

    const inputEvent = (event) => {
        setValue(event.target.value);
        console.log(event.target.value);
    }   

    const inputEventLast = (event) => {
        setLast(event.target.value);
    }

    const Submit = (event) => {
        event.preventDefault();
        setFullName(value);
        setLastName(last);
        // setFullName({value}); don't write it like this otherwise it will be an object instead of variable
    }

    return (
        <>
            <div>
                <form onSubmit={Submit}>
                    <h1>Hello {fullName} {lastName}</h1>
                    <input type="text" placeholder="Enter Your Name" onChange={inputEvent} value={value}/>
                    <input type="text" placeholder="Enter Your lname" onChange={inputEventLast} value={last}/>
                    // <input type="text" placeholder="Enter Your Name" defaultValue=""/>
                    <button onClick={Submit}>Submit it 👍</button>
                </form>                
            </div>
        </>
    );
};

export default AppForms;
*/