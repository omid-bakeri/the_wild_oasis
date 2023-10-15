/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { BsFillMoonFill } from "react-icons/bs";
import { useContext } from "react";
import { modeContext } from "../DarkMode/DarkModeProvider";
import { BsFillSunFill } from "react-icons/bs";
// import {useState } from "react";

function DarkLightmode() {
  const [darkmode, setDarkMode] = useContext(modeContext);

  return (
    <>
      <button
        onClick={() => setDarkMode((element)=>!element)}
        className={`p-4 DarkModeAnchor
       border-2 rounded-lg  
       ${darkmode ? "bg-slate-600 border-slate-500" : "bg-slate-200 border-slate-300"}
       
       
       `}
      >
        {!darkmode && <BsFillMoonFill className="text-slate-700" />}
        {darkmode && <BsFillSunFill className="text-slate-200" />}
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
