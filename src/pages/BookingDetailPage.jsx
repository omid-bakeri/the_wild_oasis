// import Details from "../features/bookings/Details";

import { useQuery } from "@tanstack/react-query";
import Details from "../features/bookings/Details";
import { getBooking } from "../services/apiBookings";
import Spinner from "../ui/Spinner";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

function BookingDetailPage() {
  const element = useParams();
  

  let {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: (element) => getBooking(element),
    retry: false,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    toast.error("booking not be loaded");
  }

  return <Details booking={booking} id={element.id} />;
}

export default BookingDetailPage;
