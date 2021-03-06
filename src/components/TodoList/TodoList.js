import React, {useState} from 'react';
import './TodoList.css';

import TodoForm from "../TodoForm/TodoForm";
import Todo from "../Todo/Todo";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    // Function to add new todo
    const addTodo = todo => {
        // Validate the todo's text
        if (!todo.text || /^\s*$/.test(todo.text)) return;

        // Add the new todo to "todos" and update the state
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log('new todos', newTodos);
    }

    // Function to remove todo from the todo-list
    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    };

    // Function to update todo
    const updateTodo = (todoId, newValue) => {
        console.log('inside update todo', todoId, newValue);
        // Validate the todo's text
        if (!newValue.text || /^\s*$/.test(newValue.text)) return;

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    return (
        <div>
            <h1>What's the Plan for Today ?</h1>
            <TodoForm onSubmit={addTodo} todos={todos}/>

            {/* Pass all todos to the Todo React Component */}
            {todos.map(todo => <Todo key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} />)}
        </div>
    );
};

export default TodoList;
