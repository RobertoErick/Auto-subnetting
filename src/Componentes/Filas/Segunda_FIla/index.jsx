import styled from "styled-components";
import Caracteristicas from "./Caracteristicas";
import Conversion from "./Conversion";
import Operaciones from "./Operaciones";
import { useState } from "react";

//Contenedor principal de la segunda fila
const Contenedor = styled.div`
  display:flex;
  height: auto;
  margin: 42px 0 0 0;
  gap: 2%;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 60px;
  }
  @media (max-width: 390px){
    gap: 10px;
  }
`
//Contenedor de las caracteristicas de la red
const Cont_Caract = styled.div`
  height: auto;
  width: 23%;
  @media (max-width: 768px) {
    width: 100%;
  }
`
//Cpntenedor de las conversiones del subneteo
const Cont_Conv = styled.div`
  height: auto;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`
//contenedor de las operaciones
const Cont_Oper = styled.div`
  height: auto;
  width: 23%;
  @media (max-width: 768px) {
    width: 100%;
  }
`

function Segunda_Fila(props){
  const { direccionIp, calculo } = props;

  const [ conversion, setConversion] = useState("");
  const [ operacion, setOperacion] = useState("");

  const handleConversionHecha = (conversionHecha) => {
    setConversion(conversionHecha);
    console.log("pasar los datos mediante index: "+conversionHecha);
  };

  const handleOperacion = (operacionHecha) => {
    setOperacion(operacionHecha);
    console.log("pasar los datos mediante index: "+operacionHecha);
  };

  const handleResultado = (resultado) => {
    props.onResultado(resultado);
    console.log("pasar los datos mediante index: "+resultado);
  }

    return(
        <Contenedor>
            {/* primer contenedor */}
            <Cont_Caract>
              <Caracteristicas direccionIp={direccionIp} calculo={calculo}  onConversionHecha={handleConversionHecha} onOperacion={handleOperacion}/>
            </Cont_Caract>
            {/* Segundo contenedor */}
            <Cont_Conv>
              <Conversion direccionIp={direccionIp} calculo={calculo} conversion={conversion} />
            </Cont_Conv>
            {/* Tercer contenedor */}
            <Cont_Oper>
              <Operaciones operacion={operacion} onResultado={handleResultado}/>
            </Cont_Oper>
        </Contenedor>
    );
}

export default Segunda_Fila;