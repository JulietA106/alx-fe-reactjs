import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({}); // <-- errors state

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!summary.trim()) newErrors.summary = "Summary is required";
    if (!image.trim()) newErrors.image = "Image URL is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!steps.trim()) newErrors.steps = "Steps are required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(); // call validate
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return; // stop if errors exist

    const newRecipe = {
      id: Date.now(),
      title,
      summary,
      image,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      steps: steps.split(".").map((s) => s.trim()),
    };

    console.log("New Recipe Submitted:", newRecipe);
    alert("Recipe submitted! (Check console)");

    // Clear form
    setTitle("");
    setSummary("");
    setImage("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6">Add New Recipe</h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 mb-1 border rounded"
        />
        {errors.title && <p className="text-red-500 text-sm mb-2">{errors.title}</p>}

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-3 mb-1 border rounded"
        />
        {errors.image && <p className="text-red-500 text-sm mb-2">{errors.image}</p>}

        <textarea
          placeholder="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="w-full p-3 mb-1 border rounded"
        />
        {errors.summary && <p className="text-red-500 text-sm mb-2">{errors.summary}</p>}

        <textarea
          placeholder="Ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-3 mb-1 border rounded"
        />
        {errors.ingredients && <p className="text-red-500 text-sm mb-2">{errors.ingredients}</p>}

        <textarea
          placeholder="Steps (period separated)"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full p-3 mb-1 border rounded"
        />
        {errors.steps && <p className="text-red-500 text-sm mb-2">{errors.steps}</p>}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>

        <Link
          to="/"
          className="block text-center mt-4 text-blue-600 hover:text-blue-800"
        >
          Back to Home
        </Link>
      </form>
    </div>
  );
};

export default AddRecipeForm;
