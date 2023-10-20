import styled from "styled-components"
import Fundo from "../Fundo.png"
import Logo from "../Logo.png"


export default function Menu() {

 return (
    
    <Conteiner>
       
    <Header>
    <img src={Logo} alt="Logo" />
    </Header>
    <ZapConteiner>
    <Zap>
        Chama no Zap!
    </Zap>
    </ZapConteiner>
    <BoxConteinerUm>
    <Box>
        Goiabada
    </Box>
    <Box>
        Defumados
    </Box>
    <Box>
        Queijos
    </Box>
    </BoxConteinerUm>
    <BoxConteinerDois>
    <Box>
        Geléias
    </Box>
    <Box>
        Biscoitos Amanteigados
    </Box>
    <Box>
        Doces de Leite
    </Box>
    </BoxConteinerDois>
    
    </Conteiner>
   
 )
}

const Header = styled.div`
background-color: #ffc8c8;
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

const Conteiner = styled.div `
background-image: url(${Fundo});
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

`

const Box = styled.div`
background-color: white;
border-radius: 20px;
width: 100px;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
flex-wrap: wrap;
border: 4px solid #F5A9BC;
margin-bottom: 15px;
box-shadow: 0px 10px 10px #00000040;

`

const BoxConteinerUm = styled.div`
/* background-color: pink; */
display: flex;
justify-content: space-around;
width: 100%;
flex-wrap: wrap;

`

const BoxConteinerDois = styled.div`
/* background-color: pink; */
display: flex;
justify-content: space-around;
width: 1800px;
flex-wrap: wrap;
width: 100%;
`

const Zap = styled.div`
background-color: #a4c639;
margin-bottom: 50px;
margin-top: 50px;
cursor: pointer;
width: 160px;
height: 40px;
border-radius: 10px;
display:flex;
justify-content: center;
align-items: center;
font-size: 20px;
color: white;
font-weight: bold;
`

const ZapConteiner = styled.div`
/* background-color: gray; */
width: 100%;
display: flex;
justify-content: flex-end;
`