import React, { useEffect } from "react";
import { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

    const getLocalItems = () => {
        let list = JSON.parse(localStorage.getItem('TodoList'));
        if (list) {
            return JSON.parse(localStorage.getItem('TodoList'));
        } 
        else {
            return [];
        }
    }

    const [todos, setTodos] = useState(getLocalItems());

    const addTodo = (todo) => {
        setTodos(prevTodo => [...prevTodo, todo]);
    };

    const deleteTodo = (index) => {
        setTodos(prevTodo => prevTodo.filter((val, i) => i !== index));
    };

    const updateTodo = (index, editedTodo) => {
        setTodos(prevTodo => prevTodo.map((todo, i) => (i === index ? editedTodo : todo)))
    };


    useEffect(() => {
        localStorage.setItem('TodoList', JSON.stringify(todos))
    }, [todos]);
    

    return (
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo }}>
            {children}
        </TodoContext.Provider>
    )

}

export default TodoContext;