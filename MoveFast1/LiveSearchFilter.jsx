import React from 'react';

const LiveSearchFilter = (props) => {
    const img = `https://source.unsplash.com/400x300/?${props.name}`;
    return (
        <>
            <div>
                <h1>LiveSearchFilter</h1>
                <img src={img} alt="search"/>
            </div>
        </>
    )
}

export default LiveSearchFilter;