import React, { useContext } from "react";
import { createTheme,Button, TextField, ThemeProvider } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import  Select  from "@mui/material/Select";
import "./InputForms.css";
import { DataContext } from "../../context/formContext";

export const InputForms = () => {
  const {
    HandleInputResolution,
    HandleInputShortCall,
    HandleInputIRC,
    HandleInputTMA,
    HandleInputTransferred,
    HandleInputCancel,
    HandleInputCalls,
    Calcular,
    renda,
    term,
    selectTerms
  } = useContext(DataContext);
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
          <h2>Simule seus ganhos!</h2>
          <h4 id="title">
            Informe abaixo os dados fornecidos pelo seu supervisor!
          </h4>
          <TextField
            size="small"
            style={{ marginBottom: 20 }}
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
            label="Chamadas Transferidas(%)"
            type="number"
            onChange={HandleInputTransferred}
          />
          <TextField
            InputLabelProps={{ style: { fontFamily: "Poppins, 'sans-serif'" } }}
            size="small"
            style={{ marginBottom: 20 }}
            id="outlined-number"
            label="Índice de Rechamada(%)"
            type="number"
            onChange={HandleInputIRC}
          />
          <TextField
            InputLabelProps={{ style: { fontFamily: "Poppins, 'sans-serif'" } }}
            size="small"
            style={{ marginBottom: 20 }}
            id="outlined-number"
            label="Tempo Médio de Atendimento (%)"
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
            label="Resolução Penalizada (%)"
            type="number"
            onChange={HandleInputResolution}
          /> 
          <div className="Button">
            
            

            <FormControl sx={{ m: 1, maxWidth: 150, minWidth:150 }}>
        <InputLabel id="demo-select-small">Termo de Pactuação</InputLabel>
        <Select
          size="small"
          labelId="demo-select-small"
          id="demo-select-small"
          value={term}
          onChange={selectTerms}
          label="Age"
        >
          <MenuItem value={0}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>OiTv Novato 04/2022</MenuItem>
          <MenuItem value={2}>OiTv Novato 05/2022</MenuItem>
          <MenuItem value={3}>OiTv Veterano 05/2022</MenuItem>
        </Select>
      </FormControl>
        
         
        
            <Button
            size="small"
              style={{
                borderRadius: 20,
                fontFamily: "Poppins, 'sans-serif'",
                fontWeight: "bold",
              }}
              className="button"
              id="next"
              variant="contained"
              onClick={() => Calcular()}
            >
              Calcular
            </Button>
            <footer>
              <h4>
                {renda<=0?"Sem RV este mês":`Renda Variável: ${renda.toFixed(2)}`
                }</h4>
            </footer>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};
