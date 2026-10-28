import AppName from "./components/AppName.jsx"
import AddTodo from "./components/AddTodo.jsx"
import TodoItems from "./components/TodoItems.jsx"
import WelcomeMessage from "./components/WelcomeMessage.jsx"
import './App.css'
import { useState } from "react"

function App() {
  const [todoItems, setTodoItems] = useState([])

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => 
      [...currValue, {
        name: itemName,
        dueDate: itemDueDate}
      ]);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName)
    setTodoItems(newTodoItems);


  }


  return (
    <center className='todo-container'>
      <AppName />
      <AddTodo oneNewItem={handleNewItem}></AddTodo>
      <WelcomeMessage todoItems={todoItems}></WelcomeMessage>
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  )
}

export default App
