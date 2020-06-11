import React , {useState} from 'react'
import TextField from '@material-ui/core/TextField'

export default function TodoForm({saveTodos}) {

    const [value, setValue] = useState([]);

    function handleForm (e){
        e.preventDefault();
        saveTodos(value);
        setValue('');
        
    }

    function handleChanges(e){
        setValue(e.target.value);
    }

    return (
        <form onSubmit={handleForm}>
            < TextField onChange={handleChanges}      
            variant="outlined" 
            placeholder="Add todo" 
            margin="normal" 
            value = {value}
            />
        </form>
    )
}
