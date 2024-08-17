import { useState } from 'react'
import styled from 'styled-components'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Titulo from './Titulo'

export default function Filmes() {
  
  const [filmes, setFilmes] = useState([])
  const [titulo, setTitulo] = useState('Carregando...')
  useEffect(() => {
    axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies')
    .then(res => {
      setFilmes(res.data)
      setTitulo('Em cartaz')})
    .catch(error => console.log(error))
  }, [])
 
  return <>
            <Titulo>{titulo}</Titulo>
            <Container>
              
              {filmes.map((filme) => 
              <Filme key={filme.id} >
                <Poster to={`/sessions/${filme.id}`} >
                <img src={filme.posterURL} />
                </Poster>
              </Filme>
              )}
            </Container>
  </>
}

const Container = styled.div`
margin-top: 20px;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
gap: 20px;
justify-content: center;
justify-items: center;

`
const Filme = styled.div`
img { 
  height: 210px;
  width: 145px;
  border-radius: 8px ;
  
  
}
`
const Poster = styled(Link)`

`