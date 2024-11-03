import styled from 'styled-components';


export const Container = styled.div`

color: #333;

padding: 16px;
display: flex;
justify-content: center;
width: 100%;

`;

export const Content = styled.div`
max-width: 988px;

  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;
export const Section = styled.div`

`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 2rem;
  margin: 18px 0;

`;


export const Button = styled.div`
display: flex;
`;
export const Title = styled.h1`

font-size: clamp(48px, 5vw + 1rem, 48px);

  margin: 0;

`;

export const Description = styled.p`
  font-size: 1.2wv;
  line-height: normal;
  font-weight: 600;
  color:#888;
  margin: 0;
`;