import AppName from "./components/AppName.jsx"
import AddTodo from "./components/AddTodo.jsx"
import TodoItems from "./components/TodoItems.jsx"
import WelcomeMessage from "./components/WelcomeMessage.jsx"
import './App.css'
import { useState } from "react"

function App() {
  const [todoItems, setTodoItems] = useState([])

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [...todoItems, {
      name: itemName,
      dueDate: itemDueDate
    }];
    setTodoItems(newTodoItems);

  }

  const handleDeleteItem = (todoItemName)=> {
    const newTodoItems= todoItems.filter(item => item.name !== todoItemName)
    setTodoItems(newTodoItems);
  
   
  }

  
  return (
    <center className='todo-container'>
      <AppName />
      <AddTodo oneNewItem={handleNewItem}></AddTodo>
      {todoItems.length ===0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems 
      todoItems={todoItems} 
      onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  )
}

export default App
