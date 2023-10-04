/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BiArrowBack } from "react-icons/bi";
import { GiWoodCabin } from "react-icons/gi";
import { BsCalendarDate } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { RiPassportLine } from "react-icons/ri";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { BiNotepad } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { MdCabin } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { CgCoffee } from "react-icons/cg";
import { formatCurrency } from "../../utils/helpers";

import { useState } from "react";
import DeleteBookingCheck from "./Delete/DeleteBookingCheck";
function Details({ booking, id }) {
  const [chekedBox, setCheckedBox] = useState(false);

  const nav = useNavigate();

  booking = booking.filter((item) => Number(item.id) === Number(id));

  booking = booking.at(0);

  const {
    status,
    cabinPrice,
    endDate,
    extrasPrice,
    hasBreakfast,
    isPaid,
    numGuests,
    numNights,
    startDate,
    totalPrice,
    observation,
  } = booking;

  const {
    created_at,
    description,
    discount,
    image,
    maxCapacity,
    name,
    regularPrice,
  } = booking.cabins;

  const { email, fullname, nationalID, nationality } = booking.guests;

  function handleCheckedCheckBoX(checked) {
    if (checked) {
      setCheckedBox(checked);
    } else {
      setCheckedBox(false);
    }
  }

  const [checkDelete, setCheckDelete] = useState(false);

  return (
    <>
      <div
        className="flex px-4 py-3 
        justify-between
       items-center gap-3"
      >
        <div className="flex text-4xl font-bold justify-start items-center gap-3">
          <div>Booking</div>
          <div className="text-[#4338ca]">#{id}</div>
          <button
            className={`
            rounded-l-full rounded-r-full
             flex justify-center
             items-center select-none
             text-2xl px-8 py-2
            ${
              status === "checked in"
                ? "bg-green-300 text-green-800 "
                : status === "checked out"
                ? "bg-red-300 text-red-800"
                : status === "unconfirmed"
                ? "bg-blue-300 outline-none text-blue-800"
                : ""
            }
           text-white`}
          >
            {status.toUpperCase()}
          </button>
        </div>
        <button
          onClick={() => nav(-1)}
          className="flex select-none
           gap-3 text-3xl
           shadow-xl
          bg-[#cc4444] px-5 py-3
           text-white rounded-lg hover:opacity-90 justify-end
         items-center"
        >
          <i>
            <BiArrowBack />
          </i>
          <span>back</span>
        </button>
      </div>

      <div
        className="mt-10 flex gap-16
       text-gray-500"
      >
        <img width="500" src={image} alt={`image cabin number ${name}`} />
        <div
          className="flex justify-start
         items-start gap-3 flex-col"
        >
          <div className="text-3xl">Booking Details</div>

          <div className="flex justify-start items-center gap-3 ">
            <i className="text-4xl text-[#4338ca">
              <GiWoodCabin />
            </i>
            <div className="text-3xl py-2 text-[#4338ca] rounded-lg font-bold">
              <strong className="bg-[#4338ca] px-4 py-2 text-white">
                {numNights}
              </strong>{" "}
              Nights in Cabin {name}
            </div>
          </div>
          <div className="flex justify-start items-center gap-3 ">
            <i className="text-4xl text-[#4338ca">
              <BsCalendarDate />
            </i>
            <div className="text-3xl">Start Date : </div>
            <div className="text-3xl py-2 text-[#4338ca] rounded-lg font-bold">
              {startDate}
            </div>
          </div>
          <div className="flex justify-start items-center gap-3 ">
            <i className="text-4xl text-[#4338ca">
              <BsCalendarDate />
            </i>
            <div className="text-3xl">End Date : </div>
            <div className="text-3xl py-2 text-[#4338ca] rounded-lg font-bold">
              {endDate}
            </div>
          </div>
          <div className="flex justify-start items-center gap-3 ">
            <i className="text-4xl text-[#4338ca">
              <AiOutlineUserAdd />
            </i>
            <div className="text-3xl">Guest Name : </div>
            <div className="text-3xl py-2 text-[#4338ca] rounded-lg font-bold">
              {fullname} + {numGuests - 1} Guests
            </div>
          </div>
          <div className="flex justify-start items-center gap-3 ">
            <i className="text-4xl text-[#4338ca">
              <HiOutlineMail />
            </i>
            <div className="text-3xl">Guest Email : </div>
            <div className="text-3xl py-2 text-[#4338ca] rounded-lg font-bold">
              {email}
            </div>
          </div>
          <div className="flex justify-start items-center gap-3 ">
            <i className="text-4xl text-[#4338ca">
              <RiPassportLine />
            </i>
            <div className="text-3xl">Guest NationalID : </div>
            <div className="text-3xl py-2 text-[#4338ca] rounded-lg font-bold">
              {nationalID}
            </div>
          </div>
          <div className="flex justify-start items-center gap-3 ">
            <i className="text-4xl text-[#4338ca">
              <MdOutlineFreeBreakfast />
            </i>
            <div className="text-3xl">Breakfast Included ? </div>
            <div className="text-3xl py-2 text-[#ccc444] rounded-lg font-bold">
              {hasBreakfast === true ? "true" : "false"}
            </div>
          </div>
          <div className="flex justify-start items-center gap-3 ">
            <i className="text-4xl text-[#4338ca">
              <BiNotepad />
            </i>
            <div className="text-3xl">Observation : </div>
            <div className="text-3xl py-2 text-[#4338ca] rounded-lg font-bold">
              {observation ? observation : "🤔"}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start mt-10 items-center gap-3 ">
        <div className="text-3xl">Cabin reserved in</div>
        <div className="text-3xl">{startDate}</div>
        <div className="text-3xl">by {fullname}</div>
      </div>
      <button
        disabled={isPaid}
        className={`font-bold px-8 text-4xl w-full  ${
          isPaid ? "text-center" : "text-left justify-between"
        } mt-3 rounded-l-full rounded-r-full py-6 ${isPaid} ? bg-green-300 text-green-800 : ${
          isPaid === false ? "bg-yellow-300 text-yellow-800" : ""
        }`}
      >
        <div
          className={`flex ${
            isPaid ? "justify-center" : "justify-between"
          }  items-center gap-3`}
        >
          <div className="flex justify-center gap-3">
            <AiOutlineDollarCircle className="text-4xl" />
            {isPaid ? "PAID" : "NOT PAID"}
          </div>
          {!isPaid && (
            <>
              <div className="flex justify-center items-center gap-2">
                <div className="text-3xl text-yellow-600 ">TOTAL PRICE </div>
                <button
                  className="border-2 focus:outline-none
                 border-yellow-800 px-4
                  py-2 rounded-r-full
                   rounded-l-full"
                >
                  {formatCurrency(extrasPrice + regularPrice)}
                </button>
              </div>
            </>
          )}
        </div>
      </button>

      <div
        className="flex justify-start mt-5
       items-center gap-2"
      >
        <input
          onChange={(e) => handleCheckedCheckBoX(e.target.checked)}
          className="text-3xl"
          type="checkbox"
        ></input>
        <div className="text-3xl">Show Detail of Price</div>
      </div>
      {chekedBox && (
        <div
          className="flex flex-col p-4
         bg-slate-300 shadow-xl w-1/2"
        >
          <div className="flex justify-start items-center gap-3 ">
            <i className="text-4xl text-[#4338ca">
              <MdCabin />
            </i>
            <div className="text-3xl">Cabin Price : </div>
            <div
              className="text-3xl py-2 
              text-gray-700 rounded-lg font-bold"
            >
              {formatCurrency(regularPrice)}
            </div>
          </div>
          <div className="flex justify-start items-center gap-3 ">
            <i className="text-4xl text-gray-700">
              <CgCoffee />
            </i>
            <div className="text-3xl">BreakFast : </div>
            <div
              className="text-3xl py-2 
              text-gray-700 rounded-lg font-bold"
            >
              {formatCurrency(extrasPrice)}
            </div>
          </div>
        </div>
      )}

      <div className="absolute bottom-16 ">
        {
          <button
            onClick={() => setCheckDelete(true)}
            className="flex
          border-red-500 border-4  hover:bg-red-500 hover:text-white text-3xl
          text-red-500 px-8 py-4 
          rounded-r-full rounded-l-full focus:outline-none
           justify-center items-center gap-4"
          >
            <i>
              <AiOutlineDelete />
            </i>
            <button className="focus:outline-none">
              Delete Booking number #{id}
            </button>
          </button>
        }
      </div>

      {checkDelete && (
        <DeleteBookingCheck setCheckDelete={setCheckDelete} id={id} />
      )}
    </>
  );
}

export default Details;
