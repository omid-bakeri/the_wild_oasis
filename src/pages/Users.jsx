// import Heading from "../ui/Heading";

// import { useState } from "react";
// import Modal from "../ui/Modal";
// import CreateCabinForm from "../features/cabins/CreateCabinForm";

function NewUsers() {
  // const [ModalCheck, setModalCheck] = useState(false);

  return (
    <>
      <button
        // onClick={() => setModalCheck(true)}
        className="bg-[#4338ca] px-8 py-4 text-white text-3xl 
    outline-none rounded-lg shadow-lg mt-10 select-none flex 
    justify-center items-center focus:outline-2xl border-2 border-[#4338ca]"
      >
        Add new user
      </button>

      {/* {ModalCheck && (
        <Modal>
          <CreateCabinForm />
        </Modal>
      )} */}
    </>
  );
}

export default NewUsers;
