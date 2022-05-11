import React, { useState, createContext, useEffect } from "react";

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
  const [popOver, setPopOver] = useState(false);

function openForm(){
  term==0?alert("Selecione o termo"):setPopOver(true),setTerm(term)
 ;
}

  function resetTerm(){
    setCalls(0)
    setCancel(0)
    setTransferred(0)
    setIrc(0)
    setRenda(0)
    setTma(0)
    setShortCall(0)
    setResolution(0)
    setProdutivas(0)
    setFaixa(0)
    setPopOver(!popOver)
    setTerm(null);
  }

  function selectTerms(event) {
   
    setTerm(event.target.value);
    
    
  }


  const termos = [
    {
      name: "OiTv Novato",
      taxa: {
        Q1:15.4,
        Q2:18.15,
        Q3:20.9,
        Q4:23.65
      },
      multiplicadores: {
        Q1: 1.5,
        Q2: 0.94,
        Q3: 0.75,
        Q4: 0.56,
      },
      taxaIRC:{
        Q1:13.75,
        Q2:14.85,
        Q3:15.95,
      },
      irc:{
        Q1:0.2,
        Q2:0.5,
        Q3:0.9,
      },
      tma:{
        Q1:650
      }
    },
    {
      name: "OiTv Veterano",

      taxa: {
        Q1:14,
        Q2:16.5,
        Q3:19,
        Q4:21.5
      },

      multiplicadores: {
        Q1: 2,
        Q2: 1.25,
        Q3: 1,
        Q4: 0.75,
      },

      taxaIRC:{
        Q1:12.5,
        Q2:13.5,
        Q3:14.5,
      },
      irc:{
        Q1:0.2,
        Q2:0.5,
        Q3:0.9,
      },
      tma:{
        Q1:620
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

    switch (term) {
      case 1:
        if (valueInput > 0 && valueInput <= termos[0].taxa.Q1) {
          setFaixa(termos[0].multiplicadores.Q1);
        } else if (
          valueInput > termos[0].taxa.Q1 &&
          valueInput <= termos[0].taxa.Q2
        ) {
          setFaixa(termos[0].multiplicadores.Q2);
        } else if (
          valueInput > termos[0].taxa.Q2 &&
          valueInput <= termos[0].taxa.Q3
        ) {
          setFaixa(termos[0].multiplicadores.Q3);
        } else if (
          valueInput > termos[0].taxa.Q3 &&
          valueInput <= termos[0].taxa.Q4
        ) {
          setFaixa(termos[0].multiplicadores.Q4);
        }else{
          setFaixa(0)
        }
        break;
      case 2:
        if (valueInput > 0 && valueInput <= termos[1].taxa.Q1) {
          setFaixa(termos[1].multiplicadores.Q1);
        } else if (
          valueInput > termos[1].taxa.Q1 &&
          valueInput <= termos[1].taxa.Q2
        ) {
          setFaixa(termos[1].multiplicadores.Q2);
        } else if (
          valueInput > termos[1].taxa.Q2 &&
          valueInput <= termos[1].taxa.Q3
        ) {
          setFaixa(termos[1].multiplicadores.Q3);
        } else if (
          valueInput > termos[1].taxa.Q3 &&
          valueInput <= termos[1].taxa.Q4
        ) {
          setFaixa(termos[1].multiplicadores.Q4);
        }else{
          setFaixa(0)
        }
        break;

      default:
        alert("Selecione primeiro o termo de pactuação");
        break;
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
    switch (term) {
      case 1:
        if (valueInput >= termos[0].taxaIRC.Q1 && valueInput < termos[0].taxaIRC.Q2) {
      setDeflateIRC(termos[0].irc.Q1);
    } else if (valueInput >= termos[0].taxaIRC.Q2 && valueInput < termos[0].taxaIRC.Q3) {
      setDeflateIRC(termos[0].irc.Q2);
    } else if (valueInput >= termos[0].taxaIRC.Q3) {
      setDeflateIRC(termos[0].irc.Q3);
    } else {
      setDeflateIRC(0);
    }
        break;
    
      default:
        break;
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
        popOver,
        openForm,
        resetTerm,
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
