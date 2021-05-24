import React, {useState} from 'react';

const AppHE = () => {
    const purple = "#8e44ad";
    const [bg, setBg] = useState(purple);
    const [name, setName] = useState("Click Me");

    const triggerIt = () => {
        alert("Wow, I am clicked! 💇");
        let newBg = "#34495e";
        setBg(newBg);
        setName("Great❕")
    }

    return (
        <>
            <div style={{backgroundColor: bg}}>
                <button onClick={triggerIt}>{name}</button>
            </div>
        </>
    );
}

export default AppHE;

//I can also use more event like onDoubleClick.