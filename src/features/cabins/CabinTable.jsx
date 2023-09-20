import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getCabins } from "../../services/apiCabins";
import { useState } from "react";
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
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function CabinTable() {
  // eslint-disable-next-line no-unused-vars
  const [status, setStatus] = useState();

  // const [store , setStore] = useState();

  const x = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins,
  });

  console.log(x);

  // time to use react query
  return <div>CabinTable</div>;
}

export default CabinTable;
