import React, { useMemo } from "react";
import { useRecipeStore } from "../stores/recipeStore";

const FavoritesList = () => {
  const favoriteIds = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);

  const favorites = useMemo(() => {
    if (!Array.isArray(favoriteIds) || !Array.isArray(recipes)) return [];
    return favoriteIds
      .map((id) => recipes.find((r) => r?.id === id))
      .filter(Boolean);
  }, [favoriteIds, recipes]);

  if (!favorites || favorites.length === 0) return <p>No favorites yet.</p>;

  return (
    <ul>
      {favorites.map((recipe) => (
        <li key={recipe.id}>{recipe.title || "(untitled recipe)"}</li>
      ))}
    </ul>
  );
};

export default FavoritesList;



