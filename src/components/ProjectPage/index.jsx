// src/components/ProjectPage.js
import React, {useEffect} from "react";
import projects from "../../data/projects.json";
import { FaArrowLeft,  FaArrowRight } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Title,
  Container,
  Stack,
  Section,
  Button,
  Description,
  Content,
  CardImage,
} from "./styles";

const ProjectPage = () => {

  const { projectId } = useParams();

  const navigate = useNavigate();


  useEffect(()=> { window.scrollTo(0,0);}, [projectId])



  const project = projects.find((proj) => proj.id === parseInt(projectId));

  if (!project) {
    return <div>Projeto não encontrado.</div>;
  }

  return (
    <>
    <Button>
    <FaArrowLeft color="#999" size={20} onClick={() => navigate(-1)} />
  </Button>
    <Container>

      <Content>
        <Section >
            <div className="grid gap-2  sm:grid-cols-1 md:grid-cols-2 ">

          <div>
 
            <Title className="">{project.title}</Title>
     <div className="mt-1 mb-3">

     {project.stack.map((tag, index) => (<Stack className="grid gap-2 md:grid-cols-2 "  key={index}    tag={tag.stack}                >
            {tag}
         </Stack>
) 
         )} 
     </div>
    

            <Description className="">{project.description}</Description>
          </div>


          <CardImage src={project.imageUrl} alt={project.title} />
          </div>
          <div>
          <Link className="  btn-pv" to={project.link}   target="_blank" >Live Preview</Link>
          </div>
       
        </Section>
        <hr className="mb-4" />

        {project.sections.map((section, index) => {
          switch (section.type) {
            case "text":
              return (
                <TextSection
                  key={index}
                  title={section.title}
                  content={section.content}
                />
              );
            case "twoImages":
              return <TwoColumnImages key={index} images={section.images} />;
            case "centeredImage":
              return <CenteredImage key={index} image={section.image} />;
            default:
              return null;
          }
        })}
      </Content>
    </Container>
    </>
  );
};

const TextSection = ({ title, content }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    <p>{content}</p>
  </div>
);

const TwoColumnImages = ({ images }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
    {images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt=""
        className="w-full h-auto bg-gray-300"
      />
    ))}
  </div>
);

const CenteredImage = ({ image }) => (
  <div className="flex justify-center mb-8">
    <img src={image} alt="" className="w-full  h-auto object-cover " />
  </div>
);

export default ProjectPage;
