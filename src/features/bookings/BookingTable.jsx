/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import { useQuery } from "@tanstack/react-query";
import BookingRow from "./BookingRow";
import { getAllBookings } from "../../services/apiBookings";
import Spinner from "../../ui/Spinner";
import { toast } from "react-hot-toast";
import Pagination from "../../ui/Pagination";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
// import { useSearchParams } from "react-router-dom";

function BookingTable({ filterBookings, sortBookings }) {
  const [checked, setChcecked] = useState(false);
  const [params] = useSearchParams();

  let {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryFn: () => getAllBookings(),
    queryKey: ["booking"],
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    toast.error("Bookings can not be loaded");
  }

  let bookingFilter;
  if (filterBookings && filterBookings === "checked_in") {
    bookingFilter = bookings.filter((item) => item.status === "checked in");
  }

  if (filterBookings && filterBookings === "checked_out") {
    bookingFilter = bookings.filter((item) => item.status === "checked out");
  }

  if (filterBookings && filterBookings === "unconfirmed") {
    bookingFilter = bookings.filter((item) => item.status === "unconfirmed");
  }

  switch (sortBookings) {
    case "default":
      bookings.sort((a, b) => a.cabins.name - b.cabins.name);
      break;
    case "sort_by_amount(high)":
      bookings.sort((a, b) => b.totalPrice - a.totalPrice);
      break;
    case "sort_by_amount(low)":
      bookings.sort((a, b) => a.totalPrice - b.totalPrice);
      break;
    case "sort_by_guests(username)":
      bookings.sort((a, b) =>
        a.guests.fullname.localeCompare(b.guests.fullname)
      );
      break;
    case "sort_by_guests(email)":
      bookings.sort((a, b) => a.guests.email.localeCompare(b.guests.email));
      break;
  }

  // Pagination
  const PAGE_SIZE = 6;
  const bookingsLength = bookings.length;

  const pagesCount = Math.ceil(bookingsLength / PAGE_SIZE);

  const parameters = !params.get("page") ? 1 : params.get("page");
  const from = (parameters - 1) * PAGE_SIZE; // 0
  const to =
    bookingsLength > parameters * PAGE_SIZE + 1 ? parameters * PAGE_SIZE  : bookingsLength; //6

  if (!params.get("page")) {
    bookings = bookings.slice(from, to);
  }
  if ((params.get("page") && !checked) || checked) {
    bookings = bookings.slice(from, to);
  }

  return (
    <>
      <div
        className="bg-slate-200
    rounded-sm px-4 py-4
    grid grid-cols-6 
    font-bold text-3xl
     text-gray-700 w-full
      justify-items-center"
      >
        <div>Cabin</div>
        <div>Guest</div>
        <div>Dates</div>
        <div>Status</div>
        <div>Amount</div>
        <div></div>
      </div>
      <div>
        {filterBookings &&
          filterBookings == "all_bookings" &&
          bookings.map((item) => <BookingRow bookings={item} key={item.id} />)}
        {!filterBookings &&
          bookings.map((item) => <BookingRow bookings={item} key={item.id} />)}

        {filterBookings &&
          filterBookings === "checked_in" &&
          bookingFilter.map((item) => (
            <BookingRow bookings={item} key={item.id} />
          ))}

        {filterBookings &&
          filterBookings === "checked_out" &&
          bookingFilter.map((item) => (
            <BookingRow bookings={item} key={item.id} />
          ))}

        {filterBookings &&
          filterBookings === "unconfirmed" &&
          bookingFilter.map((item) => (
            <BookingRow bookings={item} key={item.id} />
          ))}
      </div>
      <Pagination
        bookingsLength={bookingsLength}
        pagesCount={pagesCount}
        checked={checked}
        setChcecked={setChcecked}
      />
    </>
  );
}

export default BookingTable;
