
import styled from 'styled-components';

export const CardContainer = styled.div`
  /* background-color: transparent; */
  position: relative;

  padding: 15px;
  text-align: center;
  /* border: 1px solid; */
  /* border-image-slice: 1;
  border-image-source: linear-gradient(268deg, #24A1CA 2.38%, #8764D4 98.75%); */
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
 

  background: linear-gradient(#111319, #111319) padding-box,
              linear-gradient(to right,  #8764D4 , #24A1CA ) border-box;
  border-radius: 0.5rem;
  border: 1px solid transparent;

  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }

  &.disabled {

 opacity: 0.8;
  padding: 15px;
  text-align: center;
  background: linear-gradient(#111319, #111319) padding-box,
  linear-gradient(to right,  #000 , #555 ) border-box;
  border: 1px solid #C4CFE050;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  transition: transform 0.2s;
  &:hover {
    transform: scale(1);
  }
}
`;
export const CardImageContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  border-radius: 0.2rem;
  overflow: hidden;

  &.isComming::after {
    content: 'em breve';
    display: flex;
    justify-content: center;
color: #fff;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #00000050;
    z-index: 1;
    top: 0;
    left: 0;
  }
`;
export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: top center;
  border-radius: 0.2rem;
  
  position: relative;

 
`;

export const CardTitle = styled.h3`
  color: #fbfbfb;
  text-align: left;
  margin: 16px 0 14px 0 ;
`;

export const CardDescription = styled.p`
text-align: left;
  font-size: 0.9em;
  color: #666;
`;

export const CardTagGroup = styled.p`
  display: flex;         /* Ajusta a largura automaticamente ao conteúdo */
  font-size: 0.8rem;
  line-height: normal;
  font-weight: 600;
  color: #888;
  margin: 2px 0;
  justify-content: start;
  border-radius: 50px;
  

`;