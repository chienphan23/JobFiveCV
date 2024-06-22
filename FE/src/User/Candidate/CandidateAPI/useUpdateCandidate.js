import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiUpdateCandidate } from "./apiUpdateCandidate";
import toast from "react-hot-toast";

const useUpdateCandidate = () => {
    const queryClient = useQueryClient();
    const { mutateAsync: updateCandidate, isLoading } = useMutation({
        mutationFn: ({ id, formData }) => apiUpdateCandidate(id, formData),
        onSuccess: (result) => {
            toast.success("Bạn đã chỉnh sửa thông tin thành công");
            queryClient.invalidateQueries({
                // vô hiệu hoá bộ đệm để query lại (đồng bộ giao diện)
                queryKey: ["userCurrent"],
            });
            return result;
        },
        onError: (error) => toast.error("Chỉnh sửa thông tin thất bại"),
    });
    return { updateCandidate, isLoading };
};
export { useUpdateCandidate };
