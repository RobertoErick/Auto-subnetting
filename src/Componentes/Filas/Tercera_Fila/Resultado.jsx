import styled from "styled-components";
import Duda from "../../../Img/Duda.png";

const Contenedor = styled.div`
    position: relative;
    border: 5px solid #3D589D;
    text-align: center;
    width: 100%;
    height: auto;
    margin-bottom: 42px;
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

function Resultado(){
    return(
        <Contenedor className="contenedor">
            <h2 className="titulo">Resultado</h2>
            <Img className="duda" src={Duda} />
            <Tabla border="1">
                <tr>
                    <th>ID</th>
                    <th>Utilizables</th>
                    <th>Broadcast</th>
                </tr>
                <tr>
                    <td>123.32.56.0</td>
                    <th>123.32.56.1 - 123.32.56.254</th>
                    <th>123.32.56.555</th>
                </tr>
                <tr>
                    <td>123.32.56.0</td>
                    <th>123.32.56.1 - 123.32.56.254</th>
                    <th>123.32.56.555</th>
                </tr>
            </Tabla>
        </Contenedor>
    );
}
 export default Resultado;