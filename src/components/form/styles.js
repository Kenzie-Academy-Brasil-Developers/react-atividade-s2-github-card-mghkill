import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  width: 70%;
  flex-direction: column;
  min-width: 280px;
  margin-top: 3rem;
  @media only screen and (min-width: 900px) {
    max-width: 680px;
  }
  section {
    display: flex;
    width: 98%;
    margin: 0 auto;
  }
`;
