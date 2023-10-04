/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { format, isToday } from "date-fns";
import { BsEye } from "react-icons/bs";
import { formatCurrency } from "../../utils/helpers.js";
import { formatDistanceFromNow } from "../../utils/helpers.js";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
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
  const navigate = useNavigate();
  const [bookingDetails, setBookingDetails] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  function handleBooking(id) {
    navigate(`/bookings/${id}`);
    
  }

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
          className={`text-xl  select-none 
          px-6 py-2 rounded-l-full rounded-r-full
          flex items-center justify-center 
        font-small uppercase ${
          statusUpdate === "CHECKED IN"
            ? "bg-green-300 text-green-700"
            : statusUpdate === "UNCONFIRMED"
            ? "bg-blue-200 text-blue-700"
            : statusUpdate === "CHECKED OUT"
            ? "bg-red-200 text-red-700"
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

        <BsEye
          onClick={() => handleBooking(id)}
          className="relative ShowMoreAnchor
           hover:cursor-pointer
          rounded-full "
        />

        <Tooltip
          style={{
            backgroundColor: "white",
            color: "black",
            ShadowRoot: "2xl",
            fontWeight: "600",
            fontSize: "1.5rem",
            border: "4px solid black",
          }}
          className="text-sm"
          anchorSelect=".ShowMoreAnchor"
          place="left"
        >
          show detail
        </Tooltip>
      </div>
    </>
  );
}

export default BookingRow;
