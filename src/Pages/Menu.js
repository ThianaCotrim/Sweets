import styled from "styled-components"

export default function Menu() {

 return (
    <Conteiner>
    <Header>
    DOCES VOVÓ NANÁ
    </Header>
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
background-color: blue;
font-family: 'Righteous', cursive;
font-size: 44px;
font-weight: 400;
color: #FFFFFF;
display: flex;
justify-content: center;
box-shadow: 0px 10px 10px #00000040;
margin-bottom: 50px;
width: 100%;
`

const Conteiner = styled.div `
background-color: red;
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

`

const BoxConteinerUm = styled.div`
background-color: pink;
display: flex;
justify-content: space-around;
width: 100%;
margin-bottom: 30px;
flex-wrap: wrap;

`

const BoxConteinerDois = styled.div`
background-color: pink;
display: flex;
justify-content: space-around;
width: 1800px;
flex-wrap: wrap;
width: 100%;
`