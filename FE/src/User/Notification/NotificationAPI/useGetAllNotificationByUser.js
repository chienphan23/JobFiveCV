import { useQuery } from "@tanstack/react-query";
import { apiGetAllNotificationByUser } from "./apiGetAllNotificationByUser";

export const useGetAllNotificationByUser = (id) => {
  
  const {
    data: listNotification,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["listNotificationByUser"],
    queryFn: () => apiGetAllNotificationByUser(id),
  });

  return { listNotification, isLoading, error };
};
