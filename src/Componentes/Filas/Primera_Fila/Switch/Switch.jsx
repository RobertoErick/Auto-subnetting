import React, { useState } from 'react';
import styled from "styled-components";
import Duda from "../../../../Img/Duda.png";

const Contenedor = styled.div`
    border: 5px solid #2CC24D;
    padding-top: 0px;
    width: 100%;
    height: 100%;
    text-align: center;
`

const Titulo = styled.div`
    display: inline-block;
`

function Switch({ onSelectedTagChange }) {
    const [selectedTag, setSelectedTag] = useState('prefijo');
  
    const handleTagClick = (newSelectedTag) => {
      setSelectedTag(newSelectedTag);
      onSelectedTagChange(newSelectedTag); // Llama a la función del componente padre
    };
    return(
        <Contenedor className="contenedor">
                <Titulo className="titulo" >
                <a
                    onClick={() => handleTagClick('prefijo')}
                    style={{ backgroundColor: selectedTag === 'prefijo' ? '#84FB9E' : 'transparent',
                    borderRadius: selectedTag === 'prefijo' ? '15px' : '0'}}
                >
                Prefijo
                </a>
                {' / '}
                <a
                    onClick={() => handleTagClick('host')}
                    style={{ backgroundColor: selectedTag === 'host' ? '#84FB9E' : 'transparent',
                    borderRadius: selectedTag === 'host' ? '15px' : '0' }}
                >
                Host
                </a>
                {' / '}
                <a
                    onClick={() => handleTagClick('subred')}
                    style={{ backgroundColor: selectedTag === 'subred' ? '#84FB9E' : 'transparent',
                    borderRadius: selectedTag === 'subred' ? '15px' : '0' }}
                >
                Subred
                </a>
                <img className="duda" src={Duda} alt="signo de pregunta" />
                </Titulo>
        </Contenedor>
    );
}

export default Switch;