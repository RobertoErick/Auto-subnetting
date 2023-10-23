import styled from "styled-components";
import Duda from "../../../Img/Duda.png";

const Contenedor= styled.div`
    position: relative;
    border: 5px solid #3D589D;
    width: 100%
`

const Img = styled.img`
    position: absolute;
    top: 20px;
    right: 20px;
`

function Caracteristicas (){
    return(
        <Contenedor className="contenedor">
            <Img className="duda" src={Duda} />
            <ul >
                <li className="parrafo">Clase:</li>
                <li className="parrafo">Mascara de red:</li>
                <li className="parrafo">Mascara de subred:</li>
                <li className="parrafo">Host Totales:</li>
                <li className="parrafo">Host utilizables:</li>
                <li className="parrafo">Subredes totales:</li>
            </ul>
        </Contenedor>    
    );
}

export default Caracteristicas;