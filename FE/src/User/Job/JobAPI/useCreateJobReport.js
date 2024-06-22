import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiJobReport } from "./apiJobReport";

const useCreateJobReport = (jobId) => {
    const queryClient = useQueryClient();
    const { mutateAsync: createJobReport, isLoading } = useMutation({
        mutationFn: (formdata) => apiJobReport(formdata),
        onSuccess: (result) => {
            toast.success(
                "Bạn đã báo cáo việc làm thành công. Ban quản trị website sẽ xem xét"
            );
            queryClient.invalidateQueries({
                // vô hiệu hoá bộ đệm để query lại (đồng bộ giao diện)
                queryKey: ["report" + jobId],
            });
            return result;
        },
        onError: (err) => {
            toast.error("Báo cáo việc làm thất bại đã có lỗi xảy ra.");
        },
    });
    return { createJobReport, isLoading };
};
export { useCreateJobReport };
