import { useQuery } from "@tanstack/react-query";
import { apiGetUserID } from "../System/Login/apiGetUserID";

export const useGetUserID = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: async () => await apiGetUserID(),
  });
  return { data, isLoading, error };
};
