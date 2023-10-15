import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";
import styled from "styled-components";
import { useContext } from "react";
import { modeContext } from "../features/DarkMode/DarkModeProvider.jsx";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  position: relative;
`;
const Container = styled.div`
  max-width: 140rem;
  margin: 0 auto;
`;
const Main = styled.main`
  overflow: scroll;
  overflow-x : hidden;
  padding: 4rem 4.8rem 6.4rem;
`;
const AppLayout = () => {
  const [darkmode] = useContext(modeContext);
  return (
    <>
      <StyledAppLayout>
        <Header />
        <Sidebar />
        <Main className={`${darkmode ? "bg-slate-900" : "bg-slate-200"}`}>
          <Container>
            <Outlet />
          </Container>
        </Main>
      </StyledAppLayout>
    </>
  );
};

export default AppLayout;
