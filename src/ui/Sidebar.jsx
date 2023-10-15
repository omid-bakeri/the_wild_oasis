import styled from "styled-components";
import Logo from "./Logo.jsx";
import MainNav from "./MainNav.jsx";
import Uploader from "../data/Uploader.jsx";
// import { useContext } from "react";
// import {modeContext} from "../features/DarkMode/DarkModeProvider.jsx"
const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: var(--color-gray-0);
  padding: 3.2rem 2.4rem;
  border-right: 3px solid var(--color-gray-100);
  grid-row: 1/-1;
`;
const Sidebar = () => {
 

  
  return (
    <StyledSidebar >
      <Logo />
      <MainNav />
      <Uploader />
    </StyledSidebar>
  );
};

export default Sidebar;
