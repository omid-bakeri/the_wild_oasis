import {useState } from "react";

import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleOpenCreateFormCabin() {
    setIsOpenModal((element) => !element);
  }


  return (
    <>
      <button
        onClick={() => handleOpenCreateFormCabin()}
        className="bg-[#4338ca]
 text-white px-8 py-3 rounded-lg"
      >
        Add New Cabin
      </button>
      {/* {isOpenModal && <CreateCabinForm setIsOpenModal={setIsOpenModal} />} */}
      {isOpenModal && (
        <Modal>
          <CreateCabinForm
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
          />
        </Modal>
      )}
    </>
  );
}

export default AddCabin;
