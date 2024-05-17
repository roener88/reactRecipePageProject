// Chakra
import { Button, Heading, Input } from "@chakra-ui/react";

export const Header = ({ selectedRecipe, clickFn }) => {
  return (
    <>
      <Heading py='10' size='4xl'>
        Recipe List Page
      </Heading>

      {selectedRecipe ? (
        <Button onClick={() => clickFn()}>Back to overview</Button>
      ) : (
        <Input
          maxW='50%'
          placeholder='Search for Recipe names, Diet and/or Heatlh wishes.'
        />
      )}
    </>
  );
};
