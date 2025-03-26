import useGameTrailers from "../hooks/useGameTrailers";

interface GameTrailerProps {
  gameId: number | undefined;
}

const GameTrailer = ({ gameId }: GameTrailerProps) => {
  const { data, isLoading, error } = useGameTrailers(gameId!);
  if (isLoading) return null;
  if (error) throw error;

  const first = data?.[0];
  //   console.log(first?.data[480]);
  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailer;
