//Chakra
import { Center, Heading, Text } from "@chakra-ui/react";

//Components
import { Header } from "../components/ui/Header";

export const RecipePage = ({ recipe, clickFn }) => {
  const {
    label,
    image,
    dietLabels,
    cautions,
    mealType,
    dishType,
    healthLabels,
  } = recipe;

  return (
    <Center h='100vh' flexDir='column'>
      <Header selectedRecipe={recipe} clickFn={clickFn} />
      <Heading py={10}>{label}</Heading>
    </Center>
  );
};
