import styled from 'styled-components'
import Header from './Header'
import Filmes from './Filmes'


export default function App() {
 
 
  return (
    <>
    <Body>
      <Header/>
      <Filmes/> 

      </Body>
    </>
  )
}

const Body = styled.div`
background-color: #212226;

`


