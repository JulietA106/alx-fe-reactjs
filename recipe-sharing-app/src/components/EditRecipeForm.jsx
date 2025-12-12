import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "../stores/recipeStore";

const EditRecipeForm = ({ recipe: propRecipe } = {}) => {
  const { id: paramId } = useParams(); // Get recipe id from URL (if present)
  const navigate = useNavigate();
  const recipes = useRecipeStore((state) => state.recipes);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const id = propRecipe?.id ?? paramId;
  const recipe = propRecipe ?? recipes.find((r) => r.id === id);

  // Initialize form state with existing recipe data
  const [title, setTitle] = useState(recipe?.title || "");
  const [description, setDescription] = useState(recipe?.description || "");

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ Prevent default form submission
    updateRecipe(id, { title, description });
    navigate(`/recipe/${id}`); // Redirect to recipe details page
  };

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
