import { Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/GameTrailer";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error } = useGame(slug!);

  // console.log(slug);
  console.log(game);
  console.log(game?.id);

  if (error) return null;
  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandableText maxChars={300}>
        {game?.description_raw || ""}
      </ExpandableText>
      <GameAttributes game={game!} />
      <GameTrailer gameId={game?.id} />
    </>
  );
};

export default GameDetailPage;
