import { useState } from "react";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddRow() {
  const [isAddRow, setIsAddRow] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsAddRow(true)}
        className="bg-red-900 text-white select-none py-4"
      >
        Add new Row
      </button>

      {isAddRow && (
        <Modal>
          <CreateCabinForm />
        </Modal>
      )}
    </>
  );
}

export default AddRow;
