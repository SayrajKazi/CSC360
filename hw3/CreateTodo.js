import React, {useState} from "react";

export default function CreateTodo({dispatch}) {

    const [ title, setTitle ] = useState("")
    const [ desc, setDescription ] = useState("")

    function handleTitle(evt) { setTitle(evt.target.value) }
    function handleDescr(evt) { setDescription(evt.target.value) }
    function handleCreate(evt) {
        dispatch({ type: 'CREATE_TODO', title, desc, dateCreated:Date(Date.now()).toString(), dateCompleted: null, complete: false})
    }
    

    return (
        <>
        <h2>Create a TodoList</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleCreate(e)} }>
           
            <div>
                <label htmlFor="create-title">Title:</label>
                <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
                <label htmlFor="create-descr">Description:</label>
                <input type="text" value={desc} onChange={handleDescr} name="create-descr" id="create-descr"/>
            </div>
            <input type="submit" value="Create" disabled={title.length === 0} />
        </form>
        </>
    )
}