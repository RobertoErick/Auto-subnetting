import styled from "styled-components";
import Duda from "../../../../Img/Duda.png";
import * as React from 'react';
import { useState } from 'react';
import Swal from "sweetalert2";
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Contenedor = styled.div`
    border: 5px solid #3D589D;
    gap: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 

    ${(switchState) => (switchState.active ? '100%' : '50%')};
`

const Titulo = styled.h2`
    display: inline-block;
    margin-left: 40px
`

const Img = styled.img`
    margin-right: 40px;
`

const Input = styled.input`
    border: 3px solid #2CC24D;
    background: #FFF;
    text-align: center;
    width: 80%;
    height: 50px;
`

const Prefijos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
`

const Cont_Prefijo = styled.div`
    display:inline-block;
    justify-content: center;
    width: auto;
`

const PStyled = styled.div`
    display: inline-block;
`

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    width: 100%;
`

function VLSM(){
    const [switchState, setSwitchState] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(0);
    const [inputElements, setInputElements] = useState([]);
    
    // Event handler para manejar el cambio en el <select>
    const handleSelectChange = (e) => {
    const number = parseInt(e.target.value, 10);
    setSelectedNumber(number);
    console.log("VLSM: "+number);

    // Crea un array de elementos <Input> basado en el número seleccionado
    const newInputElements = [];
    for (let i = 0; i < number; i++) {
      newInputElements.push(
        <Cont_Prefijo key={i}>
          <PStyled className="titulo">/</PStyled>
          <Input className="contenedor" type="number" />
        </Cont_Prefijo>
      );
    }
        setInputElements(newInputElements);
    };

    const HandleDuda = () => {
        Swal.fire({
          title: 'VLSM',
          text: '(Variable Length Subnet Masking) es una técnica utilizada en redes de computadoras para asignar diferentes longitudes de máscara de subred a las subredes dentro de una red más grande. Activalo para poder subnetear en VLSM',
          icon: 'question',
          confirmButtonText: 'Aceptar'
        });
      };

    return(
        <Contenedor className="contenedor" active={switchState}>
            <Header>
                <Titulo className="titulo">VLSM</Titulo>
                <Switch 
                    {...label} 
                    size="large"
                    onChange={(e) => setSwitchState(e.target.checked)}
                />
                {switchState ? (
                    <select id="cantidad" className="parrafo" value={selectedNumber} onChange={handleSelectChange}>
                        <option value="0">Cantidad</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                ):  <Img className="duda" src={Duda} alt="Duda" onClick={HandleDuda}/>}
            </Header>
                {switchState ? (
                    <Prefijos>
                        {inputElements}
                        <Img className="duda" src={Duda} alt="Duda" />  
                    </Prefijos>
                ) : null}
        </Contenedor>
    );
}

export default VLSM;