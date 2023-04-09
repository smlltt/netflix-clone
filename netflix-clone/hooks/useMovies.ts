import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "@/service";
import { longStaleTime } from "@/constants";
import { Movie, StandardQueryParams } from "@/service/types";

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
