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

// Components
import { LabelList } from "../components/ui/LabelList.jsx";

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

  const { ENERC_KCAL, FAT, PROCNT, NA, CHOLE, CHOCDF } = totalNutrients;

  const ingredientList = ingredientLines.map((ingredient, index) => (
    <Tag key={index}>{ingredient}</Tag>
  ));

  return (
    <Container maxW='container.xl' mx='auto' py={20}>
      <VStack>
        <Heading py='10' size='4xl' textAlign='center' color={colors[0]}>
          {label}
        </Heading>

        <Button my={10} onClick={() => clickFn()}>
          Back to overview
        </Button>

        <Stack w='container.lg'>
          <AspectRatio maxW='full' ratio={16 / 9}>
            <Image src={image} borderRadius={10} />
          </AspectRatio>

          <Heading size='lg' color={colors[1]}>
            {mealType}
          </Heading>
          <Heading size='lg' color={colors[1]}>
            {dishType}
          </Heading>

          {cautions.length > 0 && (
            <LabelList labels={cautions} title='Cautions:' color='red.200' />
          )}

          <Heading size='lg' color={colors[1]}>
            Total cooking time: {totalTime}
          </Heading>
          <Heading size='lg' color={colors[1]}>
            Servings: {servings}
          </Heading>

          <Heading size='md'>Ingredients:</Heading>
          {ingredientList}

          {dietLabels.length > 0 && (
            <LabelList
              labels={dietLabels}
              title='Diet Labels:'
              color='blue.200'
            />
          )}

          {healthLabels.length > 0 && (
            <LabelList
              labels={healthLabels}
              title='Health Labels:'
              color='green.200'
            />
          )}

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
