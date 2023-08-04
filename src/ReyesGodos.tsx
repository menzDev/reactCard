import React, {useState} from 'react'

function ReyesGodos() {
const [contador,setContador] = useState(0);
const [reyes,setReyes] = useState();

const reyesGodos = [
    {
        nombre: "pepin",
        aficion: "programar"
    },{
        nombre: "che",
        aficion: "programar con papi"      
    },
    {
        nombre: "lenin",
        aficion: "programar con che"
    }

]

const mostrar = () =>{
setContador(contador + 1)
if(contador+1 >= reyesGodos.length){
    setContador(0) 
}
setReyes(<p className='reyes'>Al Rey <span className='rojo'>{reyesGodos[contador].nombre}</span> le gusta <span className="verde">{reyesGodos[contador].aficion}</span></p>)
}
  return (
    <div className='godos'>
        <button onClick={mostrar} className='btnGodos'>Mostrar</button>
        <div>{reyes}</div>
    </div>
  )
}

export default ReyesGodos