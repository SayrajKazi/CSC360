import React from "react";
import Todo from "./Todo";

export default function ToDoList({ todos=[],dispatch}) {
    return (
    <div>
        {todos.map((p, i) => (
            <Todo {...p} dispatch={dispatch} index={i} key={"post-" + i} />
        ))}
    </div>
    );
}