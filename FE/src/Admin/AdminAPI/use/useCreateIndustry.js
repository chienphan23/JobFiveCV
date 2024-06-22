import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiCreateIndustry } from "../apiCreateIndustry";

const useCreateIndustry = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: createIndustry, isLoading } = useMutation({
    mutationFn: async (formData) => await apiCreateIndustry(formData),
    onSuccess: (result) => {
      toast.success("Tạo ngành nghề thành công");
      if (result) {
        queryClient.invalidateQueries({
          queryKey: ["industry"],
        });
      }
      return result;
    },
    onError: (err) => toast.error("Tạo ngành nghề thất bại, đã có lỗi xảy ra."),
  });
  return { createIndustry, isLoading };
};

export { useCreateIndustry };
