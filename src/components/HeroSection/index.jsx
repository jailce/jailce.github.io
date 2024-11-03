
import React from 'react';
import { FaGithub, FaBehance, FaWhatsapp } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import {
  Container,
  Content,
  SectionDev,
  SectionUX,
  Section,
  Title,
  Subtitle,
  SkillsList,
  ProfileImage,
  SocialIcons,
  Description
} from './styles';

const HeroSection = () => {
  const isMdOrLarger = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <Container>
   



      <Content className="flex flex-col sm:flex-row">
    
        {isMdOrLarger ? (     
          <>
          <SectionDev>
          <Title>Dev</Title>
          <Subtitle>Front-end</Subtitle>
          <SkillsList>
            <li>React.JS</li>
            <li>Vue.JS</li>
            <li>Java</li>
          </SkillsList>
        </SectionDev>


        <Section>
          <ProfileImage src="./profile.png" alt="Profile" />
          <SocialIcons>
            <FaGithub className="icon" />
            <FaBehance className="icon" />
            <FaWhatsapp className="icon" />
          </SocialIcons>
          <Description>
            Profissional diferenciada que pode entregar produtos responsivos,
            modernos e de bom gosto, bem executados e ótimas performances
          </Description>
        </Section>


        <SectionUX>
          <Title>UX</Title>
          <Subtitle>Product Designer</Subtitle>
          <SkillsList>
            <li>Wireframes</li>
            <li>Design System</li>
            <li>Responsividade</li>
          </SkillsList>
        </SectionUX></>) : 
        (  <>  

        
        <Section>
        <Section className=" flex w-full">
        <SectionDev>
          <Title>Dev</Title>
          <Subtitle>Front-end</Subtitle>
          <SkillsList>
            <li>React.JS</li>
            <li>Vue.JS</li>
            <li>Java</li>
          </SkillsList>
        </SectionDev>

 

    
        <SectionUX>
          <Title>UX</Title>
          <Subtitle>Product Designer</Subtitle>
          <SkillsList>
            <li>Wireframes</li>
            <li>Design System</li>
            <li>Responsividade</li>
          </SkillsList>
        </SectionUX>
        </Section>  

          <ProfileImage src="./profile.png" alt="Profile" />
          <SocialIcons>
            <FaGithub className="icon" />
            <FaBehance className="icon" />
            <FaWhatsapp className="icon" />
          </SocialIcons>
          <Description>
            Profissional diferenciada que pode entregar produtos responsivos,
            modernos e de bom gosto, bem executados e ótimas performances
          </Description>
        </Section>

        
        </>  
      )}
   
      </Content>

    </Container>
  );
}

export default HeroSection;
