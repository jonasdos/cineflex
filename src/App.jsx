import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Filmes from './Filmes'
import Sessions from './Sessions'
import Cadeiras from './Cadeiras'
import Sucesso from './Sucesso'
export default function App() {
 
 
  return (
    <>
     <BrowserRouter>
      <Header/>
        <Routes>
         <Route path='/' element={<Filmes/>}/> 
         <Route path='/sessions/:filmeid' element={<Sessions/>}/> 
         <Route path='/cadeiras/:sessionid' element={<Cadeiras/>}/> 
         <Route path='/sucesso' element={<Sucesso/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}




