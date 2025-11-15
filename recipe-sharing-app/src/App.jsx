import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar'; // import the SearchBar component

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <SearchBar /> {/* Search input displayed above recipe list */}
                <RecipeList />
              </>
            }
          />
          <Route
            path="/recipe/:id"
            element={<RecipeDetailsWrapper />}
          />
        </Routes>
      </div>
    </Router>
  );
}

// Wrapper to extract route param
import { useParams } from 'react-router-dom';
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={id} />;
};

export default App;
