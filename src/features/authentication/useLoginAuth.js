import { useMutation } from "@tanstack/react-query";
import { Login } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLoginAuth() {
  // const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { isLoading, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => Login({ email, password }),
    onSuccess: () => {
      // queryClient.setQueryData(["user"], user);
      toast.success("successfully logined");
      navigate(`/dashboard`);
    },
    onError: () => {
      toast.error("incorrect email or password");
    },
  });
  return { isLoading, login };
}
