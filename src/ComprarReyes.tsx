import React from 'react';
import che from "./assets/rey_atanagildo.png";
import "./CartaReyes.css";


export default function ComprarReyes() {
  const reyes=[
    {
      nombre:"Atanagildo",
      color:"darkolivegreen",
      precio:178
    },{
      nombre:"Ervigio",
      color:"crimson",
      precio:169
    },{
      nombre:"Ataúlfo",
      color:"peru",
      precio:81
    },{
      nombre:"Leogivildo",
      color:"darkmagenta",
      precio:126
    },{
      nombre:"Recesvinto",
      color:"royalblue",
      precio:141
    },{
      nombre:"Sisebuto",
      color:"teal",
      precio:69
    }
  ]


  return (
reyes.map((el, index) =>{
  return(
    <div className='cartaReyes' style={{ backgroundColor: reyes[index].color }} key={index}>
      <p className='nombre'>{reyes[index].nombre}</p>
      <img className='imgReyes' src={che} alt="" />
      <p className="precios">Precio</p>
      <p className='valorPrecio'>${reyes[index].precio}</p>
      <div className="btn"><button>Comprar</button></div>
    </div>   
  )
})
  )
}
