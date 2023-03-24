import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "@/api";
import { defaultStaleTime } from "@/constants";

const useUser = () => {
  const { data, isLoading } = useQuery(["user"], () => fetchUser(), {
    staleTime: defaultStaleTime,
  });
  return { data: data?.data, isLoading };
};

export default useUser;
