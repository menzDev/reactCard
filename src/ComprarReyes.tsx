import React from 'react';
import { useState } from "react";
import che from "./assets/rey_atanagildo.png";
import leo from "./assets/rey_leogivildo.png";
import ervi from "./assets/rey_ervigio.png";
import atau from "./assets/rey_ataulfo.png";
import teo from "./assets/rey_teodorico.png";
import buto from "./assets/rey_sisebuto.png";
import res from "./assets/rey_recesvinto.png";


import "./CartaReyes.css";


export default function ComprarReyes() {
  const [total,setTotal] = useState(0)
  
  const reyes=[
    {
      nombre:"Atanagildo",
      color:"darkolivegreen",
      precio:178,
      img:che
    },{
      nombre:"Ervigio",
      color:"crimson",
      precio:169,
      img:ervi
    },{
      nombre:"Ataúlfo",
      color:"peru",
      precio:81,
      img:atau
      
    },{
      nombre:"Leogivildo",
      color:"darkmagenta",
      precio:126,
      img:leo
    },{
      nombre:"Recesvinto",
      color:"royalblue",
      precio:141,
      img:res
    },{
      nombre:"Sisebuto",
      color:"teal",
      precio:69,
      img:buto
    }
  ]

  const comprar = () => {

  };
  return (
reyes.map((el, index) =>{
 
  return(
    <div className='cartaReyes' style={{ backgroundColor: reyes[index].color }} key={index}>
      <p className='nombre'>{reyes[index].nombre}</p>
      <img className='imgReyes' src={reyes[index].img} alt="" />
      <p className="precios">Precio</p>
      <p className='valorPrecio'>${reyes[index].precio}</p>
      <div className="btn"><button onClick={comprar}>Comprar</button></div>
    </div>   
  )
})
  )
}
