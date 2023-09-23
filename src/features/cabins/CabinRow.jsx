/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

import "react-tooltip/dist/react-tooltip.css";

import { DeleteCabin } from "./DeleteCabin";
const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2rem;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 7rem;

  margin-left: 25px;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

// eslint-disable-next-line no-unused-vars
const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

// eslint-disable-next-line no-unused-vars
const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

// eslint-disable-next-line no-unused-vars
const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const { isDeleteing, deleteMutate } = DeleteCabin();

  const { name, maxCapacity, regularPrice, discount, image, id } = cabin;
  return (
    <>
      <div
        className="rounded-sm px-7 
      w-full bg-slate-200 mt-1 py-10 grid 
      grid-cols-6 font-bold text-3xl
       text-gray-600 justify-items-start 
       items-center"
      >
        <Img className="select-none" src={image} />
        <Cabin>{name}</Cabin>
        <div className="text-2xl">Fits up {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          "--------"
        )}
        <div className="flex gap-3">
          <button
            onClick={() => deleteMutate(id)}
            disabled={isDeleteing}
            className="deleteAnchor text-red-500 text-2xl border-2
        rounded-xl
      border-red-500 px-4 py-2 select-none bg-slate-100"
          >
            <div className="flex justify-center items-center gap-2">
              {/* DELETE */}
              <FaTrash />
            </div>
          </button>

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
            anchorSelect=".deleteAnchor"
            place="top"
          >
            Delete
          </Tooltip>

          <button
            disabled={isDeleteing}
            className="text-[#3730a3] text-2xl editAnchor
               border-2
              rounded-xl
            border-[#3730a3] px-4 py-2 select-none bg-slate-100"
          >
            <div className="flex justify-center items-center gap-2">
              {/* EDIT */}
              <FaEdit />
            </div>
          </button>

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
            anchorSelect=".editAnchor"
            place="top"
          >
            Edit
          </Tooltip>
        </div>
      </div>
    </>
  );
}

export default CabinRow;
