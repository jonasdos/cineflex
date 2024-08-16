import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useParams } from "react-router-dom"
import styled from "styled-components"


export default function Cadeiras() {
  const [cadeiras, setCadeiras] = useState(null)
  const {sessionid} = useParams()
  useEffect(() => {
    axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionid}/seats`)
    .then(res => {setCadeiras(res.data)})
    .catch(error => console.log(error))

  },[])

  if(cadeiras === null) {
    return <>
    <Titulo>Carregando...</Titulo>
    <Container/> 
    </>
  }

  return (<>
    <Titulo>Selecione o(s) assento(s)</Titulo>
    <Assentos>
      {cadeiras.seats.map((cadeira, i) => 
      <Assento key={i} $disponibilidade={cadeira.isAvailable}>
        <p>{cadeira.name}</p>
      </Assento>
        )}
    </Assentos>
    <Container/> 
    </>)
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

const Assentos = styled.div`
display: grid;
justify-items: center;
grid-template-columns: repeat(10, 1fr);
margin: 25px;
position: relative;

&::after {
  content: '';
  display: block;
  width: 90%;
  height: 1px;
  background-color: #4E5A65;
  position: absolute;
  bottom: -38px;
  left: 50%;
  transform: translateX(-50%)
}


`
const Assento = styled.div`
width: 26px;
height: 26px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;

margin-bottom: 16px ;
background-color: ${props => (props.$disponibilidade) ? '#9DB899' : '#2B2D36'};
color: #2B2D36;
p {
  font-size: 11px ;
  font-family: 'Roboto';
  font-weight: 400;
  letter-spacing: 0.04em;
}

`