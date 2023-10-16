import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { HiOutlineUsers } from "react-icons/hi2";
import { HiOutlineCog8Tooth } from "react-icons/hi2";
import { useContext } from "react";
import { modeContext } from "../features/DarkMode/DarkModeProvider";
// import { useContext } from "react";
// import {modeContext} from "../features/DarkMode"

// eslint-disable-next-line no-unused-vars
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

// eslint-disable-next-line no-unused-vars
const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    border-radius: var(--border-radius-sm);
    background-color: "";
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;
const MainNav = () => {
  const [darkmode] = useContext(modeContext);
  darkmode;
  return (
    <>
      <nav>
        <NavList>
          <li>
            <StyledNavLink className={``} to="/dashboard">
              <HiOutlineHome />
              <span>Home</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/bookings">
              <HiOutlineCalendarDays />
              <span>Bookings</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/Cabins">
              <HiOutlineHomeModern />
              <span>Cabins</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/Users">
              <HiOutlineUsers />
              <span>Users</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/Settings">
              <HiOutlineCog8Tooth />
              <span>Settings</span>
            </StyledNavLink>
          </li>
        </NavList>
      </nav>
    </>
  );
};

export default MainNav;
