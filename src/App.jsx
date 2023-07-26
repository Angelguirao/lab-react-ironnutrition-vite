import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
   // State to store the foods array
   const [foods, setFoods] = useState(foodsJson);

   // Function to handle food item deletion
  const handleDeleteFood = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  };

   // Function to handle food item addition
   const addFood = (newFood) => {
    const allFoods = [...foods, newFood];
    setFoods(allFoods);
  };

  return (
    <div className="App">
      <h1>Food List</h1>
      <AddFoodForm onAddFood={addFood} />
      {/* 
        Uncomment the code below if you want to render a single FoodBox component with a mock object

        <FoodBox food={{
          name: "Orange",
          calories: 85,
          image: "https://i.imgur.com/abKGOcv.jpg",
          servings: 1
        }} />
      */}
      {foods.map((food) => (
        <FoodBox key={food.id} food={food} deleteFood={handleDeleteFood}/>
      ))}
    </div>
  );
}

export default App;
