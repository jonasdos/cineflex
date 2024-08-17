import styled from "styled-components"


export default function Titulo ({ children, $cor}) {

  return (<>
  <H1 $cor={$cor}>{children}</H1>
  </>)
}

const H1 = styled.h1`
text-align: center;
color: ${props => props.$cor || '#FFFFFF' } ;
font-family: 'Sarala';
font-size: 24px;
font-weight: 400;
line-height: 39.13px;
letter-spacing: 0.04em;
padding-top: 80px;
margin-bottom: 20px;

`