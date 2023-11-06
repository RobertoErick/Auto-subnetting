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
    @media (max-width: 768px) {
        padding-right: 0px;
        text-align: center;
    }
`

const Ul = styled.ul`
    @media (max-width: 768px) {
        padding-right: 40px;
        text-align: center;
    }
`

function Clases(){
    return(
        <Contenedor className="contenedor">
            <h2 className="titulo">Clases de red: </h2>
            <Ul>
                <li className="parrafo">0-127 ------{">"} A <img className="duda" src={Duda}/></li>
                <li className="parrafo">128-191 --{">"} B <img className="duda" src={Duda}/></li>
                <li className="parrafo">192-223 --{">"} C <img className="duda" src={Duda}/></li>
                <li className="parrafo">224-239 --{">"} D <img className="duda" src={Duda}/></li>
                <li className="parrafo">240-255 --{">"} E <img className="duda" src={Duda}/></li>
            </Ul>
        </Contenedor>
    );
}

export default Clases;