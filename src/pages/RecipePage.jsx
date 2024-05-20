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
  Button,
} from "@chakra-ui/react";

export const RecipePage = ({ recipe, clickFn }) => {
  const {
    label,
    image,
    dietLabels,
    cautions,
    mealType,
    dishType,
    healthLabels,
    ingredientLines,
    totalTime,
    yield: servings,
    totalNutrients,
  } = recipe;

  const { ENERC_KCAL, FAT, PROCNT, NA, CHOLE, CHOCDF } = totalNutrients;

  const dietLabelComponents = dietLabels.map(
    (dietLabel, index) => dietLabel && <Tag key={index}>{dietLabel}</Tag>
  );

  const cautionLabelComponents = cautions.map(
    (cautions, index) => cautions && <Tag key={index}>{cautions}</Tag>
  );

  const heatlhLabelComponents = healthLabels.map(
    (healthLabel, index) => healthLabel && <Tag key={index}>{healthLabel}</Tag>
  );

  const ingredientList = ingredientLines.map((ingredient, index) => (
    <Tag key={index}>{ingredient}</Tag>
  ));

  return (
    <Container maxW='container.xl' mx='auto' py={20}>
      <VStack>
        <Heading py='10' size='4xl' textAlign='center'>
          {label}
        </Heading>

        <Button my={10} onClick={() => clickFn()}>
          Back to overview
        </Button>

        <Stack w='container.lg'>
          <AspectRatio maxW='full' ratio={16 / 9}>
            <Image src={image} borderRadius={10} />
          </AspectRatio>
          <Heading size='md'>Meal:</Heading>
          <Text>{mealType}</Text>
          <Heading size='md'>Dish:</Heading>
          <Text>{dishType}</Text>
          {dietLabels.length > 0 && <Heading size='md'>Diet Labels:</Heading>}
          {dietLabelComponents}
          {cautions.length > 0 && <Heading size='md'>Caution Labels:</Heading>}
          {cautionLabelComponents}
          {healthLabels && <Heading size='md'>Health Labels:</Heading>}
          {heatlhLabelComponents}
          <Heading size='md'>Ingredients:</Heading>
          {ingredientList}
          <Heading size='md'>Total cooking time: {totalTime}</Heading>
          <Heading size='md'>Servings: {servings}</Heading>
          <Heading size='md'>Total Nutriens:</Heading>
          <Text>
            {ENERC_KCAL.label}: {Math.round(ENERC_KCAL.quantity)}
          </Text>
          <Text>
            {PROCNT.label}: {Math.round(PROCNT.quantity)}
          </Text>
          <Text>
            {FAT.label}: {Math.round(FAT.quantity)}
          </Text>
          <Text>
            {CHOCDF.label}: {Math.round(CHOCDF.quantity)}
          </Text>
          <Text>
            {CHOLE.label}: {Math.round(CHOLE.quantity)}
          </Text>
          <Text>
            {NA.label}: {Math.round(NA.quantity)}
          </Text>
        </Stack>
      </VStack>
    </Container>
  );
};
