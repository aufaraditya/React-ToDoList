import React from 'react'

export default function Todos({todo}) {
    return (
        <div style={{display: "flex"}}>
            <input type="checkbox"/>
            <li style={{
                color:"white",
                textDecoration:todo.completed? "line-through":null /*This means style will be applied if todo.completed is true*/
            }}>{todo.task}</li>
            <button>X</button>
        </div>
    )
}
