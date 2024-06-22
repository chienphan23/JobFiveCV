import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiDeleteNotification } from "./apiDeleteNotification";

export const useDeleteNotification = () => {
    const queryClient = useQueryClient();
    const { mutateAsync: deleteNotification, isLoading } = useMutation({
        mutationFn: ({ id }) => {
            console.log(id);
            return apiDeleteNotification(id);
        },
        onSuccess: (result) => {
            // toast.success("Cập nhật trạng thái thành công!");
            console.log(result);
            if (result.status === 200) {
                console.log("alo");
                queryClient.invalidateQueries({
                    // vô hiệu hoá bộ đệm để query lại (đồng bộ giao diện)
                    queryKey: ["listNotificationByUser"],
                });
            }
            return result;
        },
        onError: (err) => toast.error("Đã có lỗi xảy ra vui lòng thử lại sau."),
    });
    return { deleteNotification, isLoading };
};
