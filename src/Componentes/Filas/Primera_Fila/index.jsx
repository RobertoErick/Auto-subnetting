import { useState } from "react";
import styled from "styled-components";
import Descripcion from "./Descripcion";
import Switch from "./Switch/Switch";
import Direccion_IP from "./Direccion_IP/Direccion_IP";
import VLSM from "./VLSM/VLSM";
import Clases from "./Clases";

// Contenedor principal de toda la primera fila
const Contenedor = styled.div`
  display: flex;
  height: auto;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: initial;
    flex-direction: column;
    gap: 60px;
  }
  @media (max-width: 390px){
    gap: 10px;
  }
`
//Contenedor del componente Descipcion
const Cont_desc = styled.div`
  width: 27%;
  height: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`
//Contenedor de los 3 componentes donde se escoje y escribe el subneteo
const Cont_Subneteo = styled.div`
  width: 40%;
  display:flex;
  flex-direction: column;
  gap: 5%;
  @media (max-width: 768px) {
    width: 100%;
    gap: 60px;
  }
  @media (max-width: 390px){
    gap: 10px;
  }
`
//Contenedor del Switch de prefijo, host y Subred
const Cont_Switch = styled.div`
  width: 100%;
  height: 14%;
`
//Contenedor del input de la direccion ip y prefijo
const Cont_IP = styled.div`
  width: 100%;
  height: 41%;
`
//Contenedor del switch de VLSM
const Cont_VLSM = styled.div`
  width: 100%;
  height: 35%;
`
//contenedor de las clases de red
const Cont_Clases = styled.div`
  width: 27%;
  @media (max-width: 768px) {
    width: 100%;
  }
`

function Primera_Fila({ handleDataSubmit }){
    const [selectedTag, setSelectedTag] = useState('prefijo');

    const handleSelectedTagChange = (newSelectedTag) => {
      setSelectedTag(newSelectedTag);
      console.log("Pasar desde el index la tag seleccionada: "+newSelectedTag);
    };

    const handleDataSubmitLocal = (direccionIp, calculo) => {
      handleDataSubmit(direccionIp, calculo); // Llama a la función en el componente padre
      console.log("Pasar desd el index la direccion ip y el calculo: "+direccionIp+" y "+calculo);
    };
  

    return(
        <Contenedor>
            {/* Primer contenedor */}
            <Cont_desc>
              <Descripcion />
            </Cont_desc>
            {/* Segundo Contenedor */}
            <Cont_Subneteo>
              {/* Primer Sub-contenedor */}
              <Cont_Switch>
                <Switch onSelectedTagChange={handleSelectedTagChange} />
              </Cont_Switch>
              {/* Segundo Sub-contenedor */}
              <Cont_IP>
                <Direccion_IP selectedTag={selectedTag} onDataSubmit={handleDataSubmitLocal}/>
              </Cont_IP>
              {/* Tercer Sub-contenedor */}
              <Cont_VLSM >
                <VLSM />
              </Cont_VLSM>
            </Cont_Subneteo>
            {/* Tercer Contenedor */}
            <Cont_Clases>
              <Clases />
            </Cont_Clases>
        </Contenedor>
    );
}

export default Primera_Fila;