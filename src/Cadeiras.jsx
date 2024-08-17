import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Titulo from './Titulo'
import { formataCPF } from "./scripts/formatacpf"
export default function Cadeiras() {
  const {sessionid} = useParams()
  const [titulo, setTitulo] =useState('Carregando...')
  const [cadeiras, setCadeiras] = useState(null)
  const navigate = useNavigate()
  const [comprador, setComprador] = useState({
  nome: null, 
  cpf: null, 
  filme: null, 
  data:null, 
  hora: null,
  ingressos:[],
  ids:[]})
  useEffect(() => {
    axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionid}/seats`)
    .then(res => {
      setCadeiras(res.data.seats)
      setTitulo('Selecione o(s) assento(s)')            
      setComprador(prev => ({
        ...prev, 
        filme: res.data.movie.title, 
        data: res.data.day.date,
        hora: res.data.name}))
    })
    .catch(error => console.log(error))
},[])
function selecionaCadeira(cadeiraid) {
 setCadeiras(prev => 
  prev.map((cadeira) => 
    cadeiraid === cadeira.id && cadeira.isAvailable ? {
      ...cadeira, selecionada: !cadeira.selecionada
    } : cadeira
))}
function atualizaNome(valor) {
  setComprador(prev => ({
    ...prev,
    nome: valor.target.value})
)}
function atualizaCPF(valor) {
  let cpf = formataCPF(valor.target.value)

  setComprador(prev => ({
  ...prev,
  cpf: cpf}))
}
function armazenaCompra(e) {
  e.preventDefault()
  cadeiras.forEach(element => {
    element.selecionada ? comprador.ingressos.push(element.name) : ''
  })
  cadeiras.forEach(element => {
    element.selecionada ? comprador.ids.push(element.id) : ''
  });
  const dadosCompra = [
    {
      nome: comprador.nome,
      cpf: comprador.cpf,
      filme: comprador.filme,
      data: comprador.data,
      hora: comprador.hora,
      ingressos: comprador.ingressos,
      ids: comprador.ids
    }

  ]
  navigate('/sucesso', {state: dadosCompra})
  
}

  if(cadeiras === null) {
    return <>
    <Titulo>{titulo}</Titulo>
    
    </>
  }

  return (<>
  <Box>
    <Titulo>{titulo}</Titulo>
    <Assentos>
      {cadeiras.map((cadeira, i) => 
      <Assento key={i} $disponibilidade={cadeira.isAvailable} $selecionada={cadeira.selecionada} onClick={() =>selecionaCadeira(cadeira.id)}>
        <p>{cadeira.name}</p>
      </Assento>
        )}
    </Assentos>

<Formulario onSubmit={armazenaCompra} >
  <label htmlFor="Username">Nome do comprador(a)</label>
  <input 
  type="text" 
  id="Username" 
  name="UserName" 
  placeholder="Digite seu nome..." 
  onChange={atualizaNome}
  required 
  minLength={3}/>
  <label htmlFor="CPF">CPF do comprador(a)</label>
  <input 
  type="text" 
  name="CPF" 
  id="CPF" 
  placeholder="Digite seu CPF..." 
  onChange={atualizaCPF} 
  required 
  value={comprador.cpf || ''} 
  minLength={14} 
  maxLength={14}></input>
  <button type="submit" > Reservar assento(s)</button>

</Formulario>
    
</Box></>)
}

const Assentos = styled.div`
display: grid;
justify-items: center;
grid-template-columns: repeat( 10, 1fr);
gap: 5px;

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
background-color: ${props => {
 if(props.$selecionada) {return '#FADBC5'} 
  else if (props.$disponibilidade) {return '#9DB899'}
  else {return'#2B2D36' }}};
color: #2B2D36;
border: ${props => props.$selecionada ? 'solid 2px #EE897F': 'none'};
p {
  font-size: 11px ;
  font-family: 'Roboto';
  font-weight: 400;
  letter-spacing: 0.04em;
}

`

const Formulario = styled.form`

display: flex;
flex-direction: column;
margin: 25px;
padding-top: 40px;
color: #FFFFFF;
font-size: 16px;
line-height: 26.09px;
input {
  margin-bottom: 11px;
  margin-top: 5px;
  border-radius: 8px;
  padding: 0px 15px;
  height: 40px;
  border: none;
  font-size: 16px;
  font-weight: 400;
}
input::placeholder {
  font-style: italic ;
  color: #AFAFAF;
  font-size: 16px;
  font-weight: 400;

}
label {
  margin-left: 5px;
}
button {
  margin-top: 36px;
  background-color: #EE897F;
  color: #2B2D36;
  border-radius: 8px;
  height: 42px;
  border: none;
  font-size: 18px;
  line-height: 29.35px;
  letter-spacing: 0.04em;
  font-weight: 700;
}
`

const Box = styled.div`
display: flex;
flex-direction: column;
max-width: 450px;
margin: 0 auto;

`