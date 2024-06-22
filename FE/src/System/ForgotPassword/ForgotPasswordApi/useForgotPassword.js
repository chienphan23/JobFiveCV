import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { apiForgotPassword } from "./apiForgotPassword"

const useForgotPassword =  () => {
    const queryClient = useQueryClient()
    const {mutateAsync: sendEmail, isLoading} = useMutation({
        mutationFn:  (email) =>  apiForgotPassword(email),
        onSuccess: (result) => {
            toast.success("Đã gửi tin nhắn vào email của bạn vui lòng kiểm tra email")
            
            return result
        },
        onError: (err) => toast.error("Đã có lỗi xảy ra vui lòng thử lại")
    })
    return {sendEmail, isLoading}
}
export {useForgotPassword}