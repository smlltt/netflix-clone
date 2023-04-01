import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "@/api";
import { longStaleTime } from "@/constants";
import { Movie, StandardQueryParams } from "@/api/types";

type UseMoviesResult = {
  data: Movie[] | undefined;
  totalCount: number;
  isLoading: boolean;
  error: unknown;
};
const useMovies = (queryParams: StandardQueryParams): UseMoviesResult => {
  const { data, isLoading, error } = useQuery(
    ["movies", queryParams],
    () => fetchMovies(queryParams),
    {
      staleTime: longStaleTime,
    }
  );
  return {
    data: data?.data.movies,
    totalCount: data?.data.totalCount,
    isLoading,
    error,
  };
};

export default useMovies;
