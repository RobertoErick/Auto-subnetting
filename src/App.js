import "./App.css"
import { useState } from "react";
import Header from "./Componentes/Header";
import Primera_Fila from "./Componentes/Filas/Primera_Fila";
import Segunda_Fila from "./Componentes/Filas/Segunda_FIla";
import Tercera_Fila from "./Componentes/Filas/Tercera_Fila";

function App() {
  const [direccionIp, setDireccionIp] = useState('');
  const [calculo, setCalculo] = useState('');

  const handleDataSubmitFather = (direccionIp, calculo) => {

    setDireccionIp(direccionIp);
    setCalculo(calculo);
  }

  return (
    <>
      <Header />
      <main className="contenido">
          <Primera_Fila handleDataSubmit={handleDataSubmitFather}/>
          <Segunda_Fila direccionIp={direccionIp} calculo={calculo}/>
          <Tercera_Fila />
      </main>
    </>
  );
}

export default App;
