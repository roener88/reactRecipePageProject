import { Tag as CTag } from "@chakra-ui/react";

export const Tag = ({ text, color }) => {
  return (
    <CTag w='fit-content' bg={color}>
      {text}
    </CTag>
  );
};
