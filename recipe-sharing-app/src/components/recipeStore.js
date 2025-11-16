// Compatibility store for tests expecting it at src/components/recipeStore.js
import { create } from "zustand";
import { nanoid } from "nanoid";

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],
  favorites: [],
  recommendations: [],

  // Add recipe
  addRecipe: (recipe) =>
    set((state) => {
      const newRecipe = { ...recipe, id: nanoid() };
      const updated = [...state.recipes, newRecipe];
      return {
        recipes: updated,
        filteredRecipes: filterRecipes(updated, state.searchTerm),
      };
    }),

  // Update recipe
  updateRecipe: (id, updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedRecipe } : r
      );
      return {
        recipes: updated,
        filteredRecipes: filterRecipes(updated, state.searchTerm),
      };
    }),

  // Delete recipe
  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updated,
        filteredRecipes: filterRecipes(updated, state.searchTerm),
        favorites: state.favorites.filter((favId) => favId !== id),
      };
    }),

  // Set recipes directly
  setRecipes: (newRecipes) =>
    set((state) => ({
      recipes: newRecipes,
      filteredRecipes: filterRecipes(newRecipes, state.searchTerm),
    })),

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

  // Generate recommendations
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));

// Helper function
const filterRecipes = (recipes, term) =>
  recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(term.toLowerCase())
  );

