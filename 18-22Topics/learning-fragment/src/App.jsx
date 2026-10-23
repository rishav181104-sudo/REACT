import FoodItems from "/components/FoodItems"
import ErrorMessage from "/components/ErrorMessage"
import React, { useState } from 'react';
import './App.css';
import Container from "../components/Container";
import FoodInput from "/components/FoodInput";

function App() {
  let [foodItems, setFoodItems] = useState([])


  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newFoodItem = event.target.value;
      // ... is a spread opeator it add the value of current  array to this array
      let newItems = [...foodItems, newFoodItem]
      setFoodItems(newItems)
    }
  };



  return (
    <React.Fragment>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>

      </Container>

     
    </React.Fragment>
  );
}

export default App
