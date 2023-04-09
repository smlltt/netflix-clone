import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFromFavorites } from "@/service";

const useDeleteMovieFromFavs = () => {
  const queryClient = useQueryClient();
  const { mutate: remove, isLoading: beingRemoved } = useMutation({
    mutationFn: (movieId: string) => deleteFromFavorites(movieId),
    onSuccess: () => {
      queryClient.invalidateQueries(["favorites"]);
      queryClient.invalidateQueries(["user"]);
    },
  });
  return {
    remove,
    beingRemoved,
  };
};

export default useDeleteMovieFromFavs;
