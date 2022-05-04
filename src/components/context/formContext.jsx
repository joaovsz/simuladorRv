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

  function HandleInputCalls (event) {
    setCalls(event.target.value);
  };
  function HandleInputCancel(event){
    setCancel(event.target.value)
   if(canceled<=15.4){
     setFaixa(1.5)
     console.log(faixa)
   }else if(canceled>15.4 && canceled <= 17.6){
     setFaixa(0.94)
   }else if(canceled>17.6 && canceled <= 19.8){
    setFaixa(0.75)
  }else if(canceled>19.8 && canceled <= 25.85){
    setFaixa(0.56)
  }
  };
  function HandleInputTransferred(event) {
    setTransferred(event.target.value);
  };
  function HandleInputIRC (event) {
    setIrc(event.target.value);
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
      let canceladas = Math.round((calls*canceled)/100)
      let transferidas = Math.round((calls*transferred)/100)
      let rechamadas = Math.round((calls*irc)/100)
      let retiradas = Math.round((calls - canceladas - transferidas - rechamadas - shortCall))
      let produtivasReais =Math.round(( retiradas * resolution) /100)
      setProdutivas(produtivasReais)
      setRenda(produtivasReais*faixa)
    }

    ProdutivasReais() 
  }, [calls, canceled, transferred, irc, tma, shortCall, resolution ])
  
  
    

   return (

    <DataContext.Provider value={{ produtivas, renda, HandleInputResolution, HandleInputShortCall, HandleInputIRC, HandleInputTMA, HandleInputTransferred, HandleInputCancel, HandleInputCalls}}>
    {props.children}
</DataContext.Provider>
   )
}