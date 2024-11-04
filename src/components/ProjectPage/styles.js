import styled from 'styled-components';


export const Container = styled.div`

color: #333;

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

  border-radius: 2rem;
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

  margin: 0;

`;
export const Stack = styled.p`
  display: inline-block;         /* Ajusta a largura automaticamente ao conteúdo */
  font-size: 0.8rem;
  line-height: normal;
  font-weight: 600;
  color: #888;
  margin: 0;
  border: 1px solid #000;
  border-radius: 50px;
  padding: 0.2rem 0.8rem;
  margin-right: 0.5rem;
`;
export const Description = styled.p`
  font-size: 1.2wv;
  line-height: normal;
  font-weight: 600;
  color:#555;
  margin: 0;
`;