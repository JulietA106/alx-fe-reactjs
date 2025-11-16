// src/components/AddRecipeForm.jsx
import { useState } from "react";
import { useRecipeStore } from "../stores/recipeStore";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [category, setCategory] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newRecipe = {
      title,
      description,
      ingredients: ingredients.split(',').map(item => item.trim()),
      instructions,
      category,
      cookingTime: parseInt(cookingTime),
      difficulty,
      image: "/images/placeholder.jpg" // Default placeholder image
    };

    addRecipe(newRecipe);
    
    // Reset form
    setTitle("");
    setDescription("");
    setIngredients("");
    setInstructions("");
    setCategory("");
    setCookingTime("");
    setDifficulty("Easy");
    
    alert("Recipe added successfully!");
  };

  return (
    <div className="add-recipe-form">
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Ingredients (comma separated):</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="flour, sugar, eggs, milk"
            required
          />
        </div>

        <div className="form-group">
          <label>Instructions:</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Cooking Time (minutes):</label>
          <input
            type="number"
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Difficulty:</label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipeForm;