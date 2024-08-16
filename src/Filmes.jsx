import { useState } from 'react'
import styled from 'styled-components'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function Filmes() {
  
  const [filmes, setFilmes] = useState(null)

  useEffect(() => {
    axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies')
    .then(res => {setFilmes(res.data)})
    .catch(error => console.log(error))
  }, [])
  if (filmes === null) {
    return <>
    <Titulo>Carregando...</Titulo>
    <Container/> 
    </>
  }
  return <>
            <Titulo>Em Cartaz</Titulo>
            <Container>
              
              {filmes.map((filme, index) => 
              <Filme key={filme.id} >
                <Poster to={`/sessions/${filme.id}`} >
                <img src={filme.posterURL} />
                </Poster>
              </Filme>
              )}
            </Container>
  </>
}
const Titulo = styled.h1`
text-align: center;
color: #FFFFFF;
font-family: 'Sarala';
font-size: 24px;
font-weight: 400;
line-height: 39.13px;
letter-spacing: 0.04em;
margin-top: 20px;

`
const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
min-height: 100vh;

`
const Filme = styled.div`
img { 
  height: 210px;
  width: 145px;
  border-radius: 8px ;
  margin: 20px 20px;
  
}
`
const Poster = styled(Link)`

`