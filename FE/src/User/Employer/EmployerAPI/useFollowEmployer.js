import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiFollowEmployer } from "./apiFollowEmployer";

const useFollowEmployer = (id) => {
    console.log(id)
    const queryClient = useQueryClient();
    const { mutateAsync: followEmployer, isLoading } = useMutation({
        mutationFn: (formdata) => apiFollowEmployer(formdata),
        onSuccess: (result) => {
            toast.success("Bạn đã theo dõi công ty thành công");
            queryClient.invalidateQueries({
                // vô hiệu hoá bộ đệm để query lại (đồng bộ giao diện)
                queryKey: ["followCompany"],
            });
            queryClient.invalidateQueries({
                // vô hiệu hoá bộ đệm để query lại (đồng bộ giao diện)
                queryKey: ["getListFollowEmployer" + id],
            });
            return result;
        },
        onError: (err) => {
            toast.error("Theo dõi thất bại đã có lỗi xảy ra.");
        },
    });
    return { followEmployer, isLoading };
};
export { useFollowEmployer };
