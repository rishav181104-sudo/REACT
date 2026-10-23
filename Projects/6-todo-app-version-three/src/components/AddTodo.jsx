import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ oneNewItem }) {

  const [todoName, setTodoName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleNameChange = () => {
    setTodoName(event.target.value);

  }

  const handleDateChange = () => {
    setDueDate(event.target.value);

  }

  const handleAddButtonClicked = () => {
    oneNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  }

  return (
    <div className="container text-center">
      <div className="row rv-row ">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            value={todoName}
            onChange={handleNameChange} />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={dueDate}
            onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success rv-button "
            onClick={handleAddButtonClicked}>
            <BiMessageAdd />
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddTodo;