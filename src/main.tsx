import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Evento from "./Evento.tsx";
import Carta3 from "./Carta3.tsx";
import Contador from "./Contador.js";
import './App.css'
import ReyesGodos from './ReyesGodos.tsx';
import Divisas from "./Divisas.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
{/*     <Evento/> */}
{/*     <Carta3/> */}
    {/* <Contador/> */}
   {/*  <ReyesGodos/> */}
   <Divisas/>
  </React.StrictMode>,
)
