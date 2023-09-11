import styled from "styled-components";
import GlobalStyle from "./styles/Global Styles/GlobalStyles.js";

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
  background-color: #1f2937;
  user-select: none;
  padding: 10px 20px;
  display: inline;
  cursor: pointer;
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
        <GlobalStyle/>

        <StyledApp>
            <H1>Hello World</H1>
            <Button>Click me</Button>
            <Input placeholder="enter name ..."></Input>
        </StyledApp>
            </>
    )
}
export default App;