import React, { useContext, useState } from "react";
import TodoContext from "../Context/TodoContext";

const AddTodo = () => {

    const { todos, deleteTodo, updateTodo, searchTodo } = useContext(TodoContext);
    const [newChangeTodo, setnewChangeTodo] = useState('');
    const [txtSearch, setTxtSearch] = useState('');
    const [isEditing, setIsEditing] = useState(null);

    const handleEdit = (i) => {
        setIsEditing(i);
        setnewChangeTodo(todos[i]);
    }

    const saveTodo = (i) => {
        updateTodo(i, newChangeTodo);
        //console.log(newChangeTodo);
        setIsEditing(null);
        setnewChangeTodo("");
    }

    //searchTodo(txtSearch);       

    // Pagination

    const [currentPage, setCurrentPage] = useState(1);
    const taskPerPage = 6;

    const indexOfLastPage = currentPage * taskPerPage;
    const indexOfFirstPage = indexOfLastPage - taskPerPage;
    const currentTasks = todos.slice(indexOfFirstPage, indexOfLastPage);
    const totalLen = todos.length;
    const totalpages = Math.ceil(totalLen/taskPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const renderPageNumbers = [];
    for (let i = 1; i <= totalpages; i++) {
         renderPageNumbers.push(i);
    }
    
    console.log('Render Pagenumber => ', totalpages);

    
    

    return (
        <>
        <div className="bg-emerald-100 bg-search-bar flex items-center justify-between">
            <input type="text" placeholder="Search here"  onChange={(e) => setTxtSearch(e.target.value)}
                   className="bg-transparent appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            />
            <button>
                <svg class="h-6 w-6 text-emerald-500"  fill="none" viewBox="0 0 20 20" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
            </button>
        </div>
        <div className="rounded-sm item-list">
            {
                currentTasks.filter(items => items.includes(txtSearch))?.map(
                    (t, i) => {
                        return (
                            <div key={i} className="border-b bg-white border-l-4 p-1 flex items-center justify-between h-screenflex flex-row gap-x-1 hover:bg-emerald-100">
                                {
                                    isEditing === i ? (
                                        <>
                                            <input type='text' value={newChangeTodo} onChange={(e) => setnewChangeTodo(e.target.value)}
                                                className="bg-transparent shadow appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            />
                                            <button onClick={() => saveTodo(i)}
                                                className="bg-white hover:bg-black-800 text-emerald-700 font-semibold hover:text-white py-2 px-4 border border-emerald-500 hover:border-transparent rounded"
                                            >
                                                <svg class="h-3 w-3 text-green-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />  <polyline points="17 21 17 13 7 13 7 21" />  <polyline points="7 3 7 8 15 8" /></svg>
                                            </button>
                                        </>
                                    )
                                        
                                    : 
                                    
                                    (
                                        <>
                                            <p
                                                className="w-full py-2 px-3 text-gray-700"
                                            >
                                                {t}
                                            </p>
                                            <button onClick={() => handleEdit(i)}
                                                className="bg-white hover:bg-black-800 text-emerald-700 font-semibold hover:text-white py-2 px-4 border border-emerald-500 hover:border-transparent rounded"
                                            >
                                                <svg class="h-3 w-3 text-emerald-800" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></svg>
                                            </button>
                                            <button onClick={() => deleteTodo(i)}
                                                className="bg-white hover:bg-black-800 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                                            >
                                                <svg class="h-3 w-3 text-red-800" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="4" y1="7" x2="20" y2="7" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" />  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                                            </button>
                                        </>
                                    )
                                }

                            </div>
                        )
                    }
                )
            }
        </div>
        <div className="clear-both mt-5 absolute todo-pagination">
            <div className="flex items-center justify-between">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <svg class="h-8 w-8 text-emerald-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
                        
                            <polyline points="12 8 8 12 12 16" />  
                            <line x1="16" y1="12" x2="8" y2="12" />
                    </svg>
                </button>
                
                <ul className="flex items-center justify-between">
                {
                    renderPageNumbers?.map(
                        (pageNumber) => (
                            <li className={(pageNumber === currentPage) ? 'active' : 'inactive'}>
                                <button 
                                    className="bg-white hover:bg-black-800 text-emerald-700 font-semibold hover:text-black px-2 mx-1 border border-emerald-500 hover:border-black rounded"
                                    key={pageNumber} 
                                    onClick={() => handlePageChange(pageNumber)}
                                >
                                        {pageNumber}
                                </button>
                            </li>
                        )
                    )
                }
                </ul>
                
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalpages}
                    className="float-right"
                >
                    <svg class="h-8 w-8 text-emerald-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                        <path stroke="none" d="M0 0h24v24H0z"/>  
                            <line x1="16" y1="12" x2="8" y2="12" /> 
                            <line x1="16" y1="12" x2="12" y2="16" />  <line x1="16" y1="12" x2="12" y2="8" />
                    </svg>
                </button>
            </div>    
        </div>
        </>
    )
}

export default AddTodo;