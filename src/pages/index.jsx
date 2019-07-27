import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/renderprops-addons.cjs";

// Components
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

// Elements
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle } from "../elements/Titles";

// Views
import Hero from "../views/Hero";
import Projects from "../views/Projects";
import About from "../views/About";
import Contact from "../views/Contact";

import avatar from "../images/avatar.jpg";

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Shivam Anand.
        </BigTitle>
        <Subtitle>Full Stack Web Developer in Making.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="My Blog"
            link="https://darkshadow.netlify.com/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This is my blog.
          </ProjectCard>
          <ProjectCard
            title="To-Do List"
            link="https://shivam0anand.github.io/ToDo/"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            I am making To-Do list in JavaScript.
          </ProjectCard>
          <ProjectCard
            title="Javascript Quiz"
            link="https://shivam0anand.github.io/quiz/"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            A MCQ JavaScript Quiz app with 40+ practice questions made in
            vanilla JavaScript.
          </ProjectCard>
          {/* <ProjectCard
            title="Eagle"
            link="https://www.behance.net/gallery/38068151/Eagle"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A fantasy image manipulation relocating the habitat of wild animals.
          </ProjectCard> */}
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Shivam Anand" />
          <AboutSub>
            Hello, I am Shivam Anand. Full Stack web developer in making and I
            also used to write articles on some topics related to Web
            Development.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I started this website as a place to document everything I learned
          going through carrer changes. I try to write about everything I learn.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:shivamanand252@gmail.com">Hi</a> or find me on
            other platforms:{" "}
            <a href="https://www.instagram.com/shivam_jackson">Instagram</a>
            <a href="https://github.com/Shivam0Anand">Github</a>
            <a href="https://twitter.com/shivam_jackson">Twitter</a>
            <br />
          </ContactText>
        </Inner>
        <Footer />
      </Contact>
    </Parallax>
  </>
);

export default Index;
