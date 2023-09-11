import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-gray-0);
  padding: 1.2rem 4.8rem;
  border-left: 1px solid #ccd0d3;
`
 const Header  = () => {
    return (
        <StyledHeader>
            header
        </StyledHeader>
    )
}

export default Header;