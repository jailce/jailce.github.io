
import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #D6DEE1;
  border-radius: 2rem;
  padding: 15px;
  text-align: center;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  transition: transform 0.2s;
  /* flex: 1; */


  &:hover {
    transform: scale(1.05);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: top center;
  border-radius: 1.2rem;
`;

export const CardTitle = styled.h3`

text-align: left;
  margin: 16px 0 0 0 ;
`;

export const CardDescription = styled.p`
text-align: left;
  font-size: 0.9em;
  color: #666;
`;