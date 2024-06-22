import { useMutation, useQueryClient } from "@tanstack/react-query"
import { apiJob } from "./apiJob"
import toast from "react-hot-toast"

const useCreateJob = () => {
    const queryClient = useQueryClient()
    const {mutateAsync: createJob, isLoading} = useMutation({
        mutationFn: ({formdata, arrayDescription, arrayBenefit, arrayRequirement,arrayIndustryId}) => apiJob(formdata, arrayDescription, arrayBenefit, arrayRequirement,arrayIndustryId),
        onSuccess: (result) => {
            toast.success("Tin tuyển dụng đã thêm thành công")
            return result
            // queryClient.invalidateQueries({ // vô hiệu hoá bộ đệm để query lại (đồng bộ giao diện)
            //     queryKey: ["job"]
            // })
        },
        onError: (err) => toast.error("Thêm tin tuyển dụng thất bại đã có lỗi xảy ra.")
    })
    return {createJob, isLoading}
}
export {useCreateJob}