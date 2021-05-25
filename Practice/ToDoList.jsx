import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const ToDoList = () => {
    const [item, setItem] = useState("Rishabh Shrama");
    const [newitem, setNewItem] = useState([]);

    const itemEvent = (event) => {
        setItem(event.target.value);
    }

    const listOfItems = () =>{
        setNewItem((prevValue) => {
            return [...prevValue, item];
        })
    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                        <h1>To Do List</h1>
                    <br/>
                    <input type="text" placeholder="Add an item" onChange={itemEvent}/>
                    <Button className="newBtn" onClick={listOfItems}>
                        <AddIcon />
                        <DeleteForeverIcon />
                    </Button>

                    <br />
                        <ol>
                            {newitem.map((val) => {
                                return <li> {val} </li>
                            })}
                        </ol>
                    <br />

                </div>
            </div>
        </>
    )
}

export default ToDoList;