import { useState, useEffect } from 'react';
import './App.css';
import { TodoProvider } from './context';
import TodoForm from './components/TodoForm.jsx';
import TodoItem from './components/TodoItem.jsx';
function App() {
  const [todos, setTodo] = useState([]);

  // Add todo method 
  const addTodo = (todos) => {
    setTodo((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }
  // Update todo method 
  const updateTodo = (id, todo) => {
    setTodo((prevTodo) => prevTodo.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }
  // Delete todo method 
  const deleteTodo = (id) => {
    setTodo((prevTodo) => prevTodo.filter((todo) => todo.id !== id))
  }

  // Toggle todo method 
  const toggleToto = (id) => {
    setTodo((prevTodo) => prevTodo.map((prevTodo) => prevTodo == id ? {
      ...prevTodo, complete: !prevTodo.complete
    } : prevTodo))
  }

  //Local storage in react 
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.lenght > 0) {
      setTodo("todos");
    }
  }, [])

  // Storage the item from local storage and the save the logal storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleToto }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
                className='w-full'
              >
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
