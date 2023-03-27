import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "@/api";
import { longStaleTime } from "@/constants";
import { StandardQueryParams } from "@/api/types";

type UseMoviesResult<T> = {
  data: T | undefined;
  isLoading: boolean;
  error: unknown;
};
const useMovies = <T>(queryParams: StandardQueryParams): UseMoviesResult<T> => {
  const { data, isLoading, error } = useQuery(
    ["movies", queryParams],
    () => fetchMovies(queryParams),
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

export default useMovies;
