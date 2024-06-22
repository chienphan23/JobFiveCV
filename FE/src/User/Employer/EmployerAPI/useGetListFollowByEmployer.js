import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiGetListFollowByEmployer } from "./apiGetListFollowByEmployer";

export const useGetListFollowByEmployer = (id) => {
    const {
        data: getListFollowEmployer,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["getListFollowEmployer" + id],
        queryFn: () => apiGetListFollowByEmployer(id),
    });
    // const { mutateAsync: getListFollowEmployer, isLoading } = useMutation({
    //     mutationFn: (id) => {
    //         console.log(id);
    //         return apiGetListFollowByEmployer(id);
    //     },
    //     onSuccess: (result) => {
    //         // toast.success("Bạn đã theo dõi công ty thành công");
    //         // queryClient.invalidateQueries({
    //         //     // vô hiệu hoá bộ đệm để query lại (đồng bộ giao diện)
    //         //     queryKey: ["followCompany"],
    //         // });
    //         return result;
    //     },
    //     onError: (err) => {
    //         // toast.error("Theo dõi thất bại đã có lỗi xảy ra.");
    //     },
    // });
    return { getListFollowEmployer, isLoading };
};
