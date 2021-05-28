import react from 'react';

const SpreadOperator = () => {
    var array = [1, 2, 3, 4];
    const [array1, ...remaining] = array;

    const obj = {
        fname: 1,
        lname: 2
    }

    const obj1 = {
        ...obj,
        age: 4
    }

    console.log(obj1);

    return (
        <>
            <h1>{array1}</h1>
            <h2>{remaining}</h2>
            {/* <h3>{obj1}</h3> //It will give you erro bcoz object are not valid as a child in react. */}
        </>
    )
};

export default SpreadOperator;