import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useLookupEntity from "../hooks/useLookupEntity";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatform();

  const genre = useLookupEntity(genres, gameQuery.genreId);
  const platform = useLookupEntity(platforms, gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} ${
    gameQuery.searchText || ""
  }`;

  return (
    <Heading marginY="5" fontSize="5xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
