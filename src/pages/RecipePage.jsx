//Chakra
import {
  Stack,
  VStack,
  Container,
  Heading,
  AspectRatio,
  Image,
  Text,
  Tag,
} from "@chakra-ui/react";

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

  const dietLabelComponents = dietLabels.map(
    (dietLabel, index) => dietLabel && <Tag key={index}>{dietLabel}</Tag>
  );

  const cautionLabelComponents = cautions.map(
    (cautions, index) => cautions && <Tag key={index}>{cautions}</Tag>
  );

  const heatlhLabelComponents = healthLabels.map(
    (healthLabel, index) => healthLabel && <Tag key={index}>{healthLabel}</Tag>
  );

  return (
    <Container maxW='container.xl' mx='auto' py={20}>
      <VStack>
        <Header selectedRecipe={recipe} clickFn={clickFn} py={20} />

        <Stack>
          <AspectRatio maxW='full' ratio={16 / 9}>
            <Image src={image} borderRadius={10} />
          </AspectRatio>
          <Heading size='lg'>{label}</Heading>
          <Heading size='md'>Meal Type:</Heading>
          <Text>{mealType}</Text>
          <Heading size='md'>Dish Type:</Heading>
          <Text>{dishType}</Text>
          {dietLabels.length > 0 && <Heading size='md'>Diet Labels:</Heading>}
          {dietLabelComponents}
          {cautions.length > 0 && <Heading size='md'>Caution Labels:</Heading>}
          {cautionLabelComponents}
          {healthLabels && <Heading size='md'>Health Labels:</Heading>}
          {heatlhLabelComponents}
        </Stack>
      </VStack>
    </Container>
  );
};
