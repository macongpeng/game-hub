import { Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error } = useGame(slug!);

  console.log(slug);

  if (error) return null;
  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandableText maxChars={300}>
        {game?.description_raw || ""}
      </ExpandableText>
    </>
  );
};

export default GameDetailPage;
