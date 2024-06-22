import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { apiLogin } from "./apiLogin";
import apiGetMyIn4 from "../../API/apiGetMyIn4";
import Cookies from "js-cookie";
import { apiPostLogOut } from "./apiLogout";

export const useLogout =  () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate();
    const {mutateAsync: logoutMutate, isLoading, error} = useMutation({
        mutationFn: async () => {
            
                 await apiPostLogOut()
                 queryClient.invalidateQueries({
                    queryKey: ["userCurrent"],
                });
                //  navigate("/login")
            },
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: ["userCurrent"],
                });
                console.log("alo")
                navigate("/login")
            },
        
        onError: (e) => {
            return e;
        }
        
    })
    return {logoutMutate, isLoading, error}
}