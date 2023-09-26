/* eslint-disable react/prop-types */
// import React from "react";

import Modal from "../../../ui/Modal";
import CheckDeleteForm from "./CheckDeleteForm";

export default function DeleteCabinCheck({ setConfirmDelete, id }) {
  return (
    <Modal>
      <CheckDeleteForm id={id} setConfirmDelete={setConfirmDelete} />
    </Modal>
  );
}
