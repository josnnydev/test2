 import { useState } from "react"


export const ContadorApp = ({value}) => {

    const [contador, setContador] = useState(value)

    const handleClick =()=>{
       setContador(contador + 1);
        console.log( "hi")
    }

    const handleRestartContador = ()=>{
        setContador(contador - contador) ;
    }
 
  return (
    <>
    <h1>Contador: </h1>
    <p>{contador}</p>
    <button  onClick={handleClick}>Soy un boton</button>
    <button onClick={handleRestartContador}>Reiniciar</button>
    </>
  )
}
