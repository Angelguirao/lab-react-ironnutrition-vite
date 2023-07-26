function FoodBox({ food, deleteFood }) {
    const { name, calories, image, servings } = food;
    const totalCalories = calories * servings;

    const handleDeleteClick = () => {
        deleteFood(food.id);
      };
  
    return (
      <div className="food-box">
        <p>{name}</p>
        <img src={image} alt={name} style={{ width: "250px" }} />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {totalCalories} kcal</b>
        </p>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    );
  }
  
  export default FoodBox;
  