// React
import { useState } from "react";

// Chakra UI
import { Container, Flex, VStack, Heading } from "@chakra-ui/react";

// Components
import { RecipeCard } from "../components/ui/RecipeCard.jsx";
import { TextInput } from "../components/ui/TextInput.jsx";

export const RecipeListPage = ({ recipes, clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const matchedRecipes = recipes.filter(({ recipe }) => {
    if (recipe.label.toLowerCase().includes(searchField.toLocaleLowerCase())) {
      return recipe;
    }
  });

  const textInputChange = (event) => setSearchField(event.target.value);

  const recipeItems = matchedRecipes.map(({ recipe }) => (
    <RecipeCard key={recipe.label} recipe={recipe} clickFn={clickFn} />
  ));

  return (
    <>
      <Container maxW='container.xl' mx='auto' py={20}>
        <VStack>
          <Heading py='10' size='4xl' color='green.900'>
            Recipe List Page
          </Heading>

          <TextInput
            changeFn={textInputChange}
            maxW='50%'
            placeholder='Search for Recipes.'
          />

          <Flex
            flexWrap='wrap'
            // justifyContent='space-between'
            gap='5 '
            w='100%'
            py='10'
          >
            {recipeItems}
          </Flex>
        </VStack>
      </Container>
    </>
  );
};
