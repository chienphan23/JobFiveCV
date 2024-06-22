import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiCreateTimeLine } from "./apiCreateTimeLine";

const useCreateTimeLine = () => {
    const queryClient = useQueryClient();

    const { mutateAsync: createTimeLine, isLoading } = useMutation({
        mutationFn: (formdata) => apiCreateTimeLine(formdata),
        onSuccess: (result) => {
            queryClient.invalidateQueries({
                // vô hiệu hoá bộ đệm để query lại (đồng bộ giao diện)
                queryKey: ["timeLines"],
            });
            return result;
        },
        onError: (err) => {
            toast.error("Thêm công việc thất bại đã có lỗi xảy ra.");
        },
    });
    return { createTimeLine, isLoading };
};
export { useCreateTimeLine };
