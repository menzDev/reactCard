import './App.css'
import rey1 from "../src/assets/rey_atanagildo.png";
import rey2 from "../src/assets/rey_ataulfo.png";
import rey3 from "../src/assets/rey_ervigio.png";

function App() {
const nombres = ["Atanagildo", "Che", "Pepin"]
  return (
    <>
      <div className="contenedor">
        <div className="card">
          <img src={rey1}/>
          <p>{nombres[0]}</p>
        </div>
        <div className="card">
          <img src={rey2}/>
          <p>{nombres[1]}</p>
        </div>
        <div className="card">
          <img src={rey3}/>
          <p>{nombres[2]}</p>
        </div>
      </div>
    </>
  )
}

export default App
