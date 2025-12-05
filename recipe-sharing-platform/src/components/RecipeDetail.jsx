import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = data.find((item) => item.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <p className="text-gray-600 text-xl mb-4">Recipe not found</p>
        <Link
          to="/"
          className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <Link
        to="/"
        className="text-blue-600 underline mb-6 inline-block hover:text-blue-800"
      >
        ← Back to Home
      </Link>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-80 object-cover"
        />

        <div className="p-8">
          <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">
            {recipe.title}
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Ingredients
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
              {recipe.ingredients.map((item, index) => (
                <li
                  key={index}
                  className="bg-gray-100 p-2 rounded shadow-sm hover:bg-gray-200 transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Cooking Instructions
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              {recipe.steps.map((step, index) => (
                <li
                  key={index}
                  className="bg-gray-100 p-2 rounded shadow-sm hover:bg-gray-200 transition"
                >
                  {step}
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
