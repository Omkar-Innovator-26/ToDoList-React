import React, { useState } from "react";
import ToDoLists from "./ToDoLists";

const ToDoList =()=>{
    const [inputList , setinputList] = useState("");
    const [items, setitems] = useState([]);

    const itemEvent =(event)=>{
        setinputList(event.target.value);
    };

    const listofItems = () =>{
            setitems((olditems) => 
            {
                return [...olditems,inputList];
            });
            setinputList("");
    };

    const deleteitems = (id) =>{
        console.log("deleted");

        setitems((olditems) =>{
            return olditems.filter((arrElem , index) =>{
                return index !== id;
            });
        });
    };
    return <>
        
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1> ToDo List </h1>
                <br></br>
                <input type="text" placeholder="Add a Items" value={inputList} onChange={itemEvent}></input>
                <button onClick={listofItems}> + </button>

                <ol>
                    {/* <li>{InputList}</li> */}
                {
                    items.map((itemval,index) =>
                    {
                        return <ToDoLists 
                        key={index} 
                        text={itemval} 
                        id={index}
                        onSelect={deleteitems}/>;
                    })
                }
                </ol>
            </div>
        </div>
        </>
    
}

export default ToDoList;