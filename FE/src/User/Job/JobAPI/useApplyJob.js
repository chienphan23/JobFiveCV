import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiApplyJob } from "./apiApplyJob";

const useApplyJob = (jobId) => {
  const queryClient = useQueryClient();
  const { mutateAsync: applyCv, isLoading } = useMutation({
    mutationFn: (formdata) => apiApplyJob(formdata),
    onSuccess: (result) => {
      toast.success(
        "Bạn đã ứng tuyển thành công. Vui lòng đợi thông tin từ nhà tuyển dụng"
      );
      queryClient.invalidateQueries({
        // vô hiệu hoá bộ đệm để query lại (đồng bộ giao diện)
        queryKey: ["applicationCv" + jobId],
      });
      return result;
    },
    onError: (err) => {
      if (err.status === 602) {
        toast.error("Ứng tuyển thất bại, kích thước file không vượt quá 5MB");
      } else {
        toast.error("Ứng tuyển thất bại đã có lỗi xảy ra.");
      }
    },
  });
  return { applyCv, isLoading };
};
export { useApplyJob };
