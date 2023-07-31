import './App.css'
import Rey1 from "../src/assets/rey_recesvinto.png";
import Rey2 from "../src/assets/rey_teodorico.png";
import { useRef } from "react";

function Evento() {
    const cambio = 4
    const referencia = useRef();
    const valorNumerico =(e)=>{
        e.target.innerHTML = Number(e.target.innerHTML) + 1
        if(e.target.innerHTML >= 10 ){
            e.target.innerHTML = 1
        }
        if(e.target.innerHTML >=8){
        e.target.style.backgroundColor = "red"
    }else{
        e.target.style.backgroundColor = "blue"
    }
}
    const cambiarValor = ()=>{
        referencia.current.innerHTML = Number(referencia.current.innerHTML )* cambio
    }
    const cambioInput = (e) =>{
        referencia.current.innerHTML = e.target.value 
        
    }
    const cambiarRey = (e) =>{
        if (e.target.src.includes("recesvinto")) {
            e.target.src = Rey2
        }else{
            e.target.src = Rey1
    }
}
    return(
        <>
        <div className="contenedorEvento">
            <p className='p' ref={referencia} onClick={valorNumerico}>1</p>
            <button onClick={cambiarValor}>Cambiar Valor</button>
            <img onClick={cambiarRey} src={Rey1} />
            <input onChange={cambioInput} type="text" />
        </div>
        </>
    )
}


export default Evento