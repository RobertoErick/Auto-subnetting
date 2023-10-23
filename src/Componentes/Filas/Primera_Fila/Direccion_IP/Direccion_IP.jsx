import styled from "styled-components";
import Duda from "../../../../Img/Duda.png";

const Contenido = styled.div`
    display: inline-block;
    border: 5px solid #3D589D;
    width: 100%;
    height: 100%;
    text-align: center;
`

const Titulo = styled.h2`
    display: inline-block;
    margin-right: 30px;
`

const Texto = styled.p`
    display: inline-block;
`

const Input = styled.input`
    border: 3px solid #2CC24D;
    background: #FFF;
    width: 40%;
    height: 50px;
`

function Direccion_IP(){
    return(
        <Contenido className="contenedor">
            <div>
                <Titulo className="titulo">Direccion IP
                <img className="duda" src={Duda} alt="Duda" />
                </Titulo>
                <Titulo className="titulo">Prefijo
                <img className="duda" src={Duda} alt="Duda" />
                </Titulo>
            </div>
            <form>
                <Input className="contenedor" type="number" />
                <Texto className="parrafo"> / </Texto>
                <Input className="contenedor" type="number" />
            </form>
        </Contenido>
    );
}

export default Direccion_IP;