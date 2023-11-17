import styled from "styled-components";
import Duda from "../../../Img/Duda.png";
import Swal from "sweetalert2";

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
    padding: 10px;
    background-color:white;
    @media (max-width: 390px){
        font-size: 10px;
    }
`

const Img = styled.img`
    position: absolute;
    top: 20px;
    right: 20px;
`

function Resultado(props){
    //La tabla va a tener 2 id´s lo cual entonces debe tener 2 rangos de red utilizables y 2 broadcast, esta seccion corresponde al primer id
    var utilizableInicial_1 = "";   //es la primera parte del rango de red
    var utilizableFinal_1 = "";     //es la ultima parte del rango de red
    var primerSalto = "";           //correspone al segundo id de la tabla
    var broadcast = "";             //broadcast del 1d 1

    //esta es la seccion para el segundo id
    var segundoSalto = "";          //tomamos como referencia el segundo salto que seria parte del 3er id pero ese ya no lo colocamos
    var utilizableInicial_2 = "";   //es la primera parte del rango de red
    var utilizableFinal_2 = "";     //es la ultima parte del rango de red
    var broadcast2 = "";            //broadcast del 1d 2

    const{direccionIp, calculo, resultado} = props;     //Se desctructura lo que tiene en propiedades

    var prefijo = parseInt(calculo, 10);                //El prefijo se pasa a entero

    // Divide la dirección IP en sus cuatro componentes
    const direccionIpOctetos = direccionIp.split('.');
    const primerOcteto = direccionIpOctetos[0];
    const segundoOcteto = direccionIpOctetos[1];
    const tercerOcteto = direccionIpOctetos[2];
    const cuartoOcteto = direccionIpOctetos[3];

    //Pasamos los valores a sus variables enteras
    var Octeto1 = parseInt(primerOcteto, 10);
    var Octeto2 = parseInt(segundoOcteto, 10);
    var Octeto3 = parseInt(tercerOcteto, 10);
    var Octeto4 = parseInt(cuartoOcteto, 10);

    //Esto se usa para el primer id, para no modificar directamente las variables de los octetos
    var Octeto2Cambio = 0;
    var Octeto3Cambio = 0;
    var Octeto4Cambio = 0;

    //Primera variable inicial del id 1
    utilizableInicial_1 = (Octeto1)+"."+(Octeto2)+"."+(Octeto3)+"."+(Octeto4+1);

    //Dependiendo del numero del prefijo, sera la posicion donde se haran los cambios en la direccion Ip
    switch (true) {
        case prefijo <= 8:
            //Seccion del primer id de la tabla
            primerSalto = (Octeto1+resultado)+"."+(Octeto2)+"."+(Octeto3)+"."+(Octeto4);                //id 2 para tenerla de referencia al inicio 
            if(Octeto4 === 0){ Octeto4Cambio = 255;}                                                    //en caso de que el ultimo octeto sea 0, evitamos que se haga negativo y se convierte en 255
            Octeto2Cambio = 255;                                                                        //Convertimos directamente el conteto 2 y 3 en 255 porque asi son los saltos en este prefijo
            Octeto3Cambio = 255;
            //El primer octeto se suma su salto y se le resta 1(asi se calcula mas facil los broadcast) los demas octetos quedan como 255 y el octeto 4 usa un operador ternario para saber si elñ valor es de 255 lo deja igual, pero si es diferente, le resta 1 
            broadcast = (Octeto1+resultado-1)+"."+(Octeto2Cambio)+"."+(Octeto3Cambio)+"."+((Octeto4Cambio === 255) ? Octeto4Cambio: Octeto4-1);
            //Esta operacion es bastante parecida al broadcast, excepto que aqui el ultimo octeto se le resta 2, es decir una resta mas que el broadcast             
            utilizableFinal_1 = (Octeto1+resultado-1)+"."+(Octeto2Cambio)+"."+(Octeto3Cambio)+"."+((Octeto4Cambio === 255) ? Octeto4Cambio-1: Octeto4-2);

            //Ahora esta seccion es para el segundo id de la tabla
            segundoSalto = (Octeto1+(resultado*2))+"."+(Octeto2)+"."+(Octeto3)+"."+(Octeto4);           //id 3 para tenerla de referencia al inicio, no se imprime pero es mas facil calcular todo 
            utilizableInicial_2 = (Octeto1+resultado)+"."+(Octeto2)+"."+(Octeto3)+"."+(Octeto4+1);      //le sumamos el resultado al primer octeto para comenzar como el id y al octeto 4 le sumamos uno para que sea el primer id utilizable
            if(Octeto4 === 0){ Octeto4 = 255;}                                                          //Igual que en la parte de arriba, evitamos que octeto4 sea numero negativo y lo pasamos como 255
            Octeto2 = 255;                                                                              //igual que arriba pasamos directamente a 255 los octetos 2 y 3
            Octeto3 = 255;
            //Este es el mismo paso que el de el primer id, solo que aqui si afectamos a las variables directamente
            broadcast2 = (Octeto1+(resultado*2)-1)+"."+(Octeto2)+"."+(Octeto3)+"."+((Octeto4 === 255) ? Octeto4: Octeto4-1);
            //De igual forma aqui, solo le restamos 2 como en el primer id
            utilizableFinal_2 = (Octeto1+(resultado*2)-1)+"."+(Octeto2)+"."+(Octeto3)+"."+((Octeto4 === 255) ? Octeto4-1: Octeto4-2);
          break;
        //Los pasos que siguen son parecidos, solo cambia de lugar las acciones que se le tiene que ralizar a la direccion ip
        case prefijo >= 9 && prefijo <= 16:
            //Seccion del primer id de la tabla
            primerSalto = (Octeto1)+"."+(Octeto2+resultado)+"."+(Octeto3)+"."+(Octeto4);
            if(Octeto4 === 0){ Octeto4Cambio = 255;}
            Octeto3Cambio = 255;
            broadcast = (Octeto1)+"."+(Octeto2+resultado-1)+"."+(Octeto3Cambio)+"."+((Octeto4Cambio === 255) ? Octeto4Cambio: Octeto4-1);
            utilizableFinal_1 = (Octeto1)+"."+(Octeto2+resultado-1)+"."+(Octeto3Cambio)+"."+((Octeto4Cambio === 255) ? Octeto4Cambio-1: Octeto4-2); 

            //Ahora esta seccion es para el segundo id de la tabla
            segundoSalto = (Octeto1)+"."+(Octeto2+(resultado*2))+"."+(Octeto3)+"."+(Octeto4);
            utilizableInicial_2 = (Octeto1)+"."+(Octeto2+resultado)+"."+(Octeto3)+"."+(Octeto4+1);
            if(Octeto4 === 0){ Octeto4 = 255;}
            Octeto3 = 255;
            broadcast2 = (Octeto1)+"."+(Octeto2+(resultado*2)-1)+"."+(Octeto3)+"."+((Octeto4 === 255) ? Octeto4: Octeto4-1);
            utilizableFinal_2 = (Octeto1)+"."+(Octeto2+(resultado*2)-1)+"."+(Octeto3)+"."+((Octeto4 === 255) ? Octeto4-1: Octeto4-2);
          break;
        case prefijo >= 17 && prefijo <= 24:
            //Seccion del primer id de la tabla
            primerSalto = (Octeto1)+"."+(Octeto2)+"."+(Octeto3+resultado)+"."+(Octeto4);
            if(Octeto4 === 0){ Octeto4Cambio = 255;}
            broadcast = (Octeto1)+"."+(Octeto2)+"."+(Octeto3+resultado-1)+"."+((Octeto4Cambio === 255) ? Octeto4Cambio: Octeto4-1);
            utilizableFinal_1 = (Octeto1)+"."+(Octeto2)+"."+(Octeto3+resultado-1)+"."+((Octeto4Cambio === 255) ? Octeto4Cambio-1: Octeto4-2);
            
            //Ahora esta seccion es para el segundo id de la tabla
            segundoSalto = (Octeto1)+"."+(Octeto2)+"."+(Octeto3+(resultado*2))+"."+(Octeto4);
            utilizableInicial_2 = (Octeto1)+"."+(Octeto2)+"."+(Octeto3+resultado)+"."+(Octeto4+1);
            if(Octeto4 === 0){ Octeto4 = 255;}
            broadcast2 = (Octeto1)+"."+(Octeto2)+"."+(Octeto3+(resultado*2)-1)+"."+((Octeto4 === 255) ? Octeto4: Octeto4-1);
            utilizableFinal_2 = (Octeto1)+"."+(Octeto2)+"."+(Octeto3+(resultado*2)-1)+"."+((Octeto4 === 255) ? Octeto4-1: Octeto4-2);
          break;
        case prefijo >= 25 && prefijo <= 32:
            //Seccion del primer id de la tabla
            primerSalto = (Octeto1)+"."+(Octeto2)+"."+(Octeto3)+"."+(Octeto4+resultado);
            if((Octeto4+resultado) === 0){ Octeto4Cambio = 255;}
            broadcast = (Octeto1)+"."+(Octeto2)+"."+(Octeto3)+"."+((Octeto4Cambio === 255) ? Octeto4Cambio+resultado: Octeto4+resultado-1);
            utilizableFinal_1 = (Octeto1)+"."+(Octeto2)+"."+(Octeto3)+"."+((Octeto4Cambio === 255) ? Octeto4Cambio+resultado-1: Octeto4+resultado-2);
            
            //Ahora esta seccion es para el segundo id de la tabla
            segundoSalto = (Octeto1)+"."+(Octeto2)+"."+(Octeto3)+"."+(Octeto4+(resultado*2));
            utilizableInicial_2 = (Octeto1)+"."+(Octeto2)+"."+(Octeto3)+"."+(Octeto4+resultado+1);
            if((Octeto4+(resultado*2)) === 0){ Octeto4 = 255;}
            broadcast2 = (Octeto1)+"."+(Octeto2)+"."+(Octeto3)+"."+((Octeto4 === 255) ? Octeto4+(resultado*2): Octeto4+(resultado*2)-1);
            utilizableFinal_2 = (Octeto1)+"."+(Octeto2)+"."+(Octeto3)+"."+((Octeto4 === 255) ? Octeto4+(resultado*2)-1: Octeto4+(resultado*2)-2);
          break;
      }

      const HandleDuda = () => {
        Swal.fire({
          title: 'Resultados',
          text: 'Esta tabla te permite saber cuales son los rangos de red que puedes utilizar para seleccionar una para un dispositivo en una red para cada prefijo, existe un rango de red disponible para ello',
          icon: 'question',
          confirmButtonText: 'Aceptar'
        });
      };  

    return(
        <Contenedor className="contenedor">
            <h2 className="titulo">Resultado</h2>
            <Img className="duda" src={Duda} onClick={HandleDuda}/>
            <Tabla border="1" className="titulo">
                <tr>
                    <th>ID</th>
                    <th>Utilizables</th>
                    <th>Broadcast</th>
                </tr>
                <tr>
                    <td>{direccionIp}</td>
                    {/* usamos un operador ternario para que no aparesca Nan, solamente un espacio en blanco */}
                    <th>{Octeto1 ? utilizableInicial_1 : null} - {Octeto1 ? utilizableFinal_1 : null}</th>  
                    <th>{broadcast}</th>
                </tr>
                <tr>
                    <td>{primerSalto}</td>
                    <th>{Octeto1 ? utilizableInicial_2: null} - {Octeto1 ? utilizableFinal_2 : null}</th>
                    <th>{broadcast2}</th>
                </tr>
            </Tabla>
        </Contenedor>
    );
}
 export default Resultado;