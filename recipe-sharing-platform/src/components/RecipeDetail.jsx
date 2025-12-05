import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((r) => r.id === parseInt(id));
        setRecipe(found);
      });
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <p className="text-gray-600 text-lg">Recipe not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <Link
        to="/"
        className="text-blue-600 hover:text-blue-800 font-semibold mb-6 inline-block"
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
          <h1 className="text-4xl font-bold mb-4 text-gray-800">{recipe.title}</h1>
          <p className="text-gray-600 text-lg mb-6">{recipe.summary}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
              <ul className="list-disc list-inside space-y-2">
                {recipe.ingredients.map((ing, idx) => (
                  <li key={idx}>{ing}</li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-100 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Instructions</h2>
              <ol className="list-decimal list-inside space-y-2">
                {recipe.instructions.map((inst, idx) => (
                  <li key={idx}>{inst}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
