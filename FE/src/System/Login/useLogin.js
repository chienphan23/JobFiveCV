import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { apiLogin } from "./apiLogin";
import apiGetMyIn4 from "../../API/apiGetMyIn4";
import Cookies from "js-cookie";

export const useLogin =  () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate();
    const {mutateAsync: loginMutate, isLoading, error} = useMutation({
        mutationFn: async (formData) => {
                return await apiLogin(formData)},
        onSuccess: async (result) => {
            if(result && result.authenticated == true){
                const expirationDate = new Date();
                expirationDate.setHours(expirationDate.getHours() + 4);
                await Cookies.set('AUTH_TOKEN', result.token, {
                    expires: expirationDate,
                    path: '/'
                });
                queryClient.invalidateQueries({
                    queryKey: ["userCurrent"],
                });
                const user = await apiGetMyIn4()
                
                if(user.data.role && user.data.role === "admin"){
                    console.log("alo alo")
                    navigate("/admin/chart", {replace: true})
                }else{
                    queryClient.setQueryData(["user", user.user])
                    navigate("/home",{replace: true})
                }

            }
        },
        onError: (e) => {
            return e;
        }
        
    })
    return {loginMutate, isLoading, error}
}