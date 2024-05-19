import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...style }) => {
  return <Input onChange={changeFn} {...style}></Input>;
};
