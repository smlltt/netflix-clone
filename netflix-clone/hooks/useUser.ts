import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "@/service";
import { defaultStaleTime } from "@/constants";
import { User } from "@/service/types";

type UseUserResult = {
  data: User | undefined;
  isLoading: boolean;
};
const useUser = (): UseUserResult => {
  const { data, isLoading } = useQuery(["user"], () => fetchUser(), {
    staleTime: defaultStaleTime,
  });
  return { data: data?.data, isLoading };
};

export default useUser;
