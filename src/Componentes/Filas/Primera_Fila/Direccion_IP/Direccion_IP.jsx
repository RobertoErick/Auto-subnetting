import React, { useState } from "react";
import styled from "styled-components";
import Duda from "../../../../Img/Duda.png";

const Contenido = styled.div`
  display: inline-block;
  border: 5px solid #3D589D;
  width: 100%;
  height: 100%;
  text-align: center;
  @media (max-width: 768px) {
    padding-top: 100px;
  }
  @media (max-width: 390px) {
    padding-top: 15px;
  }
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
        <img className="duda" src={Duda} alt="Duda" />
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
    }
  };

  return (
    <Contenido className="contenedor">
      <div>
        <Titulo className="titulo">
          Direccion IP
          <img className="duda" src={Duda} alt="Duda" />
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
