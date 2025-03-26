import { Box, Heading } from "@chakra-ui/react";
import React from "react";

interface DefinitionItemProps {
  term: string;
  children: React.ReactNode | React.ReactNode[];
}

const DefinitionItem = ({ term, children }: DefinitionItemProps) => {
  return (
    <Box marginY={5}>
      <Heading as="h6" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
