import React, { useContext } from 'react'
import { DataContext } from '../context/formContext'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';

import "./Dados.css"


export const Dados = () => {
const {faixa, renda, produtivas, irc, transferred, canceled, deflateIRC} = useContext(DataContext)

  return (
    <div id='results'>
      <div className="results-group">
        <section id="description">
        <h1>Como foi feito o cáculo?</h1>
        <p>O cálculo da renda váriavel é feita a partir da multiplicação das suas chamadas produtivas reais pela porcentagem(%) de cancelamento, sendo considerando 4 tipos de multiplicadores que vão de acordo com a taxa</p>
      </section>
      <section id="dados">
      
      <h3> Multiplicador: R${faixa}<AttachMoneyIcon/> </h3>
      <h3> Produtivas Reais: {produtivas} <AddIcCallIcon/></h3>
      <h3> Clientes que te rechamaram: {irc} <PhoneCallbackIcon/></h3>
      <h3> Total de transferidos: {transferred}<CompareArrowsIcon/> </h3>
      <h3> Contratos cancelados: {canceled}<RemoveCircleOutlineIcon/> </h3>
     <h3> Deflação: {deflateIRC<0.2? "Você não possui deflatores": `${deflateIRC*100}%`} <MoneyOffIcon/></h3>
      </section>
      </div>
      
     
    </div>
  )
}
