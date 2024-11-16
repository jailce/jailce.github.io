
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

  const socialNetwork = [
    {
      name:'Github',
      icon:   <FaGithub className="icon-gh" />,
      url:'https://github.com/jailce'

    },

    {
      name:'Behance',
      icon:<FaBehance className="icon bg-blue-600"/>,
      url:'https://www.behance.net/jailce'

    },
    {
      name:'Whatsapp',
      icon:     <FaWhatsapp className="icon bg-green-600" />,
      url:'https://api.whatsapp.com/send?phone=5534993000828'

    }
  ]

  return (
    <Container className="p-0 h-full">
   



      <Content className="flex flex-col sm:flex-row md:p-0 ">
    
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
          <div className="flex space-x-2" >
{socialNetwork.map((x)=>
  <a href={x.url}     target="_blank">{x.icon}</a>




)}

         
         
          
            </div>

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
            <li>Discovery</li>
            <li>Wireframes</li>
            <li>Design System</li>
    
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
            <div 
          className="flex space-x-2" >
           {socialNetwork.map((x)=>
             <a href={x.url}     target="_blank">{x.icon}</a>
           
           
           
           
           )}
            </div>
          
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
