import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { modeContext } from "../features/DarkMode/DarkModeProvider";

const Img = styled.img`
  height: 9.1rem;
  width: auto;
`;

function Logo() {
  const [darkmode] = useContext(modeContext);
  return (
    <Link className="mx-auto" to="/">
      <Img
        src={`${
          darkmode
            ? "../../public/images/logo-dark.png"
            : "../../public/images/logo-light.png"
        }`}
        alt="Logo"
      />
    </Link>
  );
}

export default Logo;
