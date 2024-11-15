import styled from 'styled-components';


export const Container = styled.div`

color:#5A6579;

padding: 16px;
display: flex;
justify-content: center;
width: 100%;

`;

export const Content = styled.div`
max-width: 680px;
width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;
export const Section = styled.div`

`;

export const CardImage = styled.img`
  width: 100%;

  height: 240px;
  object-fit: cover;
  object-position: top center;
  padding: 0 8px;
  border-radius: 0.2rem;
  margin: 18px auto;

`;


export const Button = styled.div`
display: flex;
padding: 10px;

cursor: pointer;
`;
export const Title = styled.h1`
line-height: normal;
font-size: 2rem;
background: linear-gradient(268deg, #24A1CA 2.38%, #8764D4 98.75%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
  margin: 0;

`;
export const Stack = styled.p`
  display: inline-block;         /* Ajusta a largura automaticamente ao conteúdo */
  font-size: 0.8rem;
  line-height: normal;
  font-weight: 400;
  color: #24A1CA ;
  margin: 0;
  border: 1px solid #24A1CA ;
  border-radius: 50px;
  padding: 0.2rem 0.8rem;
  margin-right: 0.5rem;
`;

export const Description = styled.p`
  font-size: 1.2wv;
  line-height: normal;
  font-weight: 300;
  color:#5A6579;
  margin: 0;
`;