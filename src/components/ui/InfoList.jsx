// Chakra UI
import { Heading, List, ListItem } from "@chakra-ui/react";

// Utils
import { colors } from "../../utils/colors";

export const InfoList = ({ listHeader, listItems }) => {
  const listItemComponents = listItems.map((item, index) => (
    <ListItem key={index} color={colors[1]}>
      {item}
    </ListItem>
  ));

  return (
    <>
      <Heading size='md' color={colors[1]} pb={1}>
        {listHeader}
      </Heading>
      <List>{listItemComponents}</List>
    </>
  );
};
