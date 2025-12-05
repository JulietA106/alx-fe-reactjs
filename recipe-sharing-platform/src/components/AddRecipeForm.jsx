import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState(""); // <-- changed from instructions to steps

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !summary || !image || !ingredients || !steps) {
      alert("Please fill in all fields");
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      summary,
      image,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      steps: steps.split(".").map((s) => s.trim()) // <-- use steps here
    };

    console.log("New Recipe Submitted:", newRecipe);
    alert("Recipe submitted! (Check console)");

    setTitle("");
    setSummary("");
    setImage("");
    setIngredients("");
    setSteps("");
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
          className="w-full p-3 mb-4 border rounded"
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-3 mb-4 border rounded"
        />

        <textarea
          placeholder="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="w-full p-3 mb-4 border rounded"
        />

        <textarea
          placeholder="Ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-3 mb-4 border rounded"
        />

        <textarea
          placeholder="Steps (period separated)"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full p-3 mb-4 border rounded"
        />

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
