import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Header = () => {
  return (
    <>
      <div
        className="bg-[#f9f9f9] p-10 
    flex items-center justify-end"
      >
        <Link to="/login">
          <AiOutlineUser
            className="text-4xl AccountAnchor text-gray-400
       hover:text-gray-500 hover:cursor-pointer"
          />
        </Link>
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
