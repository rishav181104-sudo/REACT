import { useState , useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ oneNewItem }) {

  // const [todoName, setTodoName] = useState('');
  // const [dueDate, setDueDate] = useState('');
  const todoNameElement = useRef();
  const dueDateElement = useRef();


  // const handleNameChange = () => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current +=1 ;

  // }

  // const handleDateChange = () => {
  //   setDueDate(event.target.value);
  //   console.log(`noOfUpdates are: ${noOfUpdates.current}`);
    

  // }

  const handleAddButtonClicked = (event) => {
    const todoName = todoNameElement.current.value;
    const dueDate= dueDateElement.current.value;
    todoNameElement.current.value="";
    dueDateElement.current.value="";
    event.preventDefault();
    oneNewItem(todoName, dueDate);
    // setDueDate("");
    // setTodoName("");
  }

  return (
    <div className="container text-center">
      <form className="row rv-row "
      onSubmit={ handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo here"
            // value={todoName}
            // onChange={handleNameChange} 
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            // value={dueDate}
            // onChange={handleDateChange} 
            />
        </div>
        <div className="col-2">
          <button
            onSubmit={handleAddButtonClicked}
            className="btn btn-success rv-button "
          > 
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddTodo;