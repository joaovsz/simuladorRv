import React, { useContext } from 'react'
import { DataContext } from '../context/formContext'
import "./Dados.css"


export const Dados = () => {
const {renda, produtivas} = useContext(DataContext)

  return (
    <div id='results'>
      <h3>Produtivas Reais: {produtivas} </h3>
      <h3>Renda Variável: R${`${renda},00`}</h3>
    </div>
  )
}
