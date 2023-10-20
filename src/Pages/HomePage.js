import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from "../Logo.png"
import Fundo from "../Fundo.png"

export default function HomePage() {

    const msg = "Oii, gostaria de mais informações sobre os produtos do catálogo dos Doces Vovó Naná!"

    function whatsapp(){
        window.open(`https://wa.me/5521999280843?text=${msg}`,'_blank');
    }

    function instagram(){
      window.open('https://instagram.com/docesvovonana2020?igshid=YTQwZjQ0NmI0OA==', '_blank')
    }

    return (

<Conteiner>
  
    <Header>
    <img src={Logo} alt="Logo" />
    </Header>
    <Body>
    <h1>Sejam bem vindos! </h1>

    </Body>
    <Link to={`/quemsomos`} style={{ textDecoration: 'none' }}>
    <Button>
    <ion-icon name="person-circle-outline"></ion-icon>
      <p>Quem somos</p>
    </Button>
    </Link>
    <Button onClick={whatsapp}>
    <ion-icon name="logo-whatsapp"></ion-icon>
      <p>Whatsapp</p>
    </Button>
    <Button onClick={instagram}>
    <ion-icon name="logo-instagram"></ion-icon>
      <p>Instagram</p>
    </Button>
    <Link to={`/menu`} style={{ textDecoration: 'none' }}>
    <Button>
    <ion-icon name="list-outline"></ion-icon>
      <p>Produtos</p>
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

h1{
display: flex;
justify-content: center;
font-family: 'Dancing Script', cursive;
font-weight: 400;
}

h2 {
font-size: 11px;
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
width: 450px;
height: 50px;
border-radius: 10px;
display: flex;
justify-content: center;
text-align: center;
align-items: center;
cursor: pointer;
box-shadow: 0px 10px 10px #00000040;
margin-bottom: 30px;

a {
text-decoration: none;
}

p{
  color: black;
}

ion-icon{
  width: 18px;
  height: 18px;
  margin-right: 5px;
  text-decoration: none;
  color: black;
}

`