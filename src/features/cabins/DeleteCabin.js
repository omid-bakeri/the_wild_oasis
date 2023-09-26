import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabins } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

export function DeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleteing, mutate: deleteMutate } = useMutation({
    mutationFn: (id) => deleteCabins(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });

      
      toast.success("cabin successfully deleted!");
    },

    onError: (err) => toast.error(err.message),
  });

  return { isDeleteing, deleteMutate };
}
