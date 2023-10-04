import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function DeleteBooking(id) {
  console.log(id.id);
  const navigate = useNavigate();

  const queryC = useQueryClient();

  const { error, mutate } = useMutation({
    mutationKey: ["booking"],
    mutationFn: deleteBooking(id.id),

    onSuccess: () => {
      navigate(`/bookings`);
      queryC.invalidateQueries({
        queryKey: ["booking"],
      });

      toast.success("Booking Successfully Deleted!");
    },
    onError: () => {
      toast.error("Booking can not be deleted");
    },
  });

  if (error) {
    toast.error("Booking could not be deleted!");
  }

  return { mutate };
}

export default DeleteBooking;
