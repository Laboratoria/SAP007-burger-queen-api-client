import styled from "styled-components";
import img from '../../images/burguer-capa2.jpeg';
import ImgForMediaQuery from '../../images/burguer-capa2.jpeg';

const StyleBackgroundImg = styled.div `
   
   background-image: url(${img});
    background-repeat: no-repeat;
    width: 100%;
    min-height: 100vh;
    top:0;
    z-index: -10;
    position: fixed;
    background-size: cover;
    background-position: center;
    filter: blur(4px);

    @media screen and (min-width: 768px) {
        background-image: url(${ImgForMediaQuery});
    
    }

`
export default StyleBackgroundImg