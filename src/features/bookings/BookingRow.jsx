/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { format, isToday } from "date-fns";

import { formatCurrency } from "../../utils/helpers.js";
import { formatDistanceFromNow } from "../../utils/helpers.js";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function BookingRow({ bookings, key }) {
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  const {
    cabinPrice,
    endDate,
    extrasPrice,
    guestID,
    hasBreakfast,
    id,
    isPaid,
    numGuests,
    numNights,
    observation,
    status,
    totalPrice,
    cabinID,
    startDate,
    cabins,
    guests,
  } = bookings;

  const statusUpdate = status.toUpperCase();

  return (
    <>
      <div
        className="rounded-sm px-7 mt-1
      w-full bg-slate-200 
      py-10 grid grid-cols-6 font-bold
       text-3xl text-gray-600 
       justify-items-center 
       items-center"
      >
        <Cabin>{cabins.name}</Cabin>

        <Stacked>
          <span className="text-2xl font-bold  text-center">
            {guests.fullname}
          </span>
          <span>{guests.email}</span>
        </Stacked>

        <Stacked>
          <span
            className="text-xl 
          px-4 py-2 text-gray-500 
          font-bold"
          >
            {isToday(new Date(startDate))
              ? "Today"
              : formatDistanceFromNow(startDate)}{" "}
            &rarr; {numNights} night stay
          </span>
          <span
            className="text-md px-4 
          py-2 text-gray-800
          "
          >
            {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
            {format(new Date(endDate), "MMM dd yyyy")}
          </span>
        </Stacked>

        <div
          className={`text-xl select-none px-8 py-2 rounded-lg 
          flex items-center justify-center 
        font-small uppercase ${
          statusUpdate === "CHECKED IN"
            ? "bg-green-300 text-green-800"
            : statusUpdate === "UNCONFIRMED"
            ? "bg-blue-200 text-blue-800"
            : statusUpdate === "CHECKED OUT"
            ? "bg-red-200 text-red-800"
            : ""
        }`}
        >
          {status}
        </div>

        <Amount
          className="text-green-600 px-4 
        py-2"
        >
          {formatCurrency(totalPrice)}
        </Amount>
      </div>
    </>
  );
}

export default BookingRow;
