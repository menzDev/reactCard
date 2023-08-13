import "./App.css";
import ComprarReyes from "./ComprarReyes";
import { useState } from "react";

function App() {
  const nombres = ["Atanagildo", "Che", "Pepin"];
  const [venta, setVenta] = useState(0)

  const cenaReyes = (e) =>{
    setVenta(e)
  }
  return (
    <>
      <div className="contenedor">
          <h1>Valor Total: {venta}</h1>
        <div className="container">
              <ComprarReyes cenarReyes={cenaReyes}/>
        </div>
      </div>
    </>
  );
}

export default App;
