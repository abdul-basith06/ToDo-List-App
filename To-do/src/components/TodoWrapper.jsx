import React, { useState,useEffect } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from "uuid";
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';

const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
      setTodos([
        ...todos,
        { id: uuidv4(), task: todo, completed: false, isEditing: false },
      ]);
    }
  
    const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));
  
    const toggleComplete = (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    }
  
    const editTodo = (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
        )
      );
    }
  
    const editTask = (task, id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
        )
      );
    };

    const moveTaskUp=(id)=>{
        const currentIndex = todos.findIndex((todo) => todo.id === id);

        if (currentIndex === 0) return;
      
        const newTodos = [...todos]; 
      
        [newTodos[currentIndex], newTodos[currentIndex - 1]] = [
          newTodos[currentIndex - 1],
          newTodos[currentIndex],
        ];
      
        setTodos(newTodos);
    }

    const moveTaskDown= (id)=>{
        const currentIndex = todos.findIndex((todo) => todo.id === id);

  if (currentIndex === todos.length - 1) return;

  const newTodos = [...todos]; 
  [newTodos[currentIndex], newTodos[currentIndex + 1]] = [
    newTodos[currentIndex + 1],
    newTodos[currentIndex],
  ];

  setTodos(newTodos);
    }

    useEffect(()=>{
        document.title = `You have ${todos.length} pending task.`
    })
  
    return (
      <div className="TodoWrapper">
        <h1>Do Epic Shite !</h1>
        <TodoForm addTodo={addTodo} />
        {/* display todos */}
        {todos.map((todo) =>
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo} key={todo.id}/>
          ) : (
            <Todo
              key={todo.id}
              task={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleComplete={toggleComplete}
              moveTaskUp={moveTaskUp}
              moveTaskDown={moveTaskDown}
            />
          )
        )}
      </div>
    );
  };

export default TodoWrapper