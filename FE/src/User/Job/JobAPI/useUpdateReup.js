import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiUpdateReup } from "./apiUpdateReup";
import { useNavigate } from "react-router-dom";

export const useUpdateReup = () => {
  //   const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutateAsync: updateReup, isLoadingUpdate } = useMutation({
    mutationFn: (id) => {
      return apiUpdateReup(id);
    },
    onSuccess: (result) => {
      toast.success("Đăng lại tin thành công!");
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
  return { updateReup, isLoadingUpdate };
};
