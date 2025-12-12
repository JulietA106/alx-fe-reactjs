import React from "react";
import { useRecipeStore } from "../stores/recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);

  if (!recommendations || recommendations.length === 0)
    return <p>No recommendations yet.</p>;

  return (
    <ul>
      {recommendations.map((recipe) => (
        <li key={recipe?.id || Math.random()}>
          {recipe?.title || "(untitled recipe)"}
        </li>
      ))}
    </ul>
  );
};

export default RecommendationsList;



