// React
import { useState } from "react";

// Data
import { data } from "./utils/data";

// Pages
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  // Your state code here
  return (
    <>
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} clickFn={setSelectedRecipe} />
      ) : (
        <RecipeListPage recipes={data.hits} clickFn={setSelectedRecipe} />
      )}
    </>
  );
};
