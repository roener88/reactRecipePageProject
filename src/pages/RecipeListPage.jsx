// Chakra UI
import { Container, Flex, VStack } from "@chakra-ui/react";

// Components
import { RecipeCard } from "../components/ui/RecipeCard.jsx";
import { Header } from "../components/ui/Header.jsx";

export const RecipeListPage = ({ recipes, clickFn }) => {
  const recipeItems = recipes.map(({ recipe }) => (
    <RecipeCard key={recipe.label} recipe={recipe} clickFn={clickFn} />
  ));

  return (
    <>
      <Container maxW='container.xl' mx='auto' py={20}>
        <VStack>
          <Header selectedRecipe={false} clickFn={clickFn} />

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
