import React, { useState } from 'react'


function Contador() {
  const [contador, setContador] = useState(0);
  const suma = () =>{
    setContador(contador + 1);
  }
  const resta = () =>{
    setContador(contador - 1);
  }
  const reset = () =>{
    setContador(0)
  }
  return (
    <div className='contador'>
       <button onClick={suma}>+</button>
       <h1>{contador}</h1>
       <button onClick={resta}>-</button>
       <br />
       <button onClick={reset}>reset</button>
    </div>
  )
}

export default Contador