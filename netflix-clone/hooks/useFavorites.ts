import { useQuery } from "@tanstack/react-query";
import { fetchFavorites } from "@/service";
import { longStaleTime } from "@/constants";
import { Movie, StandardQueryParams } from "@/service/types";

type UseFavoritesResult = {
  data: Movie[] | undefined;
  totalCount: number;
  isLoading: boolean;
  error: unknown;
};
const useFavorites = (queryParams: StandardQueryParams): UseFavoritesResult => {
  const { data, isLoading, error } = useQuery(
    ["favorites", queryParams],
    () => fetchFavorites(queryParams),
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

export default useFavorites;
