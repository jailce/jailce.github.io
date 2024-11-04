// src/components/Card.js
import React from 'react';
import {CardContainer, CardImage, CardTitle, CardTagGroup  } from './styles';





const Card = ({ title, tag, imageUrl, onClick }) => {
  return (
    <CardContainer  onClick={onClick}>
 
        <CardImage src={imageUrl} alt={title} />
        <CardTitle>{title}</CardTitle>
        
        <CardTagGroup>{tag}</CardTagGroup>

    </CardContainer>
  );
};

export default Card;
