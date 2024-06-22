import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiUpdateApplicationStatus } from "./apiUpdateApplicationSatus";
import { apiGetJob } from "../../Job/JobAPI/apiGetJob";
import { apiCreateNotification } from "../../Notification/NotificationAPI/apiCreateNotification";
import { formatDate } from "../../../Utils/formatDateTime";

export const useUpdateApplicationStatus = () => {
    const queryClient = useQueryClient();
    const { mutateAsync: updateApplicationStatus, isLoadingUpdate } =
        useMutation({
            mutationFn: ({ id, formData }) =>
                apiUpdateApplicationStatus(id, formData),
            onSuccess: async (result) => {
                toast.success("Cập nhật trạng thái thành công!");
                console.log(result);
                if (result.status === 200) {
                    console.log("alo");
                    queryClient.invalidateQueries({
                        // vô hiệu hoá bộ đệm để query lại (đồng bộ giao diện)
                        queryKey: ["ApplicationByJob" + result?.data.jobId],
                    });
                    //Notification do work
                    const job = await apiGetJob(result?.data?.jobId);
                    console.log(job);
                    const formData = new FormData();
                    formData.append("userId", result?.data?.candidateId);
                    formData.append(
                        "message",
                        `Công việc ${job?.data?.jobName} bạn ứng tuyển ${
                            result?.data?.status === 2
                                ? "đã được duyệt"
                                : "bị từ chối"
                        } bởi nhà tuyển dụng`
                    );
                    formData.append("postDate", formatDate(new Date()));
                    formData.append("seen", 0);
                    console.log(formData.get("message"));
                    await apiCreateNotification(formData);
                }
                return result;
            },
            onError: (err) =>
                toast.error("Cập nhật trạng thái thất bại đã có lỗi xảy ra."),
        });
    return { updateApplicationStatus, isLoadingUpdate };
};
