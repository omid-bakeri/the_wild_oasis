import { useContext } from "react";
import { useUser } from "./useUser";
import { modeContext } from "../DarkMode/DarkModeProvider";

function ShowInformation() {
  const { user } = useUser();
  const [darkmode] = useContext(modeContext);

  return (
    <button
      className="px-4 py-1 rounded-lg 
    focus:border-purple-700 border-2 
    focus:outline-none"
    >
      <div
        className={`px-4 ${
          darkmode ? "text-slate-400" : "text-slate-800"
        } py-2`}
      >
        {user.email}
      </div>
    </button>
  );
}

export default ShowInformation;
