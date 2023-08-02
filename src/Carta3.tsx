import "./App.css";
import reysito from "./assets/rey_atanagildo.png";
import reyII from "./assets/rey_teodorico.png";
import reyIncognito from "./assets/rey_incognito.png";
import { useRef } from "react";

function Carta3() {
  const referencia = useRef();

  const cambiarRey = (i) => {
    if (i.target.src.includes("atanagildo")) {
      i.target.src = reyIncognito;
      i.target.parentNode.style.backgroundColor = 'white'
    } else {
      i.target.src = reysito;
      i.target.parentNode.style.backgroundColor = 'goldenrod'
    } 
    const cambiarRey2 = i;
  };
  return (
    <>
      <div className="contenedor">
        <div className="carta">
          <img onClick={cambiarRey} src={reysito} alt="" />
        </div>
      </div>
    </>
  );
}

export default Carta3;
