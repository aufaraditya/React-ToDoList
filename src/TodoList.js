import React from 'react'
import * as All from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';

export default function TodoList({todos, deleteTodos}) {
    return (
        <All.List>
            {todos.map((todo, index) => (
                <All.ListItem key={index.toString()} dense button>
                    <All.ListItemIcon>
                        <All.Checkbox /*tabIndex={-1}*/ disableRipple /> 
                    </All.ListItemIcon>
                    <All.ListItemText primary={todo}/>
                    <All.ListItemSecondaryAction>
                        <All.IconButton aria-label="Delete" onClick={deleteTodos}>
                            <DeleteIcon/>
                        </All.IconButton>
                    </All.ListItemSecondaryAction>
                </All.ListItem>
            ))}
        </All.List>

    )
}
