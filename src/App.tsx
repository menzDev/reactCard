import "./App.css";
import ComprarReyes from "./ComprarReyes";
import { useState } from "react";

function App() {
 
  const nombres = ["Atanagildo", "Che", "Pepin"];
  return (
    <>
      <div className="contenedor">
        <div className="container">
              <ComprarReyes />
        </div>
      </div>
    </>
  );
}

export default App;
