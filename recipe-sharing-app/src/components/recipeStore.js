// Compatibility re-export for tests expecting the store under src/components
export { useRecipeStore } from "../stores/recipeStore";

import { create } from "zustand";
import { nanoid } from "nanoid";

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  // Add a new recipe
  addRecipe: (recipe) =>
    set((state) => {
      const newRecipe = { ...recipe, id: nanoid() };
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: filterRecipes(updatedRecipes, state.searchTerm),
      };
    }),

  // Update recipe
  updateRecipe: (id, updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: filterRecipes(updatedRecipes, state.searchTerm),
      };
    }),

  // Delete recipe
  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
      return {
        recipes: updatedRecipes,
        filteredRecipes: filterRecipes(updatedRecipes, state.searchTerm),
        favorites: state.favorites.filter((favId) => favId !== id),
      };
    }),

  // Search
  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: filterRecipes(state.recipes, term),
    })),

  // Favorites
  addFavorite: (id) =>
    set((state) => ({ favorites: [...state.favorites, id] })),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  // Generate recommendations (mock)
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));

// Helper function for search
const filterRecipes = (recipes, term) =>
  recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(term.toLowerCase())
  );
