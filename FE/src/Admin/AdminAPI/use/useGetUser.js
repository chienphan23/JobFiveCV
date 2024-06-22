import { useQuery } from "@tanstack/react-query";
import apiGetUser from "../apiGetUser";

export const useGetUser = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: async () => await apiGetUser(),
  });
  return { data, isLoading, error };
};
