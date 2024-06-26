import {
  Stack,
  Card,
  AspectRatio,
  Image,
  Heading,
  Divider,
  Box,
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
      <Card
        onClick={() => clickFn(recipe)}
        w={{ base: "100%", md: "60%", lg: "32%" }}
        p='10'
        bg='#F5EFE6'
        mx='auto'
      >
        <Stack>
          <AspectRatio maxW='full' ratio={4 / 3}>
            <Image src={image} borderRadius={10} />
          </AspectRatio>
          <Heading size='lg' color={colors[0]} py={2}>
            {label}
          </Heading>
          <Divider borderColor={colors[1]} />
          <Heading size='md' color={colors[1]}>
            {mealType}
          </Heading>
          <Heading size='md' color={colors[1]}>
            {dishType}
          </Heading>
          <Divider borderColor={colors[1]} />
          {dietLabels.length > 0 && (
            <>
              <Box py={1}>
                <LabelList
                  labels={dietLabels}
                  title='Diet Labels:'
                  color='blue.200'
                />
              </Box>
            </>
          )}

          {cautions.length > 0 && (
            <>
              <Box py={1}>
                <LabelList
                  labels={cautions}
                  title='Cautions:'
                  color='red.200'
                />
              </Box>
            </>
          )}
          {matchedHealthLabels.length > 0 && (
            <>
              <Box py={1}>
                <LabelList
                  labels={matchedHealthLabels}
                  title='Health Labels:'
                  color='green.200'
                />
              </Box>
            </>
          )}
        </Stack>
      </Card>
    </>
  );
};
