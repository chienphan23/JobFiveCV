import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiAcceptEmployer } from "../apiAcceptEmployer";

const useAcceptEmployer = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: AcceptEmployer, isLoading } = useMutation({
    mutationFn: async (userId) => await apiAcceptEmployer(userId),
    onSuccess: (result) => {
      toast.success("Xác nhận nhà tuyển dụng thành công");
      if (result) {
        queryClient.invalidateQueries({
          queryKey: ["employerApproved"],
        });
      }
      return result;
    },
    onError: (err) =>
      toast.error("Xác nhận nhà tuyển dụng thất bại đã có lỗi xảy ra."),
  });
  return { AcceptEmployer, isLoading };
};
export { useAcceptEmployer };
