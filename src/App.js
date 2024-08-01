import AddTodo from './Components/AddTodo';
import TodoForm from './Components/TodoForm';
import { TodoProvider } from './Context/TodoContext';
import './App.css'

function App() {
  return (
    <div className='mx-auto w-96 text-left'>
    <TodoProvider>
      <div className="App relative">
        <TodoForm />
        <AddTodo />
      </div>
    </TodoProvider>
    </div>
  );
}

export default App;
