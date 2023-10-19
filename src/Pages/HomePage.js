import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function HomePage() {
    return (
<Conteiner>
    <Header>
    DOCES VOVÓ NANÁ
    </Header>
    <Body>
    Sejam bem vindos! 
    </Body>
    <Link to={`/menu`}>
    <Button>
      Clique Aqui
    </Button>
    </Link>
    
  </Conteiner>
    )
}


const Conteiner = styled.div `
background-color: red;
height: 950px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

const Header = styled.div`
background-color: blue;
font-family: 'Righteous', cursive;
font-size: 44px;
font-weight: 400;
color: #FFFFFF;
display: flex;
justify-content: center;
box-shadow: 0px 10px 10px #00000040;
`

const Body = styled.div`
background-color: green;
display: flex;
justify-content: center;
margin-top: 50px;
margin-bottom: 50px;
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
`