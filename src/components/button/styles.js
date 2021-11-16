import styled from "styled-components";

export const StyledButton = styled.button`
  height: 55px;
  width: 40%;
  border: none;
  background-color: #0072e5;
  color: white;
  cursor: pointer;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
    0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
  margin-left: -2px;
  z-index: 1;
  :hover {
    background-color: #1976d2;
  }
`;
