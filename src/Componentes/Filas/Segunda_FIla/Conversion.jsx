import styled from "styled-components";
import Duda from "../../../Img/Duda.png";
import Swal from "sweetalert2";

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
    padding: 10px;
    background-color:white;
    box-sizing: border-box;
    @media (max-width: 390px){
        font-size: 10px;
    }
`

const Img = styled.img`
    position: absolute;
    top: 20px;
    right: 20px;
`

function Conversion(props){
    const {calculo, conversion} = props;

    var prefijo = parseInt(calculo, 10);

    console.log("prefijo utilizado: "+prefijo);

    const valores = [];
    for (let i = 0; i < 8; i++) {
        valores.push(<th key={i}>{conversion[i]}</th>);
    }

    const HandleDuda = () => {
        Swal.fire({
          title: 'Conversiones',
          text: 'La tabla permite conocer cuantos bits quedaron encendidos en el octeto donde quedo el prefijo mediante la conversion a binario.    Ademas sirve para mas adelante emularlo en Packet Tracer',
          icon: 'question',
          confirmButtonText: 'Aceptar'
        });
      };  

    return(
        <Contenedor className="contenedor">
            <Titulo className="titulo">Conversión</Titulo>
            <Img className="duda" src={Duda} onClick={HandleDuda}/>
            <Tabla border="1" className="titulo">
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
                    <td>{prefijo ? "/"+prefijo : null}</td>
                    {valores}
                </tr>
            </Tabla>
        </Contenedor>
    );
}

export default Conversion;