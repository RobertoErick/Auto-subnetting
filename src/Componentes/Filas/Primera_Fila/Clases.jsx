import styled from "styled-components";
import Duda from "../../../Img/Duda.png";

const Contenedor = styled.div`
    border: 5px solid #3D589D;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-right: 40px;
`

function Clases(){
    return(
        <Contenedor className="contenedor">
            <h2 className="titulo">Clases de red: </h2>
            <ul>
                <li className="titulo">0-127 ------{">"} A <img className="duda" src={Duda}/></li>
                <li className="titulo">128-191 --{">"} B <img className="duda" src={Duda}/></li>
                <li className="titulo">192-223 --{">"} C <img className="duda" src={Duda}/></li>
                <li className="titulo">224-239 --{">"} D <img className="duda" src={Duda}/></li>
                <li className="titulo">240-255 --{">"} E <img className="duda" src={Duda}/></li>
            </ul>
        </Contenedor>
    );
}

export default Clases;