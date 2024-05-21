// React
import { useState } from "react";

// Data
import { data } from "./utils/data";

// Pages
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";

// Chakra UI
import { Box } from "@chakra-ui/react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  // Your state code here
  return (
    <>
      <Box bg='#E8DFCA'>
        {selectedRecipe ? (
          <RecipePage recipe={selectedRecipe} clickFn={setSelectedRecipe} />
        ) : (
          <RecipeListPage recipes={data.hits} clickFn={setSelectedRecipe} />
        )}
      </Box>
    </>
  );
};
