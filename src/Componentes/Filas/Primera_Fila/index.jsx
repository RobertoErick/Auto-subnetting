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
`
//Contenedor del componente Descipcion
const Cont_desc = styled.div`
  width: 27%;
  height: auto;
`
//Contenedor de los 3 componentes donde se escoje y escribe el subneteo
const Cont_Subneteo = styled.div`
  width: 40%;
  display:flex;
  flex-direction: column;
  gap: 5%;
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
`

function Primera_Fila(){
    const [selectedTag, setSelectedTag] = useState(null);

    const handleSelectedTagChange = (newSelectedTag) => {
      setSelectedTag(newSelectedTag);
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
                <Direccion_IP selectedTag={selectedTag} />
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