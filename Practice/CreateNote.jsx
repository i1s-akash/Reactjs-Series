import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const CreateNote = (props) => {
    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const InputEvent = (event)  => {

        // const value =   event.target.value;
        // const name =   event.target.name;

        const {name, value} = event.target;

        setNote((prevData) => {
            return {
                ...prevData, 
                [name]: value,
            };
        });
        console.log(note)
    };

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: "",            
        });
    };

    const expandIt = () => {
        setExpand(true);
    }

    const btoNormal = () => {
        setExpand(false);
    }

    return <>
        <div className="main_note">
            <form autoComplete="off">
            {expand? 
                    <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Your title"/>
            : null}
                <textarea rows="" name="content" value={note.content} onDoubleClick={btoNormal} onClick={expandIt} onChange={InputEvent} columns="" placeholder="Type something..."/>
            {expand? 
                <Button variant="contained" color="primary" onClick={addEvent}>
                    <AddIcon class="plus_sign"></AddIcon>
                </Button>              
            : null}
            </form>
        </div>
    </>
}

export default CreateNote;