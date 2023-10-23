import styled from "styled-components";
import Duda from "../../../Img/Duda.png";

const Contenedor= styled.div`
    border: 5px solid #3D589D;
    width: 100%;
    height: 100%;
    text-align: center;
    position:relative;
`

const Titulo = styled.h2`
    margin-top: 0;
`

const Tabla = styled.table`
    width: 100%;
    margin-top: 30px;
    font-size: 32px;
    padding: 10px;
    background-color:white;
`

const Img = styled.img`
    position: absolute;
    top: 20px;
    right: 20px;
`

function Conversion(){
    return(
        <Contenedor className="contenedor">
            <Titulo className="titulo">Conversión</Titulo>
            <Img className="duda" src={Duda}/>
            <Tabla border="1">
                <tr>
                    <th>Prefijo</th>
                    <th>128</th>
                    <th>64</th>
                    <th>32</th>
                    <th>16</th>
                    <th>8</th>
                    <th>4</th>
                    <th>2</th>
                    <th>1</th>
                </tr>
                <tr>
                    <td>/24</td>
                    <th>1</th>
                    <th>1</th>
                    <th>1</th>
                    <th>1</th>
                    <th>1</th>
                    <th>1</th>
                    <th>1</th>
                    <th>1</th>
                </tr>
                <tr>
                    <td>/20</td>
                    <th>1</th>
                    <th>1</th>
                    <th>1</th>
                    <th>1</th>
                    <th>0</th>
                    <th>0</th>
                    <th>0</th>
                    <th>0</th>
                </tr>
            </Tabla>
        </Contenedor>
    );
}

export default Conversion;