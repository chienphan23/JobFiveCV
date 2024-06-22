import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiChangePassword } from "./apiChangePassword";
import { useNavigate } from "react-router-dom";
import { apiPostLogOut } from "../../Login/apiLogout";

export const useChangePassword = () => {
    const navigate = useNavigate();
    const {
        mutateAsync: changePassword,
        isLoading,
        error,
    } = useMutation({
        mutationFn: ({ id, formData }) =>  apiChangePassword(id, formData)
        ,
        onSuccess: async (result) => {
            toast.success("Đổi mật khẩu thành công! Vui lòng đăng nhập lại");
            console.log(result);
            if (result.status === 200) {
                console.log("alo");
                await apiPostLogOut();
                console.log("123")
                navigate("/login");
            }
            return result;
        },
        onError: (err) =>
            toast.error("Đổi mật khẩu thất bại đã có lỗi xảy ra."),
    });
    return { changePassword, isLoading, error };
};
