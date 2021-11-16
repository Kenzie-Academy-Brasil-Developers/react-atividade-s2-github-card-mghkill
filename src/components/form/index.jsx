import Card from "../cards";
import { TextField } from "@mui/material";
import Button from "../button";
import { FormContainer } from "./styles";
import { useState } from "react";
const Form = ({ apiData, handleItems }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <FormContainer>
      <TextField
        fullWidth
        label="Faça sua pesquisa"
        id="fullWidth"
        error={!!apiData.message}
        helperText={
          apiData.message && "Não foi possível encontrar a pesquisa informada"
        }
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button onclick={handleItems(inputValue)}>Enviar</Button>

      {apiData.message && <Card apiData={apiData} handleItems={handleItems} />}
    </FormContainer>
  );
};
export default Form;
