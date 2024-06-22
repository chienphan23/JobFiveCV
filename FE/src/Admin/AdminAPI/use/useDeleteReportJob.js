import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiDeletereportJob } from "../apiDeletereportJob";

const useDeleteReportJob = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: deleteReportJob, isLoading } = useMutation({
    mutationFn: (reportId) => apiDeletereportJob(reportId),
    onSuccess: (result) => {
      console.log(result)
      toast.success("Xóa báo cáo bài viết thành công");
      queryClient.invalidateQueries({
        queryKey: ["report"],
      });
      return result;
    },
    onError: (err) =>
      toast.error("Xóa báo cáo bài viết thất bại đã có lỗi xảy ra."),
  });
  return { deleteReportJob, isLoading };
};
export { useDeleteReportJob };
