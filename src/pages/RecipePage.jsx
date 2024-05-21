//Chakra
import {
  Stack,
  VStack,
  Container,
  Heading,
  AspectRatio,
  Image,
  Button,
  Text,
  HStack,
  Flex,
  Divider,
  Box,
} from "@chakra-ui/react";

// Components
import { LabelList } from "../components/ui/LabelList.jsx";
import { InfoList } from "../components/ui/InfoList.jsx";

// Utils
import { colors } from "../utils/colors.js";

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

  // Get the right nutrient objects
  const { ENERC_KCAL, FAT, PROCNT, NA, CHOLE, CHOCDF } = totalNutrients;

  // Store the nutrient objects in an Array
  const nutrients = [ENERC_KCAL, FAT, PROCNT, NA, CHOLE, CHOCDF];

  // Convert the nutrient objects in a workable string
  const nutrientInfo = nutrients.map((nutrient) => {
    return `${nutrient.label}: ${Math.round(nutrient.quantity)}`;
  });

  return (
    <Container maxW='container.xl' mx='auto' py={20}>
      <VStack>
        <VStack py={10}>
          <Heading
            maxW='20ch'
            paddingBottom={10}
            size='4xl'
            textAlign='left'
            color={colors[0]}
          >
            {label}
          </Heading>

          <Button onClick={() => clickFn()}>Back to overview</Button>
        </VStack>

        <Stack w='container.lg'>
          <AspectRatio maxW='full' ratio={16 / 9} mb={6}>
            <Image src={image} borderRadius={10} />
          </AspectRatio>

          <Flex flexDirection='row'>
            <Stack w='30%' paddingRight={10}>
              <Heading size='lg' color={colors[1]}>
                Total cooking time: {totalTime}
              </Heading>
              <Heading size='md' color={colors[1]}>
                Servings: {servings}
              </Heading>
              <Divider borderColor={colors[1]} />
              <HStack>
                <Text fontWeight='bold' color={colors[1]}>
                  {mealType}
                </Text>
                <Text fontWeight='bold' color={colors[1]}>
                  {dishType}
                </Text>
              </HStack>
            </Stack>

            <Stack w='70%' p={10} bg={colors[3]} borderRadius={10}>
              <Box pb={5}>
                <InfoList
                  listHeader='Ingredients:'
                  listItems={ingredientLines}
                />
              </Box>
              <Box pb={5}>
                <InfoList
                  listHeader='Total Nutriens:'
                  listItems={nutrientInfo}
                />
              </Box>
              {cautions.length > 0 && (
                <Box pb={5}>
                  <LabelList
                    labels={cautions}
                    title='Cautions:'
                    color='red.200'
                  />
                </Box>
              )}

              {dietLabels.length > 0 && (
                <Box pb={5}>
                  <LabelList
                    labels={dietLabels}
                    title='Diet Labels:'
                    color='blue.200'
                  />
                </Box>
              )}

              {healthLabels.length > 0 && (
                <Box maxW='70%'>
                  <LabelList
                    labels={healthLabels}
                    title='Health Labels:'
                    color='green.200'
                  />
                </Box>
              )}
            </Stack>
          </Flex>
        </Stack>
      </VStack>
    </Container>
  );
};
