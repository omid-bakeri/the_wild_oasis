import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabins } from "../../services/apiCabins";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function CreateCabin({ setShowCreateCabin }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate: createMutate } = useMutation({
    mutationFn: createCabins,
    onSuccess: () => {
      toast.success("cabin successfully created");
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });

      setShowCreateCabin(false);

      navigate("/Cabins");
    },
    onError: (err) => toast.err(err.message),
  });

  return { isCreating, createMutate };
}
