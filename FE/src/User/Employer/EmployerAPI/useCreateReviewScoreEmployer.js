import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiCreateReviewScoreEmployer } from "./apiCreateReviewScoreEmployer";
import { useNavigate } from "react-router-dom";

export const useCreateReviewScoreEmployer = () => {
  //   const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutateAsync: createReviewScoreEmployer, isLoading } = useMutation({
    mutationFn: (formData) => apiCreateReviewScoreEmployer(formData),
    onSuccess: (result) => {
      toast.success("Đánh giá nhà ứng tuyển thành công!");
      console.log(result);
      if (result.status === 200) {
        console.log(result);
        console.log("alo")
        queryClient.invalidateQueries({
          // vô hiệu hoá bộ đệm để query lại (đồng bộ giao diện)
          queryKey: ["Employer" + result?.data?.employerId],
        });
        queryClient.invalidateQueries({
          // vô hiệu hoá bộ đệm để query lại (đồng bộ giao diện)
          queryKey: ["ReviewScoreByCandidate" + result?.data?.candidateId],
        });
        // navigate(`/employer-profile/${result.data.employerId}`);
      }
      return result;
    },
    onError: (err) => toast.error("Đánh giá thất bại đã có lỗi xảy ra."),
  });
  return { createReviewScoreEmployer, isLoading };
};
