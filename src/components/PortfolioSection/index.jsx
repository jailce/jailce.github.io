import React from 'react';
import { useNavigate } from 'react-router-dom';
import projects from '../../data/projects.json'; // Importação direta do JSON
import Card from '../Card';

import {
  Container,
  Content,
  Section,
  Title,
  CardStack 

} from './styles';

const PortfolioSection = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    console.log("Card clicado com ID:", id); // Adicione este log para verificar o clique
    navigate(`/project/${id}`);
  };

  return (
    <Container>
      <Content>

      <Title>Alguns dos meus últimos trabalhos</Title>
      <Section>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 " >
        {projects.map((project) => (
          <Card 
            key={project.id}
            title={project.title}

            tag={
              project.stack ? project.stack.map((tag, index) => (
                <CardStack  key={index} className="">
                  {tag}
                </CardStack >
              )) : null
            }

          
            imageUrl={project.imageUrl}
            link={project.link}
            onClick={() => handleCardClick(project.id)}
          />
        ))}

      </div>
      </Section>
      </Content>
    </Container>
  );
};

export default PortfolioSection;
