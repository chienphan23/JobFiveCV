import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiHideJob } from "../apihidenjob";

const useHideJob = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: hideJob, isLoading } = useMutation({
    mutationFn: ({ jobId, reportId, employerId }) =>
      apiHideJob(jobId, reportId, employerId),
    onSuccess: (result) => {
      toast.success("Ẩn bài viết thành công");
      queryClient.invalidateQueries({
        queryKey: ["report"],
      });
      return result;
    },
    onError: (err) => toast.error("Ẩn bài viết thất bại đã có lỗi xảy ra."),
  });
  return { hideJob, isLoading };
};

export { useHideJob };
