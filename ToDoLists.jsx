import React from "react";
import CancelIcon from '@mui/icons-material/Cancel';
const ToDoLists = (props) =>{

    
    return (
    <>
    <div className="todo_style">
        <CancelIcon onClick={() =>{
            props.onSelect(props.id);
        }}/>
    <li>{props.text}</li>
    </div>
    </>
);
}

export default ToDoLists;