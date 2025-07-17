import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { Theme } from '../styles/Theme';

const WorkSection = styled.section`
  padding: ${Theme.spacing['5xl']} ${Theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${Theme.fontSizes['4xl']};
  font-weight: ${Theme.fontWeights.bold};
  text-align: center;
  margin-bottom: ${Theme.spacing['3xl']};
  color: ${Theme.colors.text};

  @media (max-width: ${Theme.breakpoints.tablet}) {
    font-size: ${Theme.fontSizes['3xl']};
  }
`;

const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${Theme.spacing['2xl']};
  margin-bottom: ${Theme.spacing['3xl']};

  @media (max-width: ${Theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${Theme.spacing.xl};
  }
`;

const WorkCard = styled(motion.div)`
  background: ${Theme.colors.backgroundSecondary};
  border-radius: ${Theme.borderRadius.xl};
  overflow: hidden;
  transition: transform ${Theme.transitions.normal};
  border: 1px solid ${Theme.colors.border};

  &:hover {
    transform: translateY(-5px);
  }
`;

const WorkImage = styled.div`
  height: 250px;
  background: linear-gradient(135deg, ${Theme.colors.primary}, ${Theme.colors.accent});
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${Theme.fontSizes.lg};
  color: ${Theme.colors.background};
  font-weight: ${Theme.fontWeights.semibold};
`;

const WorkContent = styled.div`
  padding: ${Theme.spacing.xl};
`;

const WorkTitle = styled.h3`
  font-size: ${Theme.fontSizes.xl};
  font-weight: ${Theme.fontWeights.semibold};
  margin-bottom: ${Theme.spacing.sm};
  color: ${Theme.colors.text};
`;

const WorkDescription = styled.p`
  color: ${Theme.colors.textSecondary};
  margin-bottom: ${Theme.spacing.md};
  line-height: 1.6;
`;

const WorkTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${Theme.spacing.sm};
  margin-bottom: ${Theme.spacing.lg};
`;

const TechnologyTag = styled.span`
  background: ${Theme.colors.primary}20;
  color: ${Theme.colors.primary};
  padding: ${Theme.spacing.xs} ${Theme.spacing.sm};
  border-radius: ${Theme.borderRadius.md};
  font-size: ${Theme.fontSizes.sm};
  font-weight: ${Theme.fontWeights.medium};
`;

const WorkLinks = styled.div`
  display: flex;
  gap: ${Theme.spacing.md};
`;

const WorkLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: ${Theme.spacing.sm};
  color: ${Theme.colors.textSecondary};
  font-size: ${Theme.fontSizes.sm};
  transition: color ${Theme.transitions.normal};

  &:hover {
    color: ${Theme.colors.primary};
  }
`;

const ViewMoreButton = styled(motion.button)`
  display: block;
  margin: 0 auto;
  padding: ${Theme.spacing.md} ${Theme.spacing.xl};
  background: transparent;
  border: 2px solid ${Theme.colors.primary};
  color: ${Theme.colors.primary};
  border-radius: ${Theme.borderRadius.lg};
  font-weight: ${Theme.fontWeights.medium};
  font-size: ${Theme.fontSizes.md};
  transition: all ${Theme.transitions.normal};
  cursor: pointer;

  &:hover {
    background: ${Theme.colors.primary};
    color: ${Theme.colors.background};
    transform: translateY(-2px);
  }
`;

const Work: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Social Sphere',
      description: 'A Java EE web application for social media interactions, built with servlets, JSP, and H2 database,the app demonstrates full-stack web development within the Java ecosystem. With session-based login, dynamic timeline generation, and secure data handling, SocialSphere mimics a basic social media platform with an interactive and responsive user interface.',
      technologies: ['Core-Java', 'IntelliJ', 'Servlets', 'JDBC', 'H2-Database'],
      image: 'Social Sphere',
      github: 'https://github.com/DheerajNair123/SocialSphere',
      // live: 'https://example.com',
    },
    {
      title: 'Air Notes',
      description: 'AirNotes is a gesture-controlled sticky notes application that allows users to create, move, and delete notes using hand gestures. It uses Python, OpenCV, MediaPipe, Tkinter, and PyAutoGUI to track hand movements and interact with on-screen notes seamlessly.',
      technologies: ['Python', 'OpenCV', 'Mediapipe', 'PyAutoGUI'],
      image: 'Air Notes',
      github: 'https://github.com/DheerajNair123/AirNotes',
      // live: 'https://example.com',
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing modern design principles and smooth animations, built with React and Styled Components.',
      technologies: ['React', 'Styled Components', 'Framer Motion', 'TypeScript'],
      image: 'Portfolio Website',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Virtual Mouse',
      description: 'A comprehensive weather dashboard with detailed forecasts, interactive maps, and location-based weather alerts.',
      technologies: ['Python', 'OpenCV', 'Mediapipe', 'Hands-free'],
      image: 'Virtual Mouse',
      github: 'https://github.com/DheerajNair123/virtual-mouse',
      // live: 'https://example.com',
    },
    {
      title: 'Gmail Reply BOT',
      description: 'GmailReplyBot is a Google Apps Script–based automation tool designed to streamline email management by identifying emails that match specific criteria and enabling a two-step manual approval process before auto-replying. The script scans your Gmail inbox based on filters like sender, subject, and message content.',
      technologies: ['Google Apps Script', 'Email Workflow', 'Customizable labels'],
      image: 'Gmail Reply Bot',
      github: 'https://github.com/DheerajNair123/GmailReplyBot',
      // live: 'https://example.com',
    }
    // ,
    // {
    //   title: 'Learning Platform',
    //   description: 'An interactive learning platform with video courses, quizzes, progress tracking, and certificate generation.',
    //   technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3'],
    //   image: 'Learning Platform',
    //   github: 'https://github.com',
    //   live: 'https://example.com',
    // },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <WorkSection id="work" ref={ref}>
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Featured Work
      </SectionTitle>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <WorkGrid>
          {projects.map((project, index) => (
            <WorkCard
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <WorkImage>
                {project.image}
              </WorkImage>
              <WorkContent>
                <WorkTitle>{project.title}</WorkTitle>
                <WorkDescription>{project.description}</WorkDescription>
                <WorkTechnologies>
                  {project.technologies.map((tech, techIndex) => (
                    <TechnologyTag key={techIndex}>{tech}</TechnologyTag>
                  ))}
                </WorkTechnologies>
                <WorkLinks>
                  <WorkLink
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Github size={16} />
                    Code
                  </WorkLink>
                </WorkLinks>
              </WorkContent>
            </WorkCard>
          ))}
        </WorkGrid>
      </motion.div>

      <ViewMoreButton
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.open('https://github.com/DheerajNair123', '_blank')}
      >
        View All Projects
      </ViewMoreButton>
    </WorkSection>
  );
};

export default Work;
