import React, { useContext } from "react";
import { DataContext } from "../context/form-context";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import "./Dados.css";

export const Dados = () => {
  const {
    faixa,
    renda,
    produtivas,
    irc,
    transferred,
    canceled,
    deflateIRC,
    deflateTMA,
  } = useContext(DataContext);

  return (
    <div id="results">
      <div className="results-group">
        <section id="description">
          <h1>Como foi feito o cálculo?</h1>
          <p>
            O cálculo da renda váriavel é feita a partir da multiplicação das
            suas chamadas produtivas reais pela porcentagem(%) de cancelamento,
            sendo considerando 4 tipos de multiplicadores que vão de acordo com
            a taxa
          </p>
        </section>
        <section id="dados">
          <div className="table-results">
            <span>
            Multiplicador: 
            </span>
            R${faixa}
            <AttachMoneyIcon />
          </div>
          <div className="table-results">
            <span>

            Produtivas Reais: 
            </span>
            {produtivas} 
            <AddIcCallIcon />
          </div>
          <div className="table-results">
          <span>
            Ligaram de volta: 
              </span>
            {irc} 
            <PhoneCallbackIcon />
          </div>
          <div className="table-results">
          <span>
              
            Total de transferidos: 
              </span>
            {transferred}
            <CompareArrowsIcon />
          </div>
          <div className="table-results">
          <span>
              
            Cancelados: 
              </span>
            {canceled}
            <RemoveCircleOutlineIcon />
          </div>

          <div className="table-results">
          <span>
              
            Deflação:
              </span>
            { (deflateIRC+deflateTMA)>100?"Está devendo a operadora kkkk":
              deflateIRC < 0.2 && deflateTMA < 0.3
              ? "0%"
              : deflateIRC > 0 && deflateTMA > 0
              ? ` ${((deflateIRC*100) + deflateTMA)}% (IRC e TMA)`
              : deflateIRC > 0 && deflateTMA < 0.3
              ? ` ${deflateIRC*100}%(IRC)`
              : ` ${deflateTMA}% (TMA)`}
            <MoneyOffIcon />
          </div>
          
        </section>
      </div>
        <div className="developedBy">
          <p>Desenvolvido por <a href="https://instagram.com/joao.vsz" target="_blank"> @joaovsz</a></p>
        </div>
    </div>
  );
};
