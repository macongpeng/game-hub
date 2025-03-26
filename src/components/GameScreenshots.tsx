import { Image, SimpleGrid } from "@chakra-ui/react";
import useGameScreenshots from "../hooks/useGameScreenshots";

interface Props {
  gameId: number | undefined;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data } = useGameScreenshots(gameId!);
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        {data?.map((file) => (
          <Image key={file.id} src={file.image} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
