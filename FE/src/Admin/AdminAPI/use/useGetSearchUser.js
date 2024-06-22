import { useQuery } from "@tanstack/react-query";
import { apiSearchUser } from "../System/Login/apiSearchUser";

export const useGetSearchUser = (userName) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["userName", userName],
    queryFn: async () => await apiSearchUser(userName),
  });
  return { data, isLoading, error };
};
