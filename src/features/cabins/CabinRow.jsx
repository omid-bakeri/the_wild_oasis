/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
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
  const { name, maxCapacity, regularPrice, discount, image } = cabin;
  return (
    <>
      <div
        className="rounded-sm px-7 
      w-full bg-slate-200 mt-1 py-10 grid 
      grid-cols-6 font-bold text-3xl
       text-gray-600 justify-items-start 
       items-center"
      >
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fits up {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Discount>{formatCurrency(discount)}</Discount>
        <button
          className="text-red-500 text-2xl border-2
          rounded-xl
        border-red-500 px-4 py-2 bg-slate-100"
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default CabinRow;
