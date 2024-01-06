import styled from "styled-components";
import { FaCheck } from "react-icons/fa6";


const Conteiner = styled.div`
width: 355px;
height: 490px;
background-color: #fff;
border-radius: 8px;
`;

const Conteinertop = styled.div`
width: 100%;
height: 76px;
border-radius: 8px 8px 0px 0px;
background: #FFCC29;
display: flex;
justify-content: center;
align-items: center;
`;

const Tag = styled.div`
border-radius: 40px;
background: #1D539E;
color: #fff;
display: flex;
align-items: center;
justify-content: center;
font-family: Open Sans;
font-size: 12px;
font-style: normal;
font-weight: 600;
width: 90px;
height: 30px;
  
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

const Basico = styled.h4`
color: #1D539E;
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
margin-top: 40px;

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
margin-top: 30px;
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
background-color: #1D539E;
width: 300px;
height: 50px;
color: #fff;
outline: none;
border: none;
font-size: 18px;
font-weight: 600;
cursor: pointer;
transition: background-color 0.3s ease;

  &:hover {
    cursor: pointer;
    background-color: #163c73; 
  }
`;

const ConteinerButton = styled.div`
Position: relative;
left: 30px;
margin-top: 10px;
`;

const BasicPackage =()=>{
    return(
    <>
    <Conteiner>
<Conteinertop>
    <Boxhead>
    <Basico>Básico</Basico>
    <Tag>Popular</Tag>
    </Boxhead>
</Conteinertop>
       <BoxNumers>
        <Preco>R$29</Preco>
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
         
           </BoxDescrition>
         <ConteinerButton>
         <Button>ASSINAR</Button>
         </ConteinerButton>
         </Conteiner>

    </>
    )
}


export default BasicPackage;