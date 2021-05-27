import React, {useState} from 'react';
import LiveSearchFilter from './LiveSearchFilter';

const LiveSearch = () => {
    const [img, setImg] = useState("");

    const inputEvent = (event) => {
        console.log(event.target.value);
        const data = event.target.value;
        setImg(data);
    }
    
    return (
        <>
            <div style={{margin: 100}}>
                <h1>LiveSearch</h1>
                <input type="text" placeholder="Type something..." value={img} onChange={inputEvent}/>
            </div>
            {img === "" ? null : <LiveSearchFilter name={img}/>}
        </>
    )
}

export default LiveSearch;