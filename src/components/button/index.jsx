import { StyledButton } from "./styles";

const Button = ({ onclick, children }) => {
  return (
    <>
      <StyledButton onClick={onclick}>{children}</StyledButton>
    </>
  );
};
export default Button;
