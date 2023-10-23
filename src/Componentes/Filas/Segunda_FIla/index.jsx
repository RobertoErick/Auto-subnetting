import styled from "styled-components";
import Caracteristicas from "./Caracteristicas";
import Conversion from "./Conversion";
import Operaciones from "./Operaciones";

//Contenedor principal de la segunda fila
const Contenedor = styled.div`
  display:flex;
  height: auto;
  margin: 42px 0 0 0;
  gap: 2%;
`
//Contenedor de las caracteristicas de la red
const Cont_Caract = styled.div`
  height: auto;
  width: 23%;
`
//Cpntenedor de las conversiones del subneteo
const Cont_Conv = styled.div`
  height: auto;
  width: 50%;
`
//contenedor de las operaciones
const Cont_Oper = styled.div`
  height: auto;
  width: 23%;
`

function Segunda_Fila(){
    return(
        <Contenedor>
            {/* primer contenedor */}
            <Cont_Caract>
              <Caracteristicas />
            </Cont_Caract>
            {/* Segundo contenedor */}
            <Cont_Conv>
              <Conversion />
            </Cont_Conv>
            {/* Tercer contenedor */}
            <Cont_Oper>
              <Operaciones />
            </Cont_Oper>
        </Contenedor>
    );
}

export default Segunda_Fila;