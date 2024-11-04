// ProfileSection.styles.js
import styled from 'styled-components';


export const Container = styled.div`


  text-align: center;
  color: #333;

  
  position: relative;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 988px;

  margin: 0 auto;
  justify-content: center;
  align-items: center;

`;
export const Section = styled.div`
  display: flex;
  justify-content: center;
  

`;
export const Card = styled.div`
  flex: 1;
  text-align: left;
`;

export const Title = styled.h2`

 
  margin: 2rem 0 1rem 0;

`;

export const Subtitle = styled.p`
  font-size: 1.2em;
  font-weight: 800;
  margin: 10px 0;
`;





export const Description = styled.p`
  margin-top: 20px;
  color: #555;
  max-width: 400px;
  font-size: 0.9em;
  line-height: 1.4;
`;

export const CardStack = styled.p`
  display: inline-block;         /* Ajusta a largura automaticamente ao conteúdo */
  font-size: 0.7rem;
  line-height: normal;
  font-weight: 600;
  color: #10438F;
  margin: 0;
  background-color:  #B9D3FA  ;
  border: 1px solid #10438F;
  border-radius: 50px;
  padding: 0.08rem 0.45rem;
  margin-right: 0.5rem;
`;