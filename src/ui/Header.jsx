import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import DarkLightMode from "../features/DarkMode/darkLightmode";
import "react-tooltip/dist/react-tooltip.css";
import Logout from "../features/authentication/Logout";
import { useUser } from "../features/authentication/useUser";
import EditInformation from "../features/authentication/EditInformation";
import ShowInformation from "../features/authentication/ShowInformation";
const Header = () => {
  const { isAuthenticated } = useUser();
  return (
    <>
      <div
        className="bg-[#f9f9f9] p-10 
    flex items-center justify-end gap-4"
      >
        {!isAuthenticated && (
          <Link to="/login">
            <button
              className="p-2 LogoutAnchor
       border-2 rounded-lg border-gray-300"
            >
              <AiOutlineUser
                className="text-4xl outline-none 
                AccountAnchor text-gray-400
              hover:text-gray-500 hover:cursor-pointer"
              />
            </button>
          </Link>
        )}

        {isAuthenticated && <ShowInformation />}
        <DarkLightMode />
        {isAuthenticated && <EditInformation />}
        {isAuthenticated && <Logout />}
      </div>

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
        anchorSelect=".AccountAnchor"
        place="left"
      >
        Account
      </Tooltip>
    </>
  );
};

export default Header;
