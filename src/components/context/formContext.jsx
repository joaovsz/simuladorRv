import {useState, createContext, useEffect} from 'react'

export const DataContext = createContext()

export function TableProvider(props){

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

  function HandleInputCalls (event) {
    let valueInput = event.target.value
    setCalls(valueInput);
  };
  function HandleInputCancel(event){
    let valueInput = event.target.value;
    let canceladas = Math.round((calls*valueInput)/100)
    setCancel(canceladas)

   if(valueInput >=0 && valueInput<=15.4){
     setFaixa(1.5)
    }else if(valueInput>15.4 && valueInput <= 17.6){
      setFaixa(0.94)
      
    
   }else if(valueInput>17.6 && valueInput <= 19.8){
    setFaixa(0.75)
   
  }else if(valueInput>19.8 && valueInput <= 25.85){
    setFaixa(0.56)
    
  }else{
    return console.log("TAXA MUITO ALTA")
  }

  };

  function HandleInputTransferred(event) {
    let valueInput = event.target.value
    let transferidas = Math.round((calls*valueInput)/100)
    setTransferred(transferidas);
  };
  function HandleInputIRC (event) {
    let valueInput= event.target.value
    let irc = Math.round((calls*valueInput)/100)
    setIrc(irc);
    if(valueInput >=15.95 && valueInput <17.05){
      setDeflateIRC(0.2)
    }else if(valueInput>=17.5 && valueInput<=18.15){
      setDeflateIRC(0.5)
    }else if(valueInput>=18.15){
      setDeflateIRC(0.9)
    }
  };
  function HandleInputTMA (event) {
    setTma(event.target.value);
  };
  function HandleInputShortCall(event)  {
    setShortCall(event.target.value);
  };
  function HandleInputResolution (event) {
    setResolution(event.target.value);
  };

    
  
  useEffect(()=> {
    function ProdutivasReais () {
      let retiradas = Math.round((calls - canceled - transferred - irc - shortCall))
      let produtivasReais =Math.round(( retiradas * resolution) /100)
      let rendimento = Math.round(produtivasReais*faixa)
      setProdutivas(produtivasReais)
      setRenda(rendimento)
    }
    ProdutivasReais() 
  }, [resolution ])
  
  
    

   return (

    <DataContext.Provider value={{ produtivas, renda,canceled, irc, transferred, faixa, HandleInputResolution, HandleInputShortCall, HandleInputIRC, HandleInputTMA, HandleInputTransferred, HandleInputCancel, HandleInputCalls}}>
    {props.children}
</DataContext.Provider>
   )
}