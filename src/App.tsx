import "./App.css";
import ComprarReyes from "./ComprarReyes";

function App() {
  const nombres = ["Atanagildo", "Che", "Pepin"];
  return (
    <>
      <div className="contenedor">
        <h2>Total a pagar: $ 0 </h2>
        <div className="container">
          <ComprarReyes />
        </div>
      </div>
    </>
  );
}

export default App;
