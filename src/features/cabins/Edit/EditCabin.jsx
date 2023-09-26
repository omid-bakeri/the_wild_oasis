/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Modal from "../../../ui/Modal";
import CreateCabinForm from "../CreateCabinForm";
function EditCabin({ id, editCabin, cabinToEdit }) {
  return (
    <Modal>
      <CreateCabinForm cabinToEdit={cabinToEdit} />
    </Modal>
  );
}

export default EditCabin;
