import styled from 'styled-components';

const Contenedor = styled.div`
    border: 5px solid #BC34BE;
    width: 100%;
    height: 100%;
    padding: 20px;
`

const Titulo = styled.h2`
    color: #BC34BE;
`

function Descripcion(){
    return(
        <Contenedor className='contenedor'>
            <Titulo className="titulo">Descripcion del proyecto</Titulo>
            <p className="parrafo">Este proyecto esta pensado
            para los estudiantes que
            estan iniciando en el subneteo
            con apoyo en el libro IP 
            Addressing and Subnetting 
            Workbook</p>
        </Contenedor> 
    );
}

export default Descripcion;