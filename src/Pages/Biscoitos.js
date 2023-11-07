import Logo from "../Logo.png"
import { Link } from 'react-router-dom'
import styled from "styled-components"
import Fundo from "../Fundo.png"
import Biscoito1 from "../Biscoito1.jpeg"
import Biscoito2 from "../Biscoito2.jpeg"
import Biscoito3 from "../Biscoito3.jpeg"
import React, { useState } from 'react';

export default function Biscoitos() {

    const [zoomed, setZoomed] = useState(false);
    const [zoomed2, setZoomed2] = useState(false);
    const [zoomed3, setZoomed3] = useState(false);

    const msg = "Oii, gostaria de mais informações sobre os produtos do catálogo dos Doces Vovó Naná!"

    function whatsapp(){
        window.open(`https://wa.me/5521999280843?text=${msg}`,'_blank');
    }

    const zoom = () => {
        setZoomed(!zoomed); 
      };

      const zoom2 = () => {
        setZoomed2(!zoomed2);
      };

      const zoom3 = () => {
        setZoomed3(!zoomed3);
      };

      const toggleZoom = (zoomSetter) => {
        zoomSetter((prev) => !prev);
      };
    return (    
        
        <Conteiner>
        <Header>
        <img src={Logo} alt="Logo" />
        </Header>
        <Icone>
        <Link to={`/`}>
        <ion-icon name="arrow-back-circle-outline"></ion-icon>
        </Link>
        </Icone>
        <h1>Biscoitos</h1>
        <ZapConteiner>
        <Zap>
        <ion-icon onClick={whatsapp} name="logo-whatsapp"></ion-icon>
        </Zap>
        </ZapConteiner>

        <BoxConteinerUm>
      <Box onClick={() => toggleZoom(setZoomed)}>
        <img
          src={Biscoito1}
          alt="biscoito"
          style={{
            transform: zoomed ? 'scale(4) translate(100%, -10%)' : 'scale(1) translate(0, 0)',
            transformOrigin: 'center center',
          }}
        />
        {zoomed && (
          <ZoomedImage
            src={Biscoito1}
            alt="biscoito"
            style={{
              transform: 'scale(4) translate(100%, -10%)',
              transformOrigin: 'center center',
            }}
          />
        )}
        <h2>Amanteigados</h2>
        <h3>Goiaba: R$ 6,00</h3>
        <h3>Leite Condensado: R$ 8,00</h3>
      </Box>

      <Box onClick={() => toggleZoom(setZoomed2)}>
        <img
          src={Biscoito2}
          alt="biscoito"
          style={{
            transform: zoomed2 ? 'scale(4) translate(1%, -1%)' : 'scale(1) translate(0, 0)',
            transformOrigin: 'center center',
          }}
        />
        {zoomed2 && (
          <ZoomedImage
            src={Biscoito2}
            alt="biscoito"
            style={{
              transform: 'scale(4) translate(-50%, -50%)',
              transformOrigin: 'center center',
            }}
          />
        )}
        <h2>Rosquinhas</h2>
        <h3>Cebola: R$ 6,00</h3>
        <h3>Queijo: R$ 8,00</h3>
      </Box>

      <Box onClick={() => toggleZoom(setZoomed3)}>
        <img
          src={Biscoito3}
          alt="biscoito"
          style={{
            transform: zoomed3 ? 'scale(4) translate(-100%, -1%)' : 'scale(1) translate(0, 0)',
            transformOrigin: 'center center',
          }}
        />
        {zoomed3 && (
          <ZoomedImage
            src={Biscoito3}
            alt="biscoito"
            style={{
              transform: 'scale(4) translate(-50%, -50%)',
              transformOrigin: 'center center',
            }}
          />
        )}
        <h2>Suspiros</h2>
        <h3>R$ 6,00</h3>
      </Box>
    </BoxConteinerUm>
    </Conteiner>
     )
    }

const Header = styled.div`
background-image: url(${Fundo});
font-family: 'Righteous', cursive;
font-size: 25px;
font-weight: 400;
color: #000;
display: flex;
justify-content: center;
box-shadow: 0px 10px 10px #00000040;
width: 100%;

img {
border-radius: 100px;
width: 150px;
height: 150px;
} 
`

const Icone = styled.div`
width: 100%;
text-decoration: none;
margin-top: 20px;

ion-icon {
    font-size: 30px;
    margin-left: 20px;
    opacity: 0.5;
    text-decoration: none;
    color: black;
}
`

const Conteiner = styled.div `
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;


h1{
display: flex;
justify-content: center;
font-family: 'Dancing Script', cursive;
font-weight: 400;
margin-top: 5px;
}
`

const Zap = styled.div`
margin-bottom: 60px;
margin-top: 10px;
margin-right: 20px;
cursor: pointer;
width: 40px;
height: 100%;
border-radius: 10px;
display:flex;
justify-content: center;
align-items: center;
font-size: 20px;
color: white;
font-weight: bold;

ion-icon{
    background-color: white;
    font-size: 40px;
    color: #a4c639;
    position: fixed;
}
`

const ZapConteiner = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
`

const Box = styled.div`

border-radius: 50px;
width: 100px;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
flex-wrap: wrap;
border: 2px solid #696969;
margin-bottom: 40px;
box-shadow: 0px 10px 10px #00000040;
position: relative;   


img {
    width: 100px;
    height: 100px;
    border-radius: 48px;
    position: fixed;
    position: absolute;
    transition: transform 0.5s;
}

h2{
    margin-top: 110px;
    font-size: 15px;
}

h3{
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 150px;
}
`

const BoxConteinerUm = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
flex-wrap: wrap;
`

const ZoomedImage = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  transform-origin: center center;
  transition: transform 0.3s, transform-origin 0.3s;
  z-index: 2;
  display: ${({ zoomed }) => (zoomed ? 'block' : 'none')};
  top: 0;
  left: 0;
`;