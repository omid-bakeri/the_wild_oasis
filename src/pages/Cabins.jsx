// import { useEffect } from "react";
// import { useState } from "react";
import { useState } from "react";
import AddCabin from "../features/cabins/AddCabin";
import CabinTable from "../features/cabins/CabinTable";
import FilterOperations from "../features/cabins/Operations/FilterOperations";
// import CreateCabinForm from "../features/cabins/CreateCabinForm";
// import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
// import { getCabins } from "../services/apiCabins.js";

function Cabins() {
  const [optionCheck, setOptionCheck] = useState();
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>

        <div
          className="flex px-4 py-2 
        items-center justify-center gap-10"
        >
          <FilterOperations
            setOptionCheck={setOptionCheck}
            optionCheck={optionCheck}
          />
          <AddCabin />
        </div>
      </Row>

      <Row>
        <CabinTable optionCheck={optionCheck} />
      </Row>
    </>
  );
}

export default Cabins;
