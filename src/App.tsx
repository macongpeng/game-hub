import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sort: string | null;
  searchText: string;
  pageSize: number;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    sort: null,
    searchText: "",
    pageSize: 6,
  });

  // Keep track of selected genre and platform for UI display purposes
  const [selectedGenreId, setSelectedGenreId] = useState<number | null>(null);
  const [selectedPlatformId, setSelectedPlatformId] = useState<number | null>(
    null
  );

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX="5">
            <GenreList
              selectedGenreId={selectedGenreId}
              onSelectGenre={(genre) => {
                setSelectedGenreId(genre.id);
                setGameQuery({
                  ...gameQuery,
                  genreId: genre?.id,
                });
              }}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} />
            <HStack spacing={5} marginBottom={5}>
              <PlatformSelector
                selectedPlatformId={selectedPlatformId}
                onSelectPlatform={(platform) => {
                  setSelectedPlatformId(platform.id);
                  setGameQuery({
                    ...gameQuery,
                    platformId: platform?.id,
                  });
                }}
              />
              <SortSelector
                selectedSort={gameQuery.sort}
                onSelectedSort={(sort) => setGameQuery({ ...gameQuery, sort })}
              />
            </HStack>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
