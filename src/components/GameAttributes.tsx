import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface GameAttributesProps {
  game: Game;
}

const GameAttributes = ({ game }: GameAttributesProps) => {
  return (
    <SimpleGrid columns={2} spacing={5} as="dl">
      <DefinitionItem term="Platforms">
        {game?.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={game?.metacritic || 0} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game?.genres?.map(({ name }) => (
          <Text key={name}>{name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game?.publishers?.map(({ name }) => (
          <Text key={name}>{name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
