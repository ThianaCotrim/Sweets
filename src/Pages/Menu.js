import styled from "styled-components"

export default function Menu() {

    const msg = "Oii, gostaria de mais informações sobre os produtos do catálogo dos Doces Vovó Naná!"

    function whatsapp(){
        window.open(`https://wa.me/5521999280843?text=${msg}`,'_blank');
    }

 return (
    <Conteiner>
    <Header>
    DOCES VOVÓ NANÁ
    </Header>
    <ZapConteiner>
    <Zap onClick={whatsapp}>
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
/* background-color: blue; */
font-family: 'Righteous', cursive;
font-size: 25px;
font-weight: 400;
color: #000;
display: flex;
justify-content: center;
box-shadow: 0px 10px 10px #00000040;
width: 100%;
margin-bottom: 30px;
`

const Conteiner = styled.div `
/* background-color: red; */
height: 950px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

`

const Box = styled.div`
background-color: white;
border-radius: 20px;
width: 250px;
height: 250px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
flex-wrap: wrap;
border: 4px solid #000;
margin-bottom: 15px;

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