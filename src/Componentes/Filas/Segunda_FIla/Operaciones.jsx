import styled from "styled-components";
import Duda from "../../../Img/Duda.png";
import Swal from "sweetalert2";

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

function Operaciones(props){
    const {operacion} = props;

    var restas = 256 - operacion ;

    console.log("Operacion a restar: 256 - "+operacion+" = "+restas);

    const HandleDuda = () => {
        Swal.fire({
          title: 'Operaciones',
          text: 'Las operaciones son importantes para saber cuantos saltos se deben dar desde la direccion IP donde se quedó. La razon que se usa el 256 para restarlo a lo que se obtenga en la conversion es porqque aqui si se cuenta el 0 en el rango 0-255',
          icon: 'question',
          confirmButtonText: 'Aceptar'
        });
      };  

    props.onResultado(restas);
    return(
        <Contenedor className="contenedor">
            <h2 className="titulo">Operaciones</h2>
            <Img className="duda" src={Duda} onClick={HandleDuda}/>
            <Area>
                <p className="titulo">{restas ? "256 - " + operacion + " = " + restas: null}</p>
            </Area>
        </Contenedor>
    );
}

export default Operaciones;