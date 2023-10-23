import styled from "styled-components";
import Duda from "../../../Img/Duda.png"

const Contenedor = styled.div`
    border: 5px solid #3D589D;
    text-align: center;
    width: 100%;
    height: 100%;
    position: relative;
`

const Area = styled.div`
    width: 95%;
    height: 50%;
    background-color: white;
    margin:10px;
`

const Img = styled.img`
    position: absolute;
    top: 20px;
    right: 20px;
`

function Operaciones(){
    return(
        <Contenedor className="contenedor">
            <h2 className="titulo">Operaciones</h2>
            <Img className="duda" src={Duda} />
            <Area></Area>
        </Contenedor>
    );
}

export default Operaciones;