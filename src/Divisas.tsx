import "./App.css";
import { useState } from "react";

const Divisas = () => {
  const [cantidad, setCantidad] = useState(0);
  const [cambioMoneda, setcambioMoneda] = useState(0);
  const pesosColombianos = {
    moneda: "Peso colombiano",
    cambio: 1000,
  }
  const cambios = [
    {
      moneda: "Euro",
      cambio: 0.00022,
    },
    {
      moneda: "Peso argentino",
      cambio: 0.067,
    },
    {
      moneda: "Peso mexicano",
      cambio: 0.0041,
    },
    {
      moneda: "Dólar",
      cambio: 0.00024,
    },
  ];

const pesos = (e) =>{
    const inputValue = e.target.value;
    setCantidad(inputValue);

    const result = cambios.map((el) => el.cambio * inputValue);
    setcambioMoneda(result);
}



  return (
    <>
      <div className="divisas">
          <label htmlFor="u0">{pesosColombianos.moneda}</label>
          <input id="u0" type="number" value={cantidad} onChange={pesos} />
          {cambios.map((el, indice)=>{
            return(
            <div className="divisas"key={indice}>
          <label htmlFor={indice}>{el.moneda}</label>
          <input id={indice} type="number" value={cambioMoneda[indice]}/>
          </div>
            )
          }
          )}
      </div>

    </>
  );
};

export default Divisas;
