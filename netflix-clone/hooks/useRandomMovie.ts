import { useQuery } from "@tanstack/react-query";
import { fetchRandomMovie } from "@/api";
import { longStaleTime } from "@/constants";
import { Movie } from "@/api/types";

type UseRandomMovieResult = {
  data: Movie | undefined;
  isLoading: boolean;
  error: unknown;
};
const useRandomMovie = (): UseRandomMovieResult => {
  const { data, isLoading, error } = useQuery(
    ["randomMovie"],
    () => fetchRandomMovie(),
    {
      staleTime: longStaleTime,
    }
  );
  return {
    data: data?.data,
    isLoading,
    error,
  };
};

export default useRandomMovie;
