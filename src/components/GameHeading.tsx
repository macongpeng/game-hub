import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatform();
  const heading = `${
    platforms?.find((p) => p.id === gameQuery.platformId)?.name || ""
  } ${genres?.find((g) => g.id === gameQuery.genreId)?.name || ""} ${
    gameQuery.searchText || ""
  }`;

  return (
    <Heading marginY="5" fontSize="5xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
