import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { apiUpdateJob } from "./apiUpdateJob"

const useUpdateJob = () => {
    // const queryClient = useQueryClient()
    const {mutateAsync: updateJob, isLoading} = useMutation({
        mutationFn: ({idJob,formdata, arrayDescription, arrayBenefit, arrayRequirement,arrayIndustryId}) => apiUpdateJob(idJob,formdata, arrayDescription, arrayBenefit, arrayRequirement,arrayIndustryId),
        onSuccess: (result) => {
            toast.success("Sửa tin tuyển dụng thành công")
            return result
            // queryClient.invalidateQueries({ // vô hiệu hoá bộ đệm để query lại (đồng bộ giao diện)
            //     queryKey: ["job"]
            // })
        },
        onError: (err) => toast.error("Sửa tin tuyển dụng thất bại đã có lỗi xảy ra.")
    })
    return {updateJob, isLoading}
}
export {useUpdateJob}