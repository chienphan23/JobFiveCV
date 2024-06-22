import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiUpdateIndustry } from "../apiUpdateIndustry";

const useUpdateIndustry = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: UpdateIndustry, isLoading } = useMutation({
    mutationFn: async ({ industryId, formData }) =>
      await apiUpdateIndustry(industryId, formData),
    onSuccess: (result) => {
      toast.success("Cập nhật ngành nghề thành công");
      if (result) {
        queryClient.invalidateQueries({
          queryKey: ["industry"],
        });
      }
      return result;
    },
    onError: () =>
      toast.error("Cập nhật ngành nghề thất bại đã có lỗi xảy ra."),
  });

  return { UpdateIndustry, isLoading };
};
export { useUpdateIndustry };
