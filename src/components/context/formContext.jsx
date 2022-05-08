import { useState, createContext, useEffect } from "react";

export const DataContext = createContext();

export function TableProvider(props) {
  const [toggle, setToggle] = useState(false);
  const [calls, setCalls] = useState(0);
  const [canceled, setCancel] = useState(0);
  const [transferred, setTransferred] = useState(0);
  const [irc, setIrc] = useState(0);
  const [tma, setTma] = useState(0);
  const [shortCall, setShortCall] = useState(0);
  const [resolution, setResolution] = useState(0);
  const [produtivas, setProdutivas] = useState(0);
  const [renda, setRenda] = useState(0);
  const [faixa, setFaixa] = useState(0);
  const [deflateIRC, setDeflateIRC] = useState(0);
  const [deflateTMA, setDeflateTMA] = useState(0);
  const [term, setTerm] = useState(0);

  function selectTerms(event) {
    console.log(term);
    setTerm(event.target.value);
  }
  const termos = [
    {
      name: "OiTv Novato",
      taxa: {
        faixa1:15.4,
        faixa2:17.6,
        faixa3:19.8,
        faixa4:25.85
      },
      multiplicadores: {
        faixa1: 1.5,
        faixa2: 0.94,
        faixa3: 0.75,
        faixa4: 0.56,
      },
      taxaIRC:{
        faixa1:15.95,
        faixa2:17.5,
        faixa3:18.5,
      },
      irc:{
        faixa1:0.2,
        faixa1:0.5,
        faixa1:0.9,
      },
      tma:{
        faixa1:650
      }
    },
    {
      name: "OiTv Veterano",

      taxa: {
        faixa1:14.4,
        faixa2:16.6,
        faixa3:18.8,
        faixa4:23.85
      },

      multiplicadores: {
        faixa1: 2,
        faixa2: 1.5,
        faixa3: 0.95,
        faixa4: 0.74,
      },

      taxaIRC:{
        faixa1:13.5,
        faixa2:15.8,
        faixa3:17.9,
      },
      irc:{
        faixa1:0.2,
        faixa2:0.5,
        faixa3:0.9,
      },
      tma:{
        faixa1:620
      }
    },
  ];
  function Calcular() {
    if (
      calls == 0 ||
      canceled == 0 ||
      transferred == 0 ||
      irc == 0 ||
      tma == 0 ||
      shortCall == 0 ||
      resolution == 0
    ) {
      alert("Preencha todos os campos corretamente");
    } else {
      setToggle(!toggle);
    }
  }

  function HandleInputCalls(event) {
    let valueInput = Math.round(event.target.value);
    setCalls(valueInput);
  }
  function HandleInputCancel(event) {
    let valueInput = event.target.value;
    let canceladas = Math.round((calls * valueInput) / 100);
    setCancel(canceladas);

    if (valueInput >= 0 && valueInput <= 15.4) {
      setFaixa(1.5);
    } else if (valueInput > 15.4 && valueInput <= 17.6) {
      setFaixa(0.94);
    } else if (valueInput > 17.6 && valueInput <= 19.8) {
      setFaixa(0.75);
    } else if (valueInput > 19.8 && valueInput <= 25.85) {
      setFaixa(0.56);
    } else {
      return console.log("TAXA MUITO ALTA");
    }
  }

  function HandleInputTransferred(event) {
    let valueInput = event.target.value;
    let transferidas = Math.round((calls * valueInput) / 100);
    setTransferred(transferidas);
  }
  function HandleInputIRC(event) {
    let valueInput = event.target.value;
    let irc = Math.round((calls * valueInput) / 100);
    setIrc(irc);
    if (valueInput >= 15.95 && valueInput < 17.5) {
      setDeflateIRC(0.2);
    } else if (valueInput >= 17.5 && valueInput <= 18.15) {
      setDeflateIRC(0.5);
    } else if (valueInput >= 18.15) {
      setDeflateIRC(0.9);
    } else {
      setDeflateIRC(0);
    }
  }
  function HandleInputTMA(event) {
    let value = Math.round(event.target.value);
    value >= 650 ? setDeflateTMA(0.3) : setDeflateTMA(0);
    setTma(value);
  }
  function HandleInputShortCall(event) {
    setShortCall(Math.round(event.target.value));
  }
  function HandleInputResolution(event) {
    setResolution(Math.round(event.target.value));
  }

  useEffect(() => {
    function ProdutivasReais() {
      let retiradas = Math.round(
        calls - canceled - transferred - irc - shortCall
      );
      let produtivasReais = Math.round((retiradas * resolution) / 100);
      let rendimento = Math.round(produtivasReais * faixa);
      let deflatorIRC = deflateIRC * rendimento;
      let deflatorTMA = deflateTMA * rendimento;
      setProdutivas(produtivasReais);
      if (deflateIRC > 0 && deflateTMA > 0) {
        setRenda(rendimento - (deflatorIRC + deflatorTMA));
      } else if (deflateIRC > 0 && deflateTMA < 0.3) {
        setRenda(rendimento - deflatorIRC);
      } else if (deflateIRC < 0.2 && deflateTMA > 0) {
        setRenda(rendimento - deflatorTMA);
      } else {
        setRenda(rendimento);
      }
    }
    ProdutivasReais();
  }, [toggle]);

  return (
    <DataContext.Provider
      value={{
        produtivas,
        renda,
        canceled,
        irc,
        transferred,
        faixa,
        deflateIRC,
        deflateTMA,
        term,
        Calcular,
        HandleInputResolution,
        HandleInputShortCall,
        HandleInputIRC,
        HandleInputTMA,
        HandleInputTransferred,
        HandleInputCancel,
        HandleInputCalls,
        selectTerms,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
