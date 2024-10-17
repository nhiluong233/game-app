import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import Genres from "./components/Genres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortedSelector from "./components/SortedSelector";
import "./App.css";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  ordering: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
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
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <Genres
            onSelect={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre?.id })
            }
            selectedGenre={gameQuery.genreId}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={10}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={2} marginTop={3}>
            <PlatformSelector
              selectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformId: platform.id })
              }
              selectedPlatformId={gameQuery.platformId}
            />
            <SortedSelector
              selectedHandler={(ordering) =>
                setGameQuery({ ...gameQuery, ordering })
              }
              selectedOrdering={gameQuery.ordering}
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
