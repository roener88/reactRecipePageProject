import {
  Stack,
  Card,
  AspectRatio,
  Image,
  Heading,
  Text,
  Tag,
} from "@chakra-ui/react";

export const RecipeCard = ({ recipe, clickFn }) => {
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
    (healthLabel, index) =>
      (healthLabel.includes("Vegan") || healthLabel.includes("Vegetarian")) && (
        <Tag key={index}>{healthLabel}</Tag>
      )
  );

  return (
    <>
      <Card onClick={() => clickFn(recipe)} w='32%' p='10'>
        <Stack>
          <AspectRatio maxW='full' ratio={4 / 3}>
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
          {(healthLabels.includes("Vegan") ||
            healthLabels.includes("Vegetarian")) && (
            <Heading size='md'>Health Labels:</Heading>
          )}
          {heatlhLabelComponents}
        </Stack>
      </Card>
    </>
  );
};
