import styled from "styled-components";
import Duda from "../../../../Img/Duda.png";

const Contenedor = styled.div`
    border: 5px solid #2CC24D;
    width: 100%;
    height: 100%;
    text-align: center;
`

const Titulo = styled.div`
    display: inline-block;
`

function Switch(){
    return(
        <Contenedor className="contenedor">
                <Titulo className="titulo" >
                    <a>Prefijo</a> / <a>Host</a> / <a>Subred</a>
                    <img className="duda" src={Duda} alt="digno de pregunta" />
                </Titulo>
        </Contenedor>
    );
}

export default Switch;