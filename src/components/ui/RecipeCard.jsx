import {
  Stack,
  Card,
  AspectRatio,
  Image,
  Heading,
  Text,
  Divider,
  Flex,
  background,
} from "@chakra-ui/react";

// Components
import { Tag } from "./Tag";

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
    (dietLabel, index) =>
      dietLabel && <Tag key={index} text={dietLabel} color='blue.200' />
  );

  const cautionLabelComponents = cautions.map(
    (cautions, index) =>
      cautions && <Tag key={index} text={cautions} color='red.200' />
  );

  const heatlhLabelComponents = healthLabels.map(
    (healthLabel, index) =>
      (healthLabel.includes("Vegan") || healthLabel.includes("Vegetarian")) && (
        <Tag key={index} text={healthLabel} color='green.200' />
      )
  );

  return (
    <>
      <Card onClick={() => clickFn(recipe)} w='32%' p='10' bg='white'>
        <Stack>
          <AspectRatio maxW='full' ratio={4 / 3}>
            <Image src={image} borderRadius={10} />
          </AspectRatio>
          <Heading size='lg' color='gray.900'>
            {label}
          </Heading>
          <Divider />
          <Heading size='md' color='green.800'>
            {mealType}
          </Heading>
          <Divider />
          <Heading size='md' color='green.800'>
            {dishType}
          </Heading>
          {dietLabels.length > 0 && (
            <>
              <Divider />
              <Text fontWeight='bold' color='gray.500'>
                Diet Labels:
              </Text>
              <Flex flexWrap='wrap' flexDirection='row' gap={2}>
                {dietLabelComponents}
              </Flex>
            </>
          )}
          {cautions.length > 0 && (
            <>
              <Divider />
              <Text fontWeight='bold' color='gray.500'>
                Caution Labels:
              </Text>
              <Flex flexWrap='wrap' flexDirection='row' gap={2}>
                {cautionLabelComponents}
              </Flex>
            </>
          )}
          {(healthLabels.includes("Vegan") ||
            healthLabels.includes("Vegetarian")) && (
            <>
              <Divider />
              <Text fontWeight='bold' color='gray.500'>
                Health Labels:
              </Text>
              <Flex flexWrap='wrap' flexDirection='row' gap={2}>
                {heatlhLabelComponents}
              </Flex>
            </>
          )}
        </Stack>
      </Card>
    </>
  );
};
