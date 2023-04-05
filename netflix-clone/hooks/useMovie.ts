import { useQuery } from "@tanstack/react-query";
import { fetchMovie } from "@/api";
import { longStaleTime } from "@/constants";
import { Movie } from "@/api/types";

type UseMovieResult = {
  data: Movie | undefined;
  isLoading: boolean;
  error: unknown;
};
const useMovie = (movieId: string): UseMovieResult => {
  const { data, isLoading, error } = useQuery(
    ["movie", movieId],
    () => fetchMovie(movieId),
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

export default useMovie;
