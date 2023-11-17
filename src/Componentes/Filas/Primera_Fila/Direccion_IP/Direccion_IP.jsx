import React, { useState } from "react";
import styled from "styled-components";
import Duda from "../../../../Img/Duda.png";
import Swal from "sweetalert2";

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
  text-align: center;
  width: 40%;
  height: 50px;
`

function Direccion_IP({ selectedTag, onDataSubmit }) {
  const tagTitles = {
    prefijo: 'Prefijo',
    host: 'Host',
    subred: 'Subred',
  };

  const getTitle = (tag) => {
    return (
      <Titulo className="titulo">
        {tagTitles[tag]}
        <img className="duda" src={Duda} alt="Duda" onClick={HandleDuda2}/>
      </Titulo>
    );
  };

  const getPrefijo = (tag) => {
    return (
      <Texto className="parrafo">
        {tagTitles[tag] === 'Host' || tagTitles[tag] === 'Subred' ? '/24  ' : '/'}
      </Texto>
    );
  };

  const [direccionIp, setDireccionIp] = useState("");
  const [calculo, setCalculo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Guardar los datos en el estado local
    setDireccionIp(document.getElementById('Direccion-IP').value);
    setCalculo(document.getElementById('Calculo').value);
    
    // Llamar a la función onDataSubmit para pasar los datos al componente padre
    onDataSubmit(direccionIp, calculo);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Evita el comportamiento predeterminado de la tecla Enter
      document.getElementById('hiddenSubmitButton').click(); // Activa el botón oculto
      console.log("Direccion IP: "+direccionIp);
      console.log("Prefijo: "+calculo);
    }
  };

  const HandleDuda = () => {
    Swal.fire({
      title: 'Direccion IP',
      text: 'dirección IP (Protocolo de Internet) es una etiqueta numérica única que se asigna a cada dispositivo conectado a una red de computadoras que utiliza el protocolo de Internet para comunicarse. Se divide en 4 octetos separados por un punto, cada octeto es de 0 a 255',
      icon: 'question',
      confirmButtonText: 'Aceptar'
    });
  };

  const HandleDuda2 = () => {
    Swal.fire({
      title: 'Prefijo',
      text: 'Se refiere a una porción inicial de la dirección IP que identifica la red a la que pertenece un dispositivo en una red basada en el protocolo de Internet. Este numero puede ser de 0 a 32 por los octetos que cuenta la direccion IP',
      icon: 'question',
      confirmButtonText: 'Aceptar'
    });
  };

  return (
    <Contenido className="contenedor">
      <div>
        <Titulo className="titulo">
          Direccion IP
          <img className="duda" src={Duda} alt="Duda" onClick={HandleDuda}/>
        </Titulo>
        {selectedTag && getTitle(selectedTag)}
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          className="contenedor"
          type="text" 
          id="Direccion-IP"
          onKeyPress={handleKeyPress}
          required
          pattern="^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"
        />
        {selectedTag && getPrefijo(selectedTag)}
        <Input
          className="contenedor"
          type="number"
          id="Calculo"
          onKeyPress={handleKeyPress}
          required
        />
        <input
          type="submit"
          id="hiddenSubmitButton"
          style={{ display: 'none' }}
        />
      </form>
    </Contenido>
  );
}

export default Direccion_IP;
