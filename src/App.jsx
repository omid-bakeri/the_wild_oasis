import styled from "styled-components";
import GlobalStyles from "./styles/Global Styles/GlobalStyles.js";

const H1 = styled.h1`
background-color: #4b5563;
  padding: 10px 20px;
  font-size: 1.2rem;
  color: white;
  user-select: none;
  display: inline-block;
`
const Button = styled.button`
    color: white;
  background-color: var(--color-brand-800);
  user-select: none;
  padding: 10px 20px;
  display: inline;
  cursor: pointer;
  &:hover {
    background-color: red;
    transition: 0.4s ease-in-out;
    transform: translateY(10px);
  }
`

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background-color: #0381d4;
  width: 100%;
`

const Input = styled.input`
    color: gray;
  padding: 10px 20px;
  border-radius: 10px;
  outline: none;
  border: 2px solid gray;
  font-size: 1.1rem;
  
`
const App = () => {
    return (
        <>
        <GlobalStyles/>

        <StyledApp>
            <H1>Hello World</H1>
            <Button>Click me</Button>
            <Input placeholder="enter name ..."></Input>
        </StyledApp>
        </>
    )
}
export default App;