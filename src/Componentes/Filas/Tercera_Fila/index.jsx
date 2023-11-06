import styled from "styled-components";
import Resultado from "./Resultado";

const Cont_res = styled.div`
  margin: 42px 0 42px 0;
  width: 100%;
  height: 100px;
  @media (max-width: 768px) {
    position: relative;
    top: 800px;
  }
`

function Tercera_Fila(props){
    
    const {direccionIp, calculo, resultado} = props

    return(
        <Cont_res>
            <Resultado direccionIp={direccionIp} calculo={calculo} resultado={resultado}/>
        </Cont_res>
    );
}

export default Tercera_Fila;