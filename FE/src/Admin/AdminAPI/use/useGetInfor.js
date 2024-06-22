import { useQuery } from "@tanstack/react-query";
import { apiGetInfor } from "../System/Login/apiGetInfor";

export const useGetInfor = (userId, userRole) => {
  const {
    data: infor,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["infor", userId, userRole],
    queryFn: async () => await apiGetInfor(userId, userRole),
  });
  return { infor, isLoading, error };
};
