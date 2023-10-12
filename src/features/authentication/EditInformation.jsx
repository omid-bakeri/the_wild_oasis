import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { VscEdit } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

function EditInformation() {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => navigate("/account")}
        className="p-2 EditInformationAnchor
       border-2 rounded-lg border-purple-300"
      >
        <VscEdit
          className="text-4xl  text-purple-500
       hover:text-purple-600 hover:cursor-pointer"
        />
      </button>

      <Tooltip
        style={{
          backgroundColor: "white",
          color: "black",
          ShadowRoot: "2xl",
          fontWeight: "600",
          fontSize: "1.5rem",
          border: "4px solid black",
        }}
        className="text-sm"
        anchorSelect=".EditInformationAnchor"
        place="top"
      >
        Edit Information
      </Tooltip>
    </>
  );
}

export default EditInformation;
