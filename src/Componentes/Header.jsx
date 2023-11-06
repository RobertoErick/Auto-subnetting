import Banner from "../Img/Banner.png";
import styled from "styled-components";

const HeaderStyle = styled.header`
    box-sizing: border-box;
`

function Header(){
    return(
        <header>
            <img src={Banner} alt="Banner"/>
        </header>
    );
}

export default Header;