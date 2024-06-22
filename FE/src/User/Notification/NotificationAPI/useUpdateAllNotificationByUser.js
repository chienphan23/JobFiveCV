import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiUpdateAllNotificationByUser } from "./apiUpdateAllNotificationByUser";

export const useUpdateAllNotificationByUser = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: updateAllNotificationByUser, isLoadingUpdate } =
    useMutation({
      mutationFn: ({ id }) => {
        return apiUpdateAllNotificationByUser(id);
      },
      onSuccess: (result) => {
        // toast.success("Cập nhật trạng thái thành công!");
        if (result.status === 200) {
          queryClient.invalidateQueries({
            // vô hiệu hoá bộ đệm để query lại (đồng bộ giao diện)
            queryKey: ["listNotificationByUser"],
          });
        }
        return result;
      },
      onError: (err) => toast.error("Đã có lỗi xảy ra vui lòng thử lại sau."),
    });
  return { updateAllNotificationByUser, isLoadingUpdate };
};
