import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiBlockUser } from "../apiBlockUser";

const useBlockUser = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: blockUser, isLoading } = useMutation({
    mutationFn: (userId) => apiBlockUser(userId),
    onSuccess: (result) => {
      toast.success("Thay đổi trạng thái người dùng thành công");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      return result;
    },
    onError: (err) =>
      toast.error("Thay đổi trạng thái người dùng thất bại đã có lỗi xảy ra."),
  });
  return { blockUser, isLoading };
};
export { useBlockUser };
