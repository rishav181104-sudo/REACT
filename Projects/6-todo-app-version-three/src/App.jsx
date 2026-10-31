import AppName from "./components/AppName.jsx"
import AddTodo from "./components/AddTodo.jsx"
import TodoItems from "./components/TodoItems.jsx"
import WelcomeMessage from "./components/WelcomeMessage.jsx"
import './App.css'
//import { /* useState ,*/  useReducer} from "react"
import TodoItemsContextProvider /*,{ TodoItemsContext }*/ from "./store/todo-items-store";



function App() {
  return (
    <TodoItemsContextProvider>
       <center className='todo-container'>
      <AppName />
      <AddTodo ></AddTodo>
      <WelcomeMessage></WelcomeMessage>
      <TodoItems></TodoItems>
    </center>
    </TodoItemsContextProvider>
   );
  }

export default App
