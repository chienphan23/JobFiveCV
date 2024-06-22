import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiDeleteUser } from "../apiDeleteUser";

const useDeleteUser = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: deleteUser, isLoading } = useMutation({
    mutationFn: (userId) => apiDeleteUser(userId),
    onSuccess: (result) => {
      toast.success("Xoá người dùng thành công");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      return result;
    },
    onError: (err) => toast.error("Xoá người dùng thất bại đã có lỗi xảy ra."),
  });
  return { deleteUser, isLoading };
};
export { useDeleteUser };
