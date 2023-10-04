/* eslint-disable react/prop-types */
// import React from "react";

import Modal from "../../../ui/Modal";
import CheckDeleteBooking from "./CheckDeleteBooking";

export default function DeleteCabinCheck({ id, setCheckDelete }) {
  return (
    <Modal>
      <CheckDeleteBooking setCheckDelete={setCheckDelete} id={id} />
    </Modal>
  );
}
