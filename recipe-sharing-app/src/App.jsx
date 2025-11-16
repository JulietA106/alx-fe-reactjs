import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { useRecipeStore } from "./stores/recipeStore";  // fixed path
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import AddRecipeForm from "./components/AddRecipeForm";
import FavoritesList from "./components/FavoritesList";
import ErrorBoundary from "./components/ErrorBoundary";
import RecommendationsList from "./components/RecommendationsList";

function App() {
  const recipes = useRecipeStore((state) => state.recipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  const displayedRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>Recipe Sharing App 🍲</h1>

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h2>Add a New Recipe</h2>
                <AddRecipeForm />

                <h2>Search Recipes</h2>
                <SearchBar />

                <h2>All Recipes</h2>
                {displayedRecipes.length === 0 ? (
                  <p>No recipes found.</p>
                ) : (
                  displayedRecipes.map((recipe) => (
                    <div key={recipe.id} style={{ marginBottom: "10px" }}>
                      <h3>{recipe.title}</h3>
                      <p>{recipe.description}</p>

                      <Link to={`/recipes/${recipe.id}`}>View Details</Link>
                    </div>
                  ))
                )}

                <h2>My Favorites</h2>
                <ErrorBoundary>
                  <FavoritesList />
                </ErrorBoundary>

                <h2>Recommended Recipes</h2>
                <RecommendationsList />
              </div>
            }
          />

          <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={id} />;
};

export default App;
