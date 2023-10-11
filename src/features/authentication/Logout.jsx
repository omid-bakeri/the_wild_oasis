import { ImExit } from "react-icons/im";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useLogout } from "./useLogout";

function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <>
      <button
        disabled={isLoading}
        onClick={logout}
        className="p-2 LogoutAnchor
       border-2 rounded-lg border-red-500"
      >
        <ImExit
          className="text-4xl  text-red-400
       hover:text-red-600 hover:cursor-pointer"
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
        anchorSelect=".LogoutAnchor"
        place="left"
      >
        Logout
      </Tooltip>
    </>
  );
}

export default Logout;
