import React, { useState, useContext } from 'react';
// import AddTodo from './AddTodo';
import TodoContext from '../Context/TodoContext';

const TodoForm = () => {

    let [todoTask, setTodoTask] = useState("");
    const { addTodo } = useContext(TodoContext);
    const [error, setError] = useState("");

    // const addTodoList11 = 'abc'

    // const setAddTodo = (e) => {
    //     e.preventDefault();
    //     console.log(todoTask);
    //     //return <AddTodo todoTask={todoTask}  />
    //     setAddTodoList(prev => [...prev, todoTask]);
    //     SetTodoTask('');
    //     console.log(addTodoList);
    // }

    // const setTodoTask = () => {
    //     console.log('settodo function entered => ');
    //     if(todoTask.trim() === null || todoTask === "") {
    //         setError('This field is required')
    //         console.log('error => ', error);
    //     }
    // }

    // const setValidation = (e) => {
    //     console.log('setValidation form entered');
    //     const V = e.target.value;

    //     if(V.trim() === null || V === "") {
    //         setError('This field is required')
    //         console.log('error => ', error);
    //     }
    //     else {
    //         setTodoTask(V);
    //     }
    // }

    const handleAddTodo = (e) => {
        e.preventDefault();

        if (todoTask === '') {
            setError('This message is required');
        }
        else {
            addTodo(todoTask);
            setTodoTask("");
            setError("");   
        }
    };

    return (
        <div>
            <div className="bg-white p-5 mt-10 rounded-sm text-center">
                <h1 className='text-2xl font-bold text-emerald-800'>Welcome to Todo App</h1>
                <p className='text-xs'>Please manage your Todo List here:</p>
            </div>
            <form onSubmit={handleAddTodo} className='my-5 bg-emerald-300 p-5 rounded-sm'>
                <label className='font-semibold'>Add Todo Task: </label>
                <div className='flex items-center justify-center h-screenflex flex-row'>
                    <input type='text' value={todoTask} onChange={(e) => setTodoTask(e.target.value)} 
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    />
                    <button type='submit' className='bg-emerald-800 hover:bg-black-700 text-white font-bold py-2 px-4 rounded'>Add</button>
                </div>
                <p>{error && error}</p>
            </form>
        </div>
    )
}

export default TodoForm;