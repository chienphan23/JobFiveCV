import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiDeleteIndustry } from "../apiDeleteIndustry";

const useDeleteIndustry = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: deleteIndustry, isLoading } = useMutation({
    mutationFn: (industryId) => apiDeleteIndustry(industryId),
    onSuccess: (result) => {
      toast.success("Xoá ngành nghề thành công");
      queryClient.invalidateQueries({
        queryKey: ["industry"],
      });
      return result;
    },
    onError: (err) => toast.error("Xoá ngành nghề thất bại đã có lỗi xảy ra."),
  });
  return { deleteIndustry, isLoading };
};
export { useDeleteIndustry };
