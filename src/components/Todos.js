import React from 'react'

export default function Todos({todo, toogleComplete}) {
    function handleCheckBoxClick(){
        toogleComplete(todo.id);
    }


    return (
        <div style={{display: "flex"}}>
            <input type="checkbox" onClick={handleCheckBoxClick}/>
            <li style={{
                color:"white",
                textDecoration:todo.completed? "line-through":null /*This means style will be applied if todo.completed is true*/
            }}>{todo.task}</li>
            <button>X</button>
        </div>
    )
}
