import { useMutation } from "@tanstack/react-query";
import { Signup as SignupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const { isLaoding, mutate: Signup } = useMutation({
    mutationFn: SignupApi,
    onSuccess: () => {
      toast.success(
        "new user successfully created! please verify the new account form users email address"
      );
      navigate("/dashboard");
    },
  });

  return { isLaoding, Signup };
}
