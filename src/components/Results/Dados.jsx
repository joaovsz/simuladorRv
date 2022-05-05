import React, { useContext } from 'react'
import { DataContext } from '../context/formContext'
import "./Dados.css"


export const Dados = () => {
const {faixa, renda, produtivas, irc, transferred, canceled} = useContext(DataContext)

  return (
    <div id='results'>
      <section id="description">
        <h1>Como foi feito o cáculo?</h1>
        <p>O cálculo da renda váriavel é feita a partir da multiplicação das suas chamadas produtivas reais pela porcentagem(%) de cancelamento, sendo considerando 4 tipos de multiplicadores que vão de acordo com a taxa</p>
      </section>
      <section id="dados">
      
      <h3>Multiplicador: {faixa} </h3>
      <h3>Produtivas Reais: {produtivas} </h3>
      <h3>Clientes que te rechamaram: {irc} </h3>
      <h3>Total de transferidos: {transferred} </h3>
      <h3>Contratos cancelados: {canceled} </h3>
      <footer>
        <h3>Renda Variável: R$ {`${renda}`}</h3>
        </footer>
      </section>
    </div>
  )
}
