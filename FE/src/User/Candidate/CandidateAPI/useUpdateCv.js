import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiUpdateCv } from "./apiUpdateCv";
import { useNavigate } from "react-router-dom";

const useUpdateCv = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { mutateAsync: updateCv, isLoading } = useMutation({
        mutationFn: ({ id, formData }) => apiUpdateCv(id, formData),
        onSuccess: (result) => {
            queryClient.invalidateQueries({ queryKey: ["cvs"] });
            toast.success("Bạn đã cập nhật file thành công");
            if (result) navigate("/manage-cv");
            return result;
        },
        onError: (error) => {
            if (error.status === 602) {
                toast.error(
                    "Cập nhật file thất bại, kích thước file không vượt quá 5MB"
                );
            } else {
                toast.error("Cập nhật file thất bại");
            }
        },
    });
    return { updateCv, isLoading };
};
export { useUpdateCv };
