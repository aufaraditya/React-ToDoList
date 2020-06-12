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

function deleteTodos(todoIndex){
  const newTodos = todos.filter((_, index) => index !==todoIndex );
  //Whatever todos don’t match the provided index are kept and stored in state using setTodos.
  setTodos(newTodos);
}

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <TodoForm saveTodos={saveTodos}/>
      <TodoList todos={todos}
                deleteTodos={deleteTodos}></TodoList>
    </div>
  );
}

export default App;
