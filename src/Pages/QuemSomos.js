import Logo from "../Logo.png"
import styled from 'styled-components'

export default function QuemSomos() {

    return (
        <Conteiner>
  
    <Header>
    <img src={Logo} alt="Logo" />
    </Header>
    <Body>
    <h2>Nossa inspiração vem do Noroeste Fluminense do Rio de Janeiro , específicamente da cidade de Miracema onde a saudosa Tia Maria fazia a melhor goiabada da região e, minha mãe,  saudosa Evangelina (Vovó Naná) irmã da Tia Maria, trouxe essa arte para Rio Bonito RJ onde, nos dias de hoje, dou continuidade à essa ( que é nosso carro chefe) e outras artes.
" Cada tacho mexido sinto ali a presença delas me agradecendo pela continuidade e dedicação à sua e,  agora nossa arte."
Fica aqui, enquanto sobrinho e filho, meu agradecimento, 
respeito e eterna gratidão às irmãs Pereira de Miracema: Maria e Naná.</h2> 
</Body>
  </Conteiner>
          
    )
}

const Conteiner = styled.div `
background-color: #EDAEAE;
height: 950px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

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

const Body = styled.div`
/* background-color: green; */
display: flex;
justify-content: center;
margin-top: 20px;
margin-bottom: 40px;
flex-direction: column;

h2{
line-height: 2.5;
font-weight: 300;
font-size: 20px;
text-align: center;
font-family: 'Cormorant Garamond', serif;
}
`