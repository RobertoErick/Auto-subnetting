import styled from "styled-components";
import Duda from "../../../Img/Duda.png";

const Contenedor = styled.div`
    position: relative;
    border: 5px solid #3D589D;
    width: 100%;
`

const Img = styled.img`
    position: absolute;
    top: 20px;
    right: 20px;
`

function Caracteristicas(props) {
    const { direccionIp, calculo } = props;

    // Imprimir los valores en la consola
    console.log("Dirección IP en Caracteristicas: " + direccionIp);
    console.log("Cálculo en Caracteristicas: " + calculo);

    // Dividir la dirección IP por el punto y tomar el primer elemento
    const primerNumeroIp = direccionIp.split(".")[0];
    var clase = ""; 
    var mascaraDeRed= "";
    var prefijo = parseInt(calculo, 10);
    var mascaraDeSubred = "";
    

    //Calculo para la mascara de red
    switch (true) {
        case primerNumeroIp <= 127:
            clase = "A";
            mascaraDeRed = "255.0.0.0";
        break;
        case primerNumeroIp <= 191:
            clase = "B";
            mascaraDeRed = "255.255.0.0";
        break;
        case primerNumeroIp <= 223:
            clase = "C";
            mascaraDeRed = "255.255.255.0";
        break;
        case primerNumeroIp <= 239:
            clase = "D";
            mascaraDeRed = "No se aplica";
        break;
        case primerNumeroIp <= 255:
            clase = "E";
            mascaraDeRed = "No se aplica";
        break;
        default:
            clase = "No válida";
            mascaraDeRed = "No se aplica";
        break;
      }

      //Calculo para la mascara de subred
      switch (true) {
        case prefijo <= 8:
            prefijo = prefijo;
        break;
        case prefijo >= 9:
            prefijo = prefijo - 8;
        break;
        case prefijo >= 17:
            prefijo = prefijo - 16;
        break;
        case prefijo >= 25:
            prefijo = prefijo - 24;
        break;
      }

      //Nota para mi de la mañana, intenta hacer un recorrido en "resultado" mientras hay un for dentro de 8 a 0, si encuentra un uno, entonces se multiplicara 2 a la potencia
      //del numero que tenga en ese momento el for, sino seguira como si nada hasta terminar y sumara todo

    //   const prefijocalculo = prefijo;
    //   const longitud = 8;
      
    //   const unos = "1".repeat(prefijocalculo);
    //   const ceros = "0".repeat(longitud - prefijocalculo);
    //   const resultado = unos + ceros;
      
    //   // Inicializar la variable para almacenar el resultado de la operación
    //   let operacionResultado = 0;
      
    //   // Recorrer la cadena de derecha a izquierda
    //   for (let i = resultado.length - 1; i >= 0; i--) {
    //     // Obtener el carácter en la posición actual
    //     const caracter = resultado.charAt(i);
        
    //     // Si el carácter es "1", realizar la operación y sumar al resultado
    //     if (caracter === "1") {
    //       operacionResultado += Math.pow(2, resultado.length - 1 - i);
    //     }
    //     // Si el carácter es "0", no hacer nada
    //   }
      
    //   console.log("Resultado de la operación:", operacionResultado);
      

    return (
        <Contenedor className="contenedor">
            <Img className="duda" src={Duda} />
            <ul>
                <li className="parrafo">Clase: {clase}</li>
                <li className="parrafo">Mascara de red: </li>
                <li className="parrafo">Mascara de subred:</li>
                <li className="parrafo">Host Totales:</li>
                <li className="parrafo">Host utilizables:</li>
                <li className="parrafo">Subredes totales:</li>
            </ul>
        </Contenedor>
    );
}

export default Caracteristicas;
