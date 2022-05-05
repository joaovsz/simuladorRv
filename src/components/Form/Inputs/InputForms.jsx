import React, {  useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { Button, TextField } from "@mui/material";
import "./InputForms.css";
import {DataContext} from "../../context/formContext"


export const InputForms = () => {
  const { HandleInputResolution, HandleInputShortCall, HandleInputIRC, HandleInputTMA, HandleInputTransferred, HandleInputCancel, HandleInputCalls,Calcular, renda } = useContext(DataContext)
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#6C4C9C",
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#96BAFF",
      },
      
    },
  });
  return (
    <>
    <ThemeProvider theme={theme}>
    <div className="input-group">
    <h4 id="title">Informe abaixo os dados fornecidos pelo seu supervisor!</h4>
      <TextField
        size="small"
        style={{ marginBottom: 20, }}
        InputLabelProps={{ style: { fontFamily: "Poppins, 'sans-serif'" } }}
        id="outlined-number"
        label="Chamadas Atendidas"
        type="number"
        onChange={HandleInputCalls}
      />
      <TextField
        size="small"
        style={{ marginBottom: 20 }}
        InputLabelProps={{ style: { fontFamily: "Poppins, 'sans-serif'" } }}
        id="outlined-number"
        label="Taxa de Cancelamento(%)"
        type="number"
        onChange={HandleInputCancel}
      />
      <TextField
      InputLabelProps={{ style: { fontFamily: "Poppins, 'sans-serif'" } }}
        style={{ marginBottom: 20 }}
        size="small"
        id="outlined-number"
        label="Chamadas Transferidas"
        type="number"
        onChange={HandleInputTransferred}
      />
      <TextField
      InputLabelProps={{ style: { fontFamily: "Poppins, 'sans-serif'" } }}
        size="small"
        style={{ marginBottom: 20 }}
        id="outlined-number"
        label="Índice de Rechamada (IRC)"
        type="number"
        onChange={HandleInputIRC}
      />
      <TextField
      InputLabelProps={{ style: { fontFamily: "Poppins, 'sans-serif'" } }}
        size="small"
        style={{ marginBottom: 20 }}
        id="outlined-number"
        label="Tempo Médio de Atendimento (TMA)"
        type="number"
        onChange={HandleInputTMA}
      />
      <TextField
      InputLabelProps={{ style: { fontFamily: "Poppins, 'sans-serif'" } }}
        style={{ marginBottom: 20 }}
        size="small"
        id="outlined-number"
        label="ShortCall"
        type="number"
        onChange={HandleInputShortCall}
      />
      <TextField
      InputLabelProps={{ style: { fontFamily: "Poppins, 'sans-serif'" } }}
        size="small"
        style={{ marginBottom: 20 }}
        id="outlined-number"
        label="Taxa de Resolução Penalizada"
        type="number"
        onChange={HandleInputResolution}
      />
 <div className="Button">
      

       <Button
         style={{ borderRadius: 20, fontFamily: "Poppins, 'sans-serif'", fontWeight: "bold" }}
         className="button"
         id="next"
         variant="contained"
         onClick={()=>Calcular()}
         >
        Calcular
      </Button>
      <footer>
        <h4>Renda Variável: R$ {`${renda}`}</h4>
        </footer>
    </div>
    </div>
   
      </ThemeProvider>
     </>
  );
};
