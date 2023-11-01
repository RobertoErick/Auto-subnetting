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

function Direccion_IP({ selectedTag }) {
    // Define un objeto que mapea las etiquetas a sus correspondientes títulos
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
  
    return (
      <Contenido className="contenedor">
        <div>
            <Titulo className="titulo">Direccion IP
            <img className="duda" src={Duda} alt="Duda" />
            </Titulo>
            {selectedTag && getTitle(selectedTag)}
        </div>
        <form>
            <Input className="contenedor" type="number" />
            {selectedTag && getPrefijo(selectedTag)}
            <Input className="contenedor" type="number" />
        </form>
      </Contenido>
    );
  }
  
  

export default Direccion_IP;