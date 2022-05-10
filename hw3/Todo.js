import React, { useState } from "react";

export default function Todo({ title, desc, dateCreated,dateCompleted,complete, index, dispatch }) {

 
    function handleOnChange(evt) {
        dispatch({type:"TOGGLE_TODO",title, desc, dateCreated,dateCompleted: Date(Date.now()).toString(), complete: evt.target.checked, index})
        
    }

    return (
        <div>
        <h3>{title}</h3>
        <p>Date Created: {dateCreated}</p>
        <div>{desc}</div>
        Completed: {complete} 
        <input type="checkbox" value={complete} onChange={handleOnChange}/>
        <div>Date Completed: {dateCompleted}</div>
    </div>
);
}  