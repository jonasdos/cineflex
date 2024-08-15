import logo from './assets/cineflexlogo.svg'
import title from './assets/cineflextitle.svg'
import styled from 'styled-components'

export default function Header() {
    return  <Container>
        <div>
        <img src={logo}/>
        <img src={title}/>
        </div>
      </Container>

}
const Container = styled.header`
background-color: #EE897F;
height: 67px;
display: flex;
justify-content: center;
align-items: center;
div {
  display: flex;
}
img {
  margin-left: 10px;
  margin-right: 10px;
}
`