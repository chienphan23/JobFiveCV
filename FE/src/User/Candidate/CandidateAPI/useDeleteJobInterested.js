import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiDeleteJobInterested } from "./apiDeleteJobInterested";

const useDeleteJobInterested = (jobId) => {
  const queryClient = useQueryClient();
  const { mutateAsync: deleteJobInterested, isLoading } = useMutation({
    mutationFn: (id) => apiDeleteJobInterested(id),
    onSuccess: (result) => {
      queryClient.invalidateQueries({
        // vô hiệu hoá bộ đệm để query lại (đồng bộ giao diện)
        queryKey: ["jobInterested"],
      });
      queryClient.invalidateQueries({
        // vô hiệu hoá bộ đệm để query lại (đồng bộ giao diện)
        queryKey: ["listSaved" + jobId],
      });
      toast.success("Bạn đã hủy theo dõi một công việc");
      return result;
    },
    onError: (error) => toast.error("Sai chi roi"),
  });
  return { deleteJobInterested, isLoading };
};
export { useDeleteJobInterested };
