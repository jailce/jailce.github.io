// src/components/Card.js
import React from 'react';
import {CardContainer, CardImageContainer, CardImage, CardTitle, CardTagGroup  } from './styles';





const Card = ({ title, tag, imageUrl, onClick, isComingSoon }) => {
  return (
    <CardContainer  onClick={!isComingSoon ? onClick : null}  
      
 
      className={` ${isComingSoon ? 'disabled' : ''}`}
      
      >
  
  <CardImageContainer      className={` ${isComingSoon ? 'isComming' : ''}`}>
  <CardImage src={imageUrl} alt={title} />
  {/* {isComingSoon && (       <span className=" absolute top-0 left-0  bg-black bg-opacity-50  w-full h-full  text-black  text-lg">Em breve</span>)} */}
  </CardImageContainer> 


   

        <CardTitle>{title}</CardTitle> 
        
        <CardTagGroup>{tag}</CardTagGroup>

    </CardContainer>
             
  );
};

export default Card;
