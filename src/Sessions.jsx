import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import  Titulo  from './Titulo'

export default function Sessions() {
  const {filmeid} = useParams()
  const [titulo, setTitulo] = useState('Carregando...')
  const [sessions, setSessions] = useState(null)

useEffect(() => {
  axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${filmeid}/showtimes`

  )
  .then(res => {
    setSessions(res.data)
    setTitulo('Selecione o horario')})
  .catch(error => console.log(error))
},[])

if(sessions === null) {
return <>
  <Titulo>{titulo}</Titulo>
  </>}
return (
  <>
  <Titulo>{titulo}</Titulo>
 
    <Grid>
    {sessions.days.map((session, index) => 
    <SessionBox key={index}>
      <H1Session>
        {session.weekday}, {session.date}
      </H1Session>
      <ContainerHoras>
          {session.showtimes.map((hora, i) => 
          <SelectLink key={i} to={`/cadeiras/${hora.id}`}>
            {hora.name} 
          </SelectLink>
          
          )
        
        }
      </ContainerHoras>
    </SessionBox>)}
    </Grid>
  </>
)

}

const Grid = styled.main`
display: grid;
gap: 20px;
grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
justify-content: center;
justify-items: center;
`
const SessionBox = styled.div`
background-color: #2B2D36;
padding: 20px;
border-radius: 8px;
width: 100%;
max-width: 400px;
`
const H1Session = styled.h1`
text-align: left;
color: #FFFFFF;
font-family: 'Sarala';
font-size: 20px;
font-weight: 400;
line-height: 32.61px;
letter-spacing: 0.04em;
border-bottom: 1px solid #4E5A65;
padding-bottom: 10px;
`
const ContainerHoras = styled.div`
color: #EE897F;
display: flex;
`
const SelectLink = styled(Link)`
  border: 2px solid #EE897F;
  padding: 10px 20px;
  border-radius: 2px;
  margin: 25px 20px 20px 0px ;
  font-size: 16px;
  text-decoration: none;
  color: #EE897F;
`



