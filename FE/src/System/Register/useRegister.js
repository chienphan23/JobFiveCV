import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import apiGetMyIn4 from "../../API/apiGetMyIn4";
import { apiRegister } from "./apiRegister";
import toast from "react-hot-toast";

export const useRegister =  () => {
    const [cookies, setCookie] = useCookies(['jwtToken']);
    const queryClient = useQueryClient()
    const navigate = useNavigate();
    const {mutateAsync: registerMutate, isLoading, error} = useMutation({
        mutationFn: async ({formData, formData2, email}) => await apiRegister(formData, formData2, email),
        onSuccess: async (result) => {

            // eslint-disable-next-line no-cond-assign
            toast.success("Đăng ký tài khoản thành công.")
            if(result?.status === 200){
                const newUser = await apiGetMyIn4()
              }
            if(result.data.role === "admin"){
                navigate("/admin")
            }
            if(result.data.role === "employer"){
                toast.success("Bạn đã tạo tài khoản thành công, bạn có thể đăng tải bài viết khi đã được duyệt hồ sơ", {
                    duration: 10000
                })
                navigate("/home")
            }
            else{
                
                navigate("/home")
            }
            return result
        },
        onError: (e) => {
            return e;
        }
        
    })
    return {registerMutate, isLoading, error}
}