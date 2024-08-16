import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'
import Filmes from './Filmes'
import Sessions from './Sessions'
import Cadeiras from './Cadeiras'
export default function App() {
 
 
  return (
    <>
     <BrowserRouter>
    <Body>
      <Header/>
        <Routes>
         <Route path='/' element={<Filmes/>}/> 
         <Route path='/sessions/:filmeid' element={<Sessions/>}/> 
         <Route path='/cadeiras/:sessionid' element={<Cadeiras/>}/> 
        </Routes>
    </Body>
      </BrowserRouter>
    </>
  )
}

const Body = styled.div`
background-color: #212226;

`


