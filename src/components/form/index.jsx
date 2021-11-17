import { TextField } from "@mui/material";
import Button from "../button";
import { FormContainer } from "./styles";
import { useState } from "react";

const Form = ({ msError, handleItems }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <FormContainer>
      <section>
        <TextField
          fullWidth
          label="Digite o nome do repositório"
          id="fullWidth"
          error={!!msError.message}
          helperText={
            msError.message && "Não foi possível encontrar o repositório"
          }
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button onclick={() => handleItems(inputValue)}>Enviar</Button>
      </section>
    </FormContainer>
  );
};
export default Form;
