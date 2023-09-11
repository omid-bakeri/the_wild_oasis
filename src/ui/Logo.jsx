import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.1rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="../../public/images/logo-light.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
