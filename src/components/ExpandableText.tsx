import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 300 }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (children.length <= maxChars) return <Text>{children}</Text>;

  const text = expanded ? children : children.substring(0, maxChars) + "...";

  return (
    <Text>
      {text}
      <Button
        size="xs"
        marginLeft={2}
        onClick={() => setExpanded(!expanded)}
        colorScheme="yellow"
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
