import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from "../Logo.png"

export default function HomePage() {
    return (
<Conteiner>
  
    <Header>
    <img src={Logo} alt="Logo" />
    </Header>
    <Body>
    <h1>Sejam bem vindos! </h1>
  <h2>Nossa inspiração vem do Noroeste Fluminense do Rio de Janeiro , específicamente da cidade de Miracema onde a saudosa Tia Maria fazia a melhor goiabada da região e, minha mãe,  saudosa Evangelina (Vovó Naná) irmã da Tia Maria, trouxe essa arte para Rio Bonito RJ onde, nos dias de hoje, dou continuidade à essa ( que é nosso carro chefe) e outras artes.
" Cada tacho mexido sinto ali a presença delas me agradecendo pela continuidade e dedicação à sua e,  agora nossa arte."
Fica aqui, enquanto sobrinho e filho, meu agradecimento, 
respeito e eterna gratidão às irmãs Pereira de Miracema: Maria e Naná.</h2>
    </Body>
    <Link to={`/menu`}>
    <Button>
      <p>Todos os produtos</p>
    </Button>
    </Link>
    
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
width: 120px;
height: 120px;
} 
`

const Body = styled.div`
/* background-color: green; */
display: flex;
justify-content: center;
margin-top: 20px;
margin-bottom: 150px;
flex-direction: column;

h1{
display: flex;
justify-content: center;
font-family: 'Dancing Script', cursive;
font-weight: 400;
}

h2 {
font-size: 8px;
display: flex;
justify-content: center;
text-align: center;
color: white;
font-weight: 400;
line-height: 2;
}
`

const Button = styled.div`
background-color: pink;
width: 200px;
height: 50px;
border-radius: 10px;
display: flex;
justify-content: center;
text-align: center;
align-items: center;
cursor: pointer;
box-shadow: 0px 10px 10px #00000040;

p{
  color: black;
}

`