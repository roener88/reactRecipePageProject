import {
  Stack,
  Card,
  AspectRatio,
  Image,
  Heading,
  Divider,
} from "@chakra-ui/react";

// Components
import { LabelList } from "./LabelList";

// Utils
import { colors } from "../../utils/colors.js";

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

  const matchedHealthLabels = healthLabels.filter((healthLabel) => {
    if (healthLabel.includes("Vegan") || healthLabel.includes("Vegetarian")) {
      return healthLabel;
    }
  });

  return (
    <>
      <Card onClick={() => clickFn(recipe)} w='32%' p='10' bg='#F5EFE6'>
        <Stack>
          <AspectRatio maxW='full' ratio={4 / 3}>
            <Image src={image} borderRadius={10} />
          </AspectRatio>
          <Heading size='lg' color={colors[0]}>
            {label}
          </Heading>
          <Divider borderColor={colors[1]} />
          <Heading size='md' color={colors[1]}>
            {mealType}
          </Heading>
          <Divider borderColor={colors[1]} />
          <Heading size='md' color={colors[1]}>
            {dishType}
          </Heading>
          {dietLabels.length > 0 && (
            <LabelList
              labels={dietLabels}
              title='Diet Labels:'
              color='blue.200'
            />
          )}
          {cautions.length > 0 && (
            <LabelList labels={cautions} title='Cautions:' color='red.200' />
          )}
          {matchedHealthLabels.length > 0 && (
            <LabelList
              labels={matchedHealthLabels}
              title='Health Labels:'
              color='green.200'
            />
          )}
        </Stack>
      </Card>
    </>
  );
};
