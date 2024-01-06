import styled from "styled-components";
import { FaCheck } from "react-icons/fa6";


const ConteinerPack = styled.div`
width: 355px;
height: 470px;
background-color: #fff;
border-radius: 8px;
`;


const Conteinertop = styled.div`
width: 100%;
height: 76px;
border-radius: 8px 8px 0px 0px;
background: transparent;
display: flex;
justify-content: center;
align-items: center;
`;



const Preco = styled.h2`
color: #1E2338;
font-family: Open Sans;
font-size: 38px;
font-style: normal;
font-weight: 700;
`;


const Preco2 = styled.h2`
color: #1E2338;
font-family: Open Sans;
font-size: 18px;
font-style: normal;
font-weight: 700;
position: relative;
top: 10px;


`;

const Time = styled.p`
color: #828799;
font-family: Open Sans;
font-size: 18px;
font-style: normal;
font-weight: 400;
position: relative;
top: 10px;
`;
    

const Subtitle = styled.p`
color: #828799;
width: 291px;
font-family: Open Sans;
font-size: 14px;
font-weight: 400;
margin: 20px 0 20px 0;
display: flex;
justify-content: center;

`;

const Free = styled.h4`
color: #000;
font-family: Open Sans;
font-size: 20px;
font-weight: 600;

`;

const Description = styled.p`
color: #828799;
font-family: Open Sans;
font-size: 16px;
font-style: normal;
font-weight: 600;
margin-left: 15px;
`;

const BoxDescrition = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
margin: 20px 0 20px 0;
`;

const Boxsvg = styled.div`
display: flex;
margin-bottom: 20px;
`;

const Boxhead = styled.div`
display: flex;
justify-content: space-between;
width: 300px;
`;

const Divisao = styled.span`
display: flex;
justify-content: center;
&::after{
    content: '';
    position: absolute;
    height: 2px;
    width:295px;
    background-color: #EEE;
   
 
}

`;


const ConteinerSutitle = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: center;
`;


const BoxNumers = styled.div`
display: flex;
align-items: center;
margin: 20px 0 0 30px;
`;

const Button = styled.button`
border-radius: 10px;
background-color: #fff;
width: 300px;
height: 50px;
color: #1D539E;
outline: none;
border: #1D539E 2px solid;
font-size: 18px;
font-weight: 600;
transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease; /* Adiciona transições suaves para o efeito */

  &:hover {
    cursor: pointer !important;
    background-color: #e5e5e5;
    color: #163c73; 
    border-color: #163c73;
  }

`;



const ConteinerButton = styled.div`
Position: relative;
bottom: 15px;
left: 22px;

`;


const ProfessionalPackage = ()=>{
return(
<>
<ConteinerPack>
<Conteinertop>
    <Boxhead>
    <Free>Profissional</Free>
    </Boxhead>
</Conteinertop>
       <BoxNumers>
        <Preco>R$59</Preco>
        <Preco2>,00</Preco2>
        <Time>/mês</Time>
         </BoxNumers>

         <ConteinerSutitle>
        <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subtitle>
        </ConteinerSutitle>
        <Divisao/>
        
        <BoxDescrition>
        <Boxsvg>
         <FaCheck size={20} color="#59CE9F"/>
         <Description>Lorem ipsum dolor sit amet</Description>
         </Boxsvg>

         <Boxsvg>
         <FaCheck size={20} color="#59CE9F"/>
         <Description>Lorem ipsum dolor sit amet</Description>
         </Boxsvg>

         <Boxsvg>
         <FaCheck size={20} color="#59CE9F"/>
         <Description>Lorem ipsum dolor sit amet</Description>
         </Boxsvg>

         <Boxsvg>
         <FaCheck size={20} color="#59CE9F"/>
         <Description>Lorem ipsum dolor sit amet</Description>
         </Boxsvg>
         
           </BoxDescrition>
         <ConteinerButton>
         <Button>ASSINAR</Button>
         </ConteinerButton>
</ConteinerPack>

</>
)
}

export default ProfessionalPackage;