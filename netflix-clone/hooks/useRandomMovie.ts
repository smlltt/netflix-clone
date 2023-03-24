import { useQuery } from "@tanstack/react-query";
import { fetchRandomMovie } from "@/api";
import { longStaleTime } from "@/constants";

const useRandomMovie = () => {
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
