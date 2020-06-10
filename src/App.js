import React, {useState, useEffect} from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  
  const[todos, setTodos] = useState([]);

  useEffect(() => { 
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storageTodos){
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => { 
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo){
    setTodos([todo, ...todos]);
  }

  function toogleComplete(id){
    setTodos(
      todos.map(todo => {
        if (todo.id === id){
          return{
            ...todo,
            completed: !todo.completed /* False becoma true, and vise versa (Negated)*/
          };

        }
        return todo;
      })

    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>To Do</p>
        <TodoForm addTodo = {addTodo}></TodoForm>
        <TodoList todos={todos} toogleComplete={toogleComplete}/>
      </header>
    </div>
  );
}

export default App;
