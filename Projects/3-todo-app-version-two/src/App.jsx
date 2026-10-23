import AppName from "./components/AppName.jsx"
import AddTodo from "./components/AddTodo.jsx"
import TodoItems from "./components/TodoItems.jsx"
import './App.css'

function App() {
  const todoItems = [{
    name:"Buy Milk",
    dueDate:"6/10/2026"
  },
  {
    name:"Go to College",
    dueDate:"6/10/2026"
  },
  {
    name:"Like this video",
    dueDate:"right now"
  }]
  return (
    <center className='todo-container'>
      <AppName />
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  )
}

export default App
