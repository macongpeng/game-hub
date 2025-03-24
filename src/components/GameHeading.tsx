import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import useLookupEntity from "../hooks/useLookupEntity";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "./stateManagement/gameQueryState";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const searchText = useGameQueryStore((s) => s.gameQuery.searchText);
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatform();

  const genre = useLookupEntity(genres, genreId);
  const platform = useLookupEntity(platforms, platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} ${
    searchText || ""
  }`;

  return (
    <Heading marginY="5" fontSize="5xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
