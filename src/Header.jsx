import logo from './assets/cineflexlogo.svg'
import title from './assets/cineflextitle.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Header() {
    return  <Container>
        <Logo to={'/'}>
        <img src={logo}/>
        <img src={title}/>
        </Logo>
      </Container>

}
const Container = styled.header`
background-color: #EE897F;
height: 67px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
z-index: 10;

top: 0px;

`
const Logo = styled(Link)`
display: flex;
img {
  margin-left: 10px;
  margin-right: 10px;
}
`