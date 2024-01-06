import './App.css'
import styled from 'styled-components'
import BasicPackage from './components/BasicPackage';
import ProfessionalPackage from './components/professionalPackge';
import FreePackage from './components/FreePackage';
import { useState } from 'react';


const Background = styled.div`
width: 100%;
height: 450px;
background-color: #1D539E;
`;

const H1 = styled.h1`
color: #fff;
text-align: center;
font-family: 'Open Sans', sans-serif;
font-size: 48px;
font-weight: 700;
padding-top: 50px;


`;

const  P = styled.p`
color: #fff;
text-align: center;
font-family: Open Sans;
font-size: 18px;

`;

const ConteinerHome = styled.div`
display: flex;
justify-content: center;

`;

const ConteinerGrid = styled.div`
display: grid;
grid-template-columns:repeat(3, 1fr);
grid-gap: 10px;
margin-top: 150px;


& > :nth-child(2) {
  margin-top: -20px;
  }


`;


function App() { 
 
  return (
    <>
     <Background>
      <H1>Conheça nossos planos</H1>
      <P>Conheça nossas soluções e escolha o plano ideal para o seu próximo projeto.</P>
     <ConteinerHome>
      <ConteinerGrid>
      <FreePackage/>
      <BasicPackage/>
      <ProfessionalPackage/>
      </ConteinerGrid>
      </ConteinerHome>
     </Background>
     
    </>
  )
}

export default App
