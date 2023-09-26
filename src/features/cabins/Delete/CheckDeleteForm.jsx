/* eslint-disable react/prop-types */
// styling by tailwind css
import { FaTrash } from "react-icons/fa";
import { DeleteCabin } from "../DeleteCabin";

function CheckDeleteForm({ setConfirmDelete, id }) {
  const { isDeleteing, deleteMutate } = DeleteCabin();
  const handleDeleteForm = () => {
    deleteMutate(id);
  };

  const buttonStyle =
    "px-6 py-4 border-2 text-white select-none outline-none rounded-lg text-3xl border-gray-100";
  return (
    <div
      className="bg-white  px-10 py-5 rounded-lg
      shadow-xl "
    >
      <div className="flex justify-between items-center">
        <div
          className="flex text-[#cc4444] justify-start
       items-center gap-3 text-4xl mt-10 mb-10"
        >
          <header>Delete</header>
          <i>
            <FaTrash />
          </i>
        </div>
        <button
          onClick={() => setConfirmDelete(false)}
          className="bg-gray-400 text-white
           hover:duration-500 w-10
            outline-none h-10 p-6
          hover:cursor-pointer
           hover:bg-gray-500 shadow-xl
            rounded-full text-4xl flex 
            justify-center select-none
             items-center"
        >
          &times;
        </button>
      </div>

      <p
        className="text-3xl
        text-gray-600 leading-[3rem]"
      >
        Are you sure you want to delete this cabin? the action can not be done!
      </p>

      <div className="w-full mt-10 mb-5 flex justify-end gap-4 py-3">
        <button
          onClick={() => setConfirmDelete(false)}
          className={`${buttonStyle} bg-[#9ca3af] hover:opacity-80`}
        >
          Cancel
        </button>
        <button
          onClick={() => handleDeleteForm()}
          className={`${buttonStyle} bg-[#b91c1c] hover:opacity-80 
          hover:duration-500`}
        >
          {isDeleteing ? "Please wait" : "Delete"}
        </button>
      </div>
    </div>
  );
}

export default CheckDeleteForm;
