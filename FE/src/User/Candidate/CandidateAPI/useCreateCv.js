import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiCreateCv } from "./apiCreateCv";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const useCreateCv = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [path, setPath] = useState("");
    useEffect(() => {
        setPath(location.pathname);
    }, [location.pathname]);
    const { mutateAsync: createCv, isLoading } = useMutation({
        mutationFn: (formdata) => apiCreateCv(formdata),
        onSuccess: (result) => {
            toast.success("Hồ sơ của bạn đã thêm thành công");
            if (result && path == "/update-cv") navigate("/manage-cv");
            return result;
        },
        onError: (err) => {
            if (err.status === 602) {
                toast.error(
                    "Thêm hồ sơ thất bại, kích thước file không vượt quá 5MB"
                );
            } else {
                toast.error("Thêm hồ sơ thất bại");
            }
        },
    });
    return { createCv, isLoading };
};
export { useCreateCv };
