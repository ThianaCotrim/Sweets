import styled from "styled-components"
import Fundo from "../Fundo.png"
import Logo from "../Logo.png"
import { Link } from 'react-router-dom'
import Defumados from "../Defumados.jpeg"
import Queijos from "../Queijos.jpeg"
import Doces from "../Doces.jpeg"
import Geleias from "../Geleias.jpeg"
import Biscoitos from "../Biscoitos.jpeg"
import Molhos from "../Molhos.jpeg"
import Pastas from "../Pastas.jpeg"
import Conservas from "../Conservas.jpeg"
import Bolos from "../Bolos.jpeg"


export default function Produtos() {

    const msg = "Oii, gostaria de mais informações sobre os produtos do catálogo dos Doces Vovó Naná!"

    function whatsapp(){
        window.open(`https://wa.me/5521999280843?text=${msg}`,'_blank');
    }

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
    <h1>Produtos </h1>
    <ZapConteiner>
    <Zap>
    <ion-icon onClick={whatsapp} name="logo-whatsapp"></ion-icon>
    </Zap>
    </ZapConteiner>
    <BoxConteinerUm>
    <Link to={`/doces`}>
    <Box>
    <img src={Doces} alt="doces" />
    </Box>
    </Link>
    <Link to={`/defumados`}>
    <Box>
    <img src={Defumados} alt="defumados" />
    </Box>
    </Link>
    <Link to={`/queijos`}>
    <Box>
    <img src={Queijos} alt="queijos" />
    </Box>
    </Link>
    </BoxConteinerUm>
    <BoxConteinerDois>
    <Link to={`/geleias`}>
    <Box>
    <img src={Geleias} alt="geleias" />
    </Box>
    </Link>
    <Link to={`/biscoitos`}>
    <Box>
    <img src={Biscoitos} alt="biscoito" />
    </Box>
    </Link>
    <Link to={`/molhos`}>
    <Box>
    <img src={Molhos} alt="molhos" />
    </Box>
    </Link>
    </BoxConteinerDois>
    <BoxConteinerDois>
    <Link to={`/pastas`}>
    <Box>
    <img src={Pastas} alt="pastas" />
    </Box>
    </Link>
    <Link to={`/conservas`}>
    <Box>
    <img src={Conservas} alt="conservas" />
    </Box>
    </Link>
    <Link to={`/bolos`}>
    <Box>
    <img src={Bolos} alt="bolos" />
    </Box>
    </Link>
    </BoxConteinerDois>
    
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

const Box = styled.div`

border-radius: 20px;
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
    border-radius: 17px;
    opacity: 0.8;
    position: fixed;
    position: absolute;
}

`

const BoxConteinerUm = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
flex-wrap: wrap;

`

const BoxConteinerDois = styled.div`
display: flex;
justify-content: space-around;
width: 1800px;
flex-wrap: wrap;
width: 100%;
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
/* background-color: gray; */
width: 100%;
display: flex;
justify-content: flex-end;
`