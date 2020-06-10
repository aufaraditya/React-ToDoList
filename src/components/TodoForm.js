import React, {useState} from 'react';
import {v4 as uuid} from 'uuid'


export default function TodoForm({addTodo}) {
    
    const[todo, setTodo] = useState ({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodo({...todo, task: e.target.value});
        /* Translated into
        setTodo({ id: "", task: "", completed: false, task: e.target.value})  (with Initial 'todo' object state)
        Or whichever the state of 'todo' object at the time*/

        /*Properties with the same key in a literal get the value of the last one.
        Which update the 'task:""' value into 'task:e.target.value'*/
    }

    function handleSUbmit(e){
        e.preventDefault();
        if(todo.task.trim()){ /*Check whether 'todo.task' without space is not empty*/
            addTodo({...todo, id: uuid()});
            

            //reset Task input
            setTodo({...todo, task: ""});
             /* Translated into
            setTodo({ id: "", task: "", completed: false, task: ""})*/
        }
    }
    
    return (
        <form onSubmit={handleSUbmit}>

            <input
                name="task"
                type="text"
                value= {todo.task}
                onChange={handleTaskInputChange}
            />
            <button type="submit">Submit</button>

        </form>
    )
}
