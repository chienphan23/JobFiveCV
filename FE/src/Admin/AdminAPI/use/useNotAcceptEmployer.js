import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiNotAcceptEmployer } from "../apiNotAcceptEmployer";

const useNotAcceptEmployer = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: NotAcceptEmployer, isLoading } = useMutation({
    mutationFn: (userId) => apiNotAcceptEmployer(userId),
    onSuccess: (result) => {
      toast.success("Từ chối nhà tuyển dụng thành công");
      queryClient.invalidateQueries({
        queryKey: ["employerApproved"],
      });
      return result;
    },
    onError: (err) =>
      toast.error("Từ chối tuyển dụng thất bại đã có lỗi xảy ra."),
  });
  return { NotAcceptEmployer, isLoading };
};
export { useNotAcceptEmployer };
