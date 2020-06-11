import React, {useState} from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Typography from '@material-ui/core/Typography';

function App() {
  const[todos,setTodos] = useState([]);

  function saveTodos(todoText) {
    const trimmedText = todoText.trim();

    if (trimmedText.length > 0){
        setTodos([...todos, trimmedText]);
    }
}

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <TodoForm saveTodos={saveTodos}/>
      <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default App;
