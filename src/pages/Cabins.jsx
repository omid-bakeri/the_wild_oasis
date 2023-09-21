// import { useEffect } from "react";
import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
// import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
// import { getCabins } from "../services/apiCabins.js";

function Cabins() {
  const [showCreateCabin, setShowCreateCabin] = useState(false);

  function handleOpenCreateFormCabin() {
    setShowCreateCabin((element) => !element);
  }
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>

        <div
          className="flex px-4 py-2 
        items-center justify-center gap-10"
        >
          <p>Filter / Sort</p>
          <button
            onClick={() => handleOpenCreateFormCabin()}
            className="bg-[#4338ca]
           text-white px-8 py-3 rounded-lg"
          >
            Add New Cabin
          </button>
        </div>
      </Row>

      <Row>
        <CabinTable />
      </Row>

      {showCreateCabin && (
        <CreateCabinForm setShowCreateCabin={setShowCreateCabin} />
      )}
    </>
  );
}

export default Cabins;
