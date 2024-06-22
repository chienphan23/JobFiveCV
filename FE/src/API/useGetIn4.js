import { useQuery } from "@tanstack/react-query";
import apiGetMyIn4 from "../API/apiGetMyIn4";

export const useGetIn4 = () => {
  
  let { data: user, isLoading, error } = useQuery({
    queryKey: ["userCurrent"],
    queryFn: async () => await apiGetMyIn4(),
  });
  
  return { user, isLoading, error };
};
