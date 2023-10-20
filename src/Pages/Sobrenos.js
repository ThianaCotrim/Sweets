import Logo from "../Logo.png"
import styled from 'styled-components'
import Fundo from "../Fundo.png"
import Idosas from "../idosas.jpg"

export default function Sobrenos() {

    return (
        <Conteiner>
  
    <Header>
    <img src={Logo} alt="Logo" />
    </Header>
    <h1>Sobre nós! </h1>
    <Box>
    <img src={Idosas} alt="Foto" />
    <Body>
    <h2>Nossa inspiração vem do Noroeste Fluminense do Rio de Janeiro, específicamente da cidade de Miracema onde a saudosa Tia Maria fazia a melhor goiabada da região e, minha mãe,  saudosa Evangelina (Vovó Naná) irmã da Tia Maria, trouxe essa arte para Rio Bonito RJ onde, nos dias de hoje, dou continuidade à essa ( que é nosso carro chefe) e outras artes.
    <h2>"Cada tacho mexido sinto ali a presença delas me agradecendo pela continuidade e dedicação à sua e,  agora nossa arte."</h2>
Fica aqui, enquanto sobrinho e filho, meu agradecimento, 
respeito e eterna gratidão às irmãs Pereira de Miracema: Maria e Naná.</h2> 
<h3>Ass: Hélio Ricardo</h3>
    </Body>
    </Box>
  </Conteiner>
          
    )
}

const Conteiner = styled.div `
background-color: #EDAEAE;
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
}
`

const Header = styled.div`
/* background-color: #ffc8c8; */
background-image: url(${Fundo});
font-family: 'Righteous', cursive;
font-size: 25px;
font-weight: 400;
color: #000;
display: flex;
justify-content: center;
box-shadow: 0px 10px 10px #00000040;
width: 100%;
margin-bottom: 20px;    

img {
border-radius: 100px;
width: 150px;
height: 150px;
} 
`

const Body = styled.div`
background-color: #EBE1E1;
display: flex;
margin-top: 20px;
margin-bottom: 40px;
flex-direction: column;
padding: 30px;
border-radius: 80px;
width: 450px;
height: 100%;
box-shadow: 0px 10px 10px #00000040;

h2{
line-height: 2;
font-weight: 300;
font-size: 20px;
font-family: 'Cormorant Garamond', serif;
}

h3{
    font-family: 'Cormorant Garamond', serif;
    font-weight: 300;
    font-size: 15px;
}
`

const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;

img{
    width: 500px;
    height: 400px;
    border-radius: 40px;
    margin-right: 20px;
    box-shadow: 0px 10px 10px #00000040;
}
`