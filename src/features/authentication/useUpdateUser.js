import { useMutation } from "@tanstack/react-query";
import { updatePassword as updatePasswordApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
export function useUpdatePassword() {
  const { isLoading, mutate: updatePassword } = useMutation({
    mutationFn: updatePasswordApi,
    onSuccess: () => {
      toast.success("password successfully updated");
    },
    onError: () => {
      toast.error("can not update password");
    },
  });

  return { isLoading, updatePassword };
}
