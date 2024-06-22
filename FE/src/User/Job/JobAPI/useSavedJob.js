import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiSavedJob } from "./apiSavedJob";

const useSavedJob = (jobId) => {
  const queryClient = useQueryClient();
  const { mutateAsync: savedJob, isLoading } = useMutation({
    mutationFn: (formdata) => apiSavedJob(formdata),
    onSuccess: (result) => {
      toast.success("Bạn đã lưu tin thành công");
      queryClient.invalidateQueries({
        // vô hiệu hoá bộ đệm để query lại (đồng bộ giao diện)
        queryKey: ["listSaved" + jobId],
      });
      return result;
    },
    onError: (err) => {
      toast.error("Lưu tin thất bại đã có lỗi xảy ra.");
    },
  });
  return { savedJob, isLoading };
};
export { useSavedJob };
