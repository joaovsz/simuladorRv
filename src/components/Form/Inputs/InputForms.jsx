import React, {  useContext } from "react";
import { Button, TextField } from "@mui/material";
import "./InputForms.css";
import {DataContext} from "../../context/formContext"


export const InputForms = () => {
  const { HandleInputResolution, HandleInputShortCall, HandleInputIRC, HandleInputTMA, HandleInputTransferred, HandleInputCancel, HandleInputCalls, } = useContext(DataContext)

  return (
    <div className="input-group">
      <TextField
        size="small"
        style={{ marginBottom: 20 }}
        id="outlined-number"
        label="Chamadas Atendidas"
        type="number"
        onChange={HandleInputCalls}
      />
      <TextField
        size="small"
        style={{ marginBottom: 20 }}
        id="outlined-number"
        label="Taxa de Cancelamento(%)"
        type="number"
        onChange={HandleInputCancel}
      />
      <TextField
        style={{ marginBottom: 20 }}
        size="small"
        id="outlined-number"
        label="Chamadas Transferidas"
        type="number"
        onChange={HandleInputTransferred}
      />
      <TextField
        size="small"
        style={{ marginBottom: 20 }}
        id="outlined-number"
        label="Índice de Rechamada (IRC)"
        type="number"
        onChange={HandleInputIRC}
      />
      <TextField
        size="small"
        style={{ marginBottom: 20 }}
        id="outlined-number"
        label="Tempo Médio de Atendimento (TMA)"
        type="number"
        onChange={HandleInputTMA}
      />
      <TextField
        style={{ marginBottom: 20 }}
        size="small"
        id="outlined-number"
        label="ShortCall"
        type="number"
        onChange={HandleInputShortCall}
      />
      <TextField
        size="small"
        style={{ marginBottom: 20 }}
        id="outlined-number"
        label="Taxa de Resolução Penalizada"
        type="number"
        onChange={HandleInputResolution}
      />

      {/* <Button
        style={{ borderRadius: 10 }}
        className="button"
        id="next"
        variant="contained"
       
      >
        Calcular
      </Button> */}
    </div>
  );
};
