/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getCabins } from "../../services/apiCabins";
import { useState } from "react";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
// import AddRow from "./AddRow";
// import CabinRow from "./CabinRow";
// import { useState } from "react";

// eslint-disable-next-line no-unused-vars
const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

// eslint-disable-next-line no-unused-vars
const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2rem 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  justify-items: center;

  // background-color: gray;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function CabinTable({ optionCheck }) {
  // const [filterCheck, setFilterCheck] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [status, setStatus] = useState();

  // const [store , setStore] = useState();

  const {
    // eslint-disable-next-line no-unused-vars
    isLoading,
    // eslint-disable-next-line no-unused-vars
    data: cabins,
    // eslint-disable-next-line no-unused-vars
    error,
  } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins,
  });

  if (isLoading) {
    return <Spinner />;
  }

  console.log(optionCheck);

  let cabinDiscount;

  if (optionCheck && optionCheck === "with_discount") {
    cabinDiscount = cabins.filter((item) => item.discount !== 0);
  }

  if (optionCheck && optionCheck === "no_discount") {
    cabinDiscount = cabins.filter((item) => item.discount === 0);
  }
  console.log(cabinDiscount);

  // time to use react query
  return (
    <>
      <div
        className="bg-slate-200
    rounded-sm px-4 py-4 grid grid-cols-6 
    font-bold text-3xl
     text-gray-600 w-full
      justify-items-start"
      >
        <div></div>
        <div>Cabin</div>
        <div>capacity</div>
        <div>price</div>
        <div>discount</div>
        <div></div>
      </div>

      <div className="w-[100%]">
        {optionCheck &&
          optionCheck === "with_discount" &&
          cabinDiscount.map((cabin) => (
            <CabinRow key={cabin.id} cabin={cabin} />
          ))}
        {optionCheck &&
          optionCheck === "no_discount" &&
          cabinDiscount.map((cabin) => (
            <CabinRow key={cabin.id} cabin={cabin} />
          ))}
        {optionCheck &&
          optionCheck === "all_cabins" &&
          cabins.map((cabin) => <CabinRow key={cabin.id} cabin={cabin} />)}

        {!optionCheck &&
          cabins.map((cabin) => <CabinRow key={cabin.id} cabin={cabin} />)}
      </div>
      {/* <AddRow /> */}
    </>
  );
}

export default CabinTable;
