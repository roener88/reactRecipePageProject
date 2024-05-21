// React
import { useState } from "react";

// Chakra UI
import { Container, Flex, VStack, Heading } from "@chakra-ui/react";

// Components
import { RecipeCard } from "../components/ui/RecipeCard.jsx";
import { TextInput } from "../components/ui/TextInput.jsx";

// Utils
import { colors } from "../utils/colors.js";

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
          <Heading py='10' size='4xl' color={colors[0]}>
            Recipe List Page
          </Heading>

          <TextInput
            changeFn={textInputChange}
            maxW='50%'
            placeholder='Search for Recipes.'
            borderColor={colors[0]}
            color={colors[0]}
            focusBorderColor={colors[1]}
            _hover={{
              bordercolor: "inherit",
            }}
            _placeholder={{ opacity: 0.4, color: "inherit" }}
          />

          <Flex
            flexWrap='wrap'
            flexDirection={{ base: "column", lg: "row" }}
            justifyContent='center'
            gap='5'
            // w='100%'
            py='10'
          >
            {recipeItems}
          </Flex>
        </VStack>
      </Container>
    </>
  );
};
