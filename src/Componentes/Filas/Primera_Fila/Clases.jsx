import styled from "styled-components";
import Duda from "../../../Img/Duda.png";
import Swal from "sweetalert2";

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
const HandleDuda = () => {
    Swal.fire({
      title: 'Clase A',
      text: 'Mascara de red: 255.0.0.0          Puedes identificar que mascara de red  es mediante su primer octeto en la direccion IP',
      icon: 'question',
      confirmButtonText: 'Aceptar'
    });
  };

const HandleDuda1 = () => {
    Swal.fire({
      title: 'Clase B',
      text: 'Mascara de red: 255.255.0.0        Puedes identificar que mascara de red  es mediante su primer octeto en la direccion IP',
      icon: 'question',
      confirmButtonText: 'Aceptar'
    });
  };

const HandleDuda2 = () => {
    Swal.fire({
      title: 'Clase C',
      text: 'Mascara de red: 255.255.255.0      Puedes identificar que mascara de red  es mediante su primer octeto en la direccion IP',
      icon: 'question',
      confirmButtonText: 'Aceptar'
    });
  };

  const HandleDuda3 = () => {
    Swal.fire({
      title: 'Clase D',
      text: 'Usado para multicast               Puedes identificar que mascara de red  es mediante su primer octeto en la direccion IP',
      icon: 'question',
      confirmButtonText: 'Aceptar'
    });
  };

const HandleDuda4 = () => {
    Swal.fire({
      title: 'Clase E',
      text: 'Usado para pruebas experimental    Puedes identificar que mascara de red  es mediante su primer octeto en la direccion IP',
      icon: 'question',
      confirmButtonText: 'Aceptar'
    });
  };

function Clases(){
    return(
        <Contenedor className="contenedor">
            <h2 className="titulo">Clases de red: </h2>
            <ul>
                <li className="parrafo">0-127 ------{">"} A <img className="duda" src={Duda} onClick={HandleDuda}/></li>
                <li className="parrafo">128-191 --{">"} B <img className="duda" src={Duda} onClick={HandleDuda1}/></li>
                <li className="parrafo">192-223 --{">"} C <img className="duda" src={Duda} onClick={HandleDuda2}/></li>
                <li className="parrafo">224-239 --{">"} D <img className="duda" src={Duda} onClick={HandleDuda3}/></li>
                <li className="parrafo">240-255 --{">"} E <img className="duda" src={Duda} onClick={HandleDuda4}/></li>
            </ul>
        </Contenedor>
    );
}

export default Clases;