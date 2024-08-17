import React, { useState } from "react"
import styled from "styled-components"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Titulo from './Titulo'

export default function Sucesso() {
  const location = useLocation()
  const [{filme, cpf, data, hora, ids, ingressos, nome}] = location.state
  const [carregapage, setCarregaPage] = useState(false)
  const [titulo, setTitulo] = useState('Reservando seus ingressos...')
useEffect(() =>{
  axios.post('https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many',{
    ids: ids,
    name: nome,
    cpf: cpf
  })
  .then(sucess => {
    setCarregaPage(true)
    setTitulo('Pedido finalizado!')
    })
    .catch(err => console.log(err))
    
  },[])
    if (!carregapage) {
      return <>
    <Titulo>{titulo}</Titulo>
    </>}
  
  return (<>
  
  <Titulo $cor={'#9DB899'}>{titulo}</Titulo>
  <Extrato>
    
      <h1>Filme e sessão</h1>
      <h2>{filme}</h2>
      <h2>{data} às {hora}</h2>
   
    
      <h1>ingressos</h1>
     
      {ingressos.map((ingresso, i) => 
       <h2 key={i}> Assento {ingresso} </h2>)}
      
      <h1>Comprador(a)</h1>
      <h2>Nome: {nome}</h2>
      <h2>CPF: {cpf}</h2>
   
  </Extrato>

        <BackHome to='/'>Voltar para tela inicial</BackHome>
  
    </>)
}

const Extrato = styled.div`
background-color: #2B2D36;
margin: 20px;
border-radius: 8px;
padding: 20px;
h1 {
  color: #EE897F;
  font-size: 22px;
  font-weight: 700;
  line-height: 35.87px;
  letter-spacing: 0.04em;
  position: relative;
  margin-bottom: 10px;
  margin-top: 10px;
  &::after {
    content:'';
    background-color: #4E5A65;
    height: 1px;
    position: absolute;
    width: 100%;
    bottom: -0px;
    left: 50%;
    transform: translateX(-50%)
    
  }
}
  h2 {
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 400;
    line-height: 32.61px;
    letter-spacing: 0.04em;
    
  }
  `
const BackHome = styled(Link)`
  margin-top: 36px;
  background-color: #EE897F;
  color: #2B2D36;
  border-radius: 8px;
  padding: 10px;
  margin: 20px;
  border: none;
  font-size: 18px;
  line-height: 29.35px;
  letter-spacing: 0.04em;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  justify-content: center;
`
