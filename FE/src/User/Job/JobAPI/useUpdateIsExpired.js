import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiUpdateIsExpired } from "./apiUpdateIsExpired";
import { useNavigate } from "react-router-dom";

export const useUpdateIsExpired = () => {
  //   const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutateAsync: updateIsExpired, isLoadingUpdate } = useMutation({
    mutationFn: (id) => {
      return apiUpdateIsExpired(id);
    },
    onSuccess: (result) => {
      toast.success("Ngưng tuyển dụng thành công!");
      //   if (result.status === 200) {
      //     queryClient.invalidateQueries({
      //       // vô hiệu hoá bộ đệm để query lại (đồng bộ giao diện)
      //       queryKey: ["listNotificationByUser"],
      //     });
      //   }
      navigate("/manage-job");
      return result;
    },
    onError: (err) => toast.error("Đã có lỗi xảy ra vui lòng thử lại sau."),
  });
  return { updateIsExpired, isLoadingUpdate };
};
