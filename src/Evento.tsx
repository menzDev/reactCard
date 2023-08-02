import "./App.css";
import reysito from "./assets/rey_atanagildo.png";
import reyII from "./assets/rey_teodorico.png";
import reyIII from "./assets/rey_ervigio.png";
import reyIncognito from "./assets/rey_incognito.png";
import { useRef } from "react";

function Evento() {
  const referencia = useRef();
  let moneda = 4;

  const valor = () => {
    referencia.current.innerHTML = Number(referencia.current.innerHTML) * moneda
  }

  const aumento = (e) => {
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
    if(e.target.innerHTML > 8){
e.target.style.backgroundColor = "blue"
} if (e.target.innerHTML > 9) {
    e.target.innerHTML = 1
    e.target.style.backgroundColor = "goldenrod"
} else {
    
}
  };

  const captar = (c) =>{
    referencia.current.innerHTML = c.target.value
  }

  const cambiarRey =(i) =>{
      if(i.target.src.includes("atanagildo")){
        i.target.src = reyII
    } 
    else{
        i.target.src = reysito
    }
  }
  return (
    <>
      <div className="contenedor">
        <div className="carta">
          <p ref={referencia} onClick={aumento} className="p">
            1
          </p>
          <button onClick={valor}>click</button>
          <img onClick={cambiarRey} src={reysito} alt="" />
          <input onChange={captar} type="text" />
        </div>
      </div>
    </>
  );
}

export default Evento;
