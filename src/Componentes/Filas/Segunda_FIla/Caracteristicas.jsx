import styled from "styled-components";
import Duda from "../../../Img/Duda.png";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

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
    const { direccionIp, calculo} = props;

    // Dividir la dirección IP por el punto y tomar el primer elemento
    const primerNumeroIp = direccionIp.split(".")[0];
    // Variable para inicializar la clase de direccion ip que tenemos
    var clase = ""; 
    // variable para inicializar la mascara de red que tenemos
    var mascaraDeRed= "";
    // Dependiendo lo que haya puesto en el input prefijo, va a pasarse como entero a la variable preijo 
    var prefijo = parseInt(calculo, 10);
    // variable para inicializar la mascara de subred que tenemos
    var mascaraDeSubred = "";
    // variable para inicializar el resultado del prefijo despues de convertir el octal a decimal (255.128.0.0)
    var prefijoResultado = 0;
    // variable para inicializar el resultado del host total 
    var calculoHost = 0;
    //  vairable para inicializar el resultado de las subredes totales
    var calculoSubred = prefijo;
    // Guardar la conversion para pasarsela a la tabla de el componente de conversiones
    var conversionHecha = "";

    //Calculo para la clase y mascara de red
    switch (true) {
        case primerNumeroIp <= 127:
            clase = "A";
            mascaraDeRed = "255.0.0.0";
            calculoSubred = calculoSubred - 8;  //dependiendo de que clase sea la mascaa de red, se le va a restar la cantidad de bits al octeto para calcular la subred
        break;
        case primerNumeroIp <= 191:
            clase = "B";
            mascaraDeRed = "255.255.0.0";
            calculoSubred = calculoSubred - 16; //dependiendo de que clase sea la mascaa de red, se le va a restar la cantidad de bits al octeto para calcular la subred
        break;
        case primerNumeroIp <= 223:
            clase = "C";
            mascaraDeRed = "255.255.255.0";
            calculoSubred = calculoSubred - 24; //dependiendo de que clase sea la mascaa de red, se le va a restar la cantidad de bits al octeto para calcular la subred
        break;
        case primerNumeroIp <= 239:
            clase = "D";
            mascaraDeRed = "No se aplica";
            calculoSubred = calculoSubred - 32; //dependiendo de que clase sea la mascaa de red, se le va a restar la cantidad de bits al octeto para calcular la subred
        break;
        case primerNumeroIp <= 255:
            clase = "E";
            mascaraDeRed = "No se aplica";
            calculoSubred = calculoSubred - 32; //dependiendo de que clase sea la mascaa de red, se le va a restar la cantidad de bits al octeto para calcular la subred
        break;
        default:
            clase = "No válida";
            mascaraDeRed = "No se aplica";
        break;
      }

      console.log("clase de red: "+clase);
      console.log("mascara de red: "+mascaraDeRed)

      //Calculo para la mascara de subred, llama a la funcion para calcular el prefijo de red 
      //dependiendo el numero (0 a 32) para saber donde colocar su calculo en la mascara de subred
      switch (true) {
        case prefijo <= 8:
          prefijoResultado = calculoPrefijo(prefijo);
          mascaraDeSubred = prefijoResultado+".0.0.0";
          calculoHost = calculoHost + 24;                 //Se le suman los 0 de los octetos que quedan para calcular los host
          break;
        case prefijo >= 9 && prefijo <= 16:
          prefijoResultado = calculoPrefijo(prefijo - 8); //Se le resta el octal que ya se completo antes para saber como quedara el octal en el que esta
          mascaraDeSubred = "255."+prefijoResultado+".0.0";
          calculoHost = calculoHost + 16;                 //Se le suman los 0 de los octetos que quedan para calcular los host
          break;
        case prefijo >= 17 && prefijo <= 24:
          prefijoResultado = calculoPrefijo(prefijo - 16); //Se les resta los octales que ya se completaron antes para saber como quedara el octal en el que esta
          mascaraDeSubred = "255.255."+prefijoResultado+".0"
          calculoHost = calculoHost + 8;                  //Se le suman los 0 de los octetos que quedan para calcular los host
          break;
        case prefijo >= 25 && prefijo <= 32:
          prefijoResultado = calculoPrefijo(prefijo - 24); //Se les resta los octales que ya se completaron antes para saber como quedara el octal en el que esta
          mascaraDeSubred = "255.255.255."+prefijoResultado;
          break;
      }

      console.log("mascara de subred: "+mascaraDeSubred)

      //Aqui se calcula el prefijo para convertirlo en 1 y 0 para dfespues convertirlo en octal y decimal
      function calculoPrefijo(prefijocalculo) {
        const longitud = 8;
      
        const unos = "1".repeat(prefijocalculo);
        const ceros = "0".repeat(longitud - prefijocalculo);
        const resultado = unos + ceros;

        conversionHecha = resultado;

        calculoHost = calculoHost + (longitud - prefijocalculo); //El host se le suma la cantidad de 0 que tenga esta operacion para usarlo saliendo de esta funcion
      
        let potencia = 7;
        let resultadoPotencia = 0;
      
        // Recorrer la cadena "resultado" e imprimir cada valor
        for (let i = 0; i < resultado.length; i++) {
          if (resultado[i] === "1") {
            resultadoPotencia = 2 ** potencia;
            prefijoResultado += resultadoPotencia;
          }
          potencia = potencia - 1;
        }
        potencia = 8;
      
        return prefijoResultado;
      }

      // Para calcular los host totales se necesita establecer la operacion de 2 a la potencia de la cantidad de 0 que quedan en la operacion despues del prefijo
      var hostTotales = 2 ** calculoHost;
      var SubredesTotales = 2 ** calculoSubred;

      console.log("Host totales: "+hostTotales);
      console.log("Host utilizables: "+(hostTotales-2));
      console.log("Subredes totales: "+SubredesTotales);

      //llamamos al componente padre para que tenga el valor de conversion ya hecha
      props.onConversionHecha(conversionHecha);
      //llamamos al componente padre para que tenga el valor de la operacion a restar para calcular los saldos del subneteo
      props.onOperacion(prefijoResultado);

      const HandleDuda = () => {
        Swal.fire({
          title: 'Caracteristicas de la red',
          text: 'La siguiente informacion es necesaria cuando se hace el primer subneteo, se conce en que mascara de red esta, cual mascara de red se crea , cuantos host estan disponibles para dispositivos y cuantas subredes vamos a tener',
          icon: 'question',
          confirmButtonText: 'Aceptar'
        });
      };  

    return (
        <Contenedor className="contenedor">
            <Img className="duda" src={Duda} onClick={HandleDuda}/>
            <ul>
                <li className="parrafo">Clase: {clase}</li>
                <li className="parrafo">Mascara de red: {mascaraDeRed}</li>
                <li className="parrafo">Mascara de subred: {mascaraDeSubred}</li>
                <li className="parrafo">Host Totales: {hostTotales}</li>
                <li className="parrafo">Host utilizables: {hostTotales - 2}</li>
                <li className="parrafo">Subredes totales: {SubredesTotales}</li>
            </ul>
        </Contenedor>
    );
}

export default Caracteristicas;
