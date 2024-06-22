import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiDeleteJob } from "./apiDeleteJob";
import { useNavigate } from "react-router-dom";

export const useDeleteJob = () => {
  //   const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutateAsync: deleteJob, isLoadingUpdate } = useMutation({
    mutationFn: (id) => {
      return apiDeleteJob(id);
    },
    onSuccess: (result) => {
      toast.success("Xóa tin thành công!");
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
  return { deleteJob, isLoadingUpdate };
};
