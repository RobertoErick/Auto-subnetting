import styled from "styled-components";
import Duda from "../../../../Img/Duda.png";
import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Contenedor = styled.div`
    border: 5px solid #3D589D;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const Titulo = styled.h2`
    display: inline-block;
    margin-left: 40px
`

const Img = styled.img`
    margin-right: 40px;
`

function VLSM(){
    return(
        <Contenedor className="contenedor">
            <Titulo className="titulo">VLSM</Titulo>
            <Switch {...label} defaultChecked size="large"/>
            <Img className="duda" src={Duda} alt="Duda" />
        </Contenedor>
    );
}

export default VLSM;