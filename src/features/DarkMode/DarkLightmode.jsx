import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { useState } from "react";

function DarkLightmode() {
  const [mode, setMode] = useState(false);
  return (
    <>
      <button
        onClick={() => setMode((element) => !element)}
        className="p-2 DarkModeAnchor
       border-2 rounded-lg border-gray-300"
      >
        {!mode && (
          <BsFillMoonFill
            className="text-4xl  text-gray-500
       hover:text-gray-700
        hover:cursor-pointer"
          />
        )}
        {mode && (
          <BsFillSunFill
            className="text-4xl 
       hover:text-gray-700
        hover:cursor-pointer"
          />
        )}
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
        anchorSelect=".DarkModeAnchor"
        place="top"
      >
        Dark Mode
      </Tooltip>
    </>
  );
}

export default DarkLightmode;
