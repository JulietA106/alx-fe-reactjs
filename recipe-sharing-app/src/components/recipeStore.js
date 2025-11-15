import { create } from "zustand";
import { nanoid } from "nanoid";

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  // Add a new recipe
  addRecipe: (recipe) =>
    set((state) => {
      const newRecipe = { ...recipe, id: nanoid() };
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: filterRecipes(updatedRecipes, state.searchTerm)
      };
    }),

  // Update an existing recipe
  updateRecipe: (id, updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: filterRecipes(updatedRecipes, state.searchTerm)
      };
    }),

  // Delete a recipe
  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
      return {
        recipes: updatedRecipes,
        filteredRecipes: filterRecipes(updatedRecipes, state.searchTerm)
      };
    }),

  // Set the search term
  setSearchTerm: (term) => set((state) => ({
    searchTerm: term,
    filteredRecipes: filterRecipes(state.recipes, term)
  })),
}));

// Helper function for filtering
const filterRecipes = (recipes, term) =>
  recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(term.toLowerCase())
  );
