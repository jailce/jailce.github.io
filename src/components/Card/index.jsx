// src/components/Card.js
import React from 'react';
import {CardContainer, CardImage, CardTitle, CardDescription  } from './styles';





const Card = ({ title, description, imageUrl, onClick }) => {
  return (
    <CardContainer  onClick={onClick}>
 
        <CardImage src={imageUrl} alt={title} />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>

    </CardContainer>
  );
};

export default Card;
