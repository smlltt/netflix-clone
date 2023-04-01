import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToFavorites } from "@/api";

const useAddMovieToFavs = () => {
  const queryClient = useQueryClient();
  const { mutate: add, isLoading: beingAdded } = useMutation({
    mutationFn: (movieId: string) => addToFavorites(movieId),
    onSettled: () => {
      queryClient.invalidateQueries(["favorites"]);
      queryClient.invalidateQueries(["user"]);
    },
  });
  return {
    add,
    beingAdded,
  };
};

export default useAddMovieToFavs;
