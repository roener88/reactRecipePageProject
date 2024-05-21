// Chakra UI
import { Text, Flex } from "@chakra-ui/react";

// Components
import { Tag } from "./Tag";

// Utils
import { colors } from "../../utils/colors.js";

export const LabelList = ({ labels, title, color }) => {
  const labelComponents = labels.map((label, index) => (
    <Tag key={index} text={label} color={color} />
  ));

  return (
    <>
      <Text fontWeight='semibold' color={colors[1]} pb={2}>
        {title}
      </Text>
      <Flex flexWrap='wrap' flexDirection='row' gap={2}>
        {labelComponents}
      </Flex>
    </>
  );
};
