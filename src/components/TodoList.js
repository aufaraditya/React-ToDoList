import React from 'react'
import Todos from './Todos'

export default function TodoList({todos}) {
    return (
        <ul>
            {todos.map(todo=>(
                <Todos key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}
