import "./App.css"
import Header from "./Componentes/Header";
import Primera_Fila from "./Componentes/Filas/Primera_Fila";
import Segunda_Fila from "./Componentes/Filas/Segunda_FIla";
import Tercera_Fila from "./Componentes/Filas/Tercera_Fila";

function App() {
  return (
    <>
      <Header />
      <main className="contenido">
          <Primera_Fila />
          <Segunda_Fila />
          <Tercera_Fila />
      </main>
    </>
  );
}

export default App;
