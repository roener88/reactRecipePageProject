import { Tag as CTag } from "@chakra-ui/react";

import { colors } from "../../utils/colors";

export const Tag = ({ text, color }) => {
  return (
    <CTag w='fit-content' bg={color} color={colors[0]}>
      {text}
    </CTag>
  );
};
