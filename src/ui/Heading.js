import styled, {css} from "styled-components";



const Heading = styled.h1`
  
  ${props => props.as === 'h1' && css`
    font-size: 3rem;
  `}
  ${props => props.as === 'h2' && css`
    font-size: 2rem;
  `}
  ${props => props.as === 'h3' && css`
    font-size: 1rem;
  `}
  
  padding: 10px 20px;
  color: black;
  user-select: none;
  cursor: pointer;
  display: inline-block;
`

export default Heading;