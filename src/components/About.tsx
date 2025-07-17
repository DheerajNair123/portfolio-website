import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Globe, Zap, Users, Award } from 'lucide-react';
import { Theme } from '../styles/Theme';
import profileImg from '../assets/profile.jpg';

const AboutSection = styled.section`
  padding: ${Theme.spacing['5xl']} ${Theme.spacing.xl};
  background: ${Theme.colors.backgroundSecondary};
`;

const Container = styled.div`
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

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${Theme.spacing['4xl']};
  align-items: center;
  margin-bottom: ${Theme.spacing['4xl']};

  @media (max-width: ${Theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${Theme.spacing['2xl']};
  }
`;

const AboutText = styled.div``;

const AboutTitle = styled(motion.h3)`
  font-size: ${Theme.fontSizes['2xl']};
  font-weight: ${Theme.fontWeights.semibold};
  margin-bottom: ${Theme.spacing.lg};
  color: ${Theme.colors.text};
`;

const AboutParagraph = styled(motion.p)`
  font-size: ${Theme.fontSizes.lg};
  line-height: 1.7;
  color: ${Theme.colors.textSecondary};
  margin-bottom: ${Theme.spacing.lg};
`;

const AboutImage = styled(motion.div)`
  height: 400px;
  background: linear-gradient(135deg, ${Theme.colors.primary}, ${Theme.colors.accent});
  border-radius: ${Theme.borderRadius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${Theme.fontSizes.xl};
  color: ${Theme.colors.background};
  font-weight: ${Theme.fontWeights.semibold};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${Theme.spacing.xl};
  margin-bottom: ${Theme.spacing['4xl']};

  @media (max-width: ${Theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled(motion.div)`
  background: ${Theme.colors.background};
  padding: ${Theme.spacing['2xl']};
  border-radius: ${Theme.borderRadius.xl};
  text-align: center;
  border: 1px solid ${Theme.colors.border};
  transition: all ${Theme.transitions.normal};

  &:hover {
    transform: translateY(-5px);
    border-color: ${Theme.colors.primary};
  }
`;

const SkillIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${Theme.colors.primary}20;
  border-radius: ${Theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${Theme.spacing.lg};
  color: ${Theme.colors.primary};
`;

const SkillTitle = styled.h4`
  font-size: ${Theme.fontSizes.lg};
  font-weight: ${Theme.fontWeights.semibold};
  margin-bottom: ${Theme.spacing.sm};
  color: ${Theme.colors.text};
`;

const SkillDescription = styled.p`
  color: ${Theme.colors.textSecondary};
  font-size: ${Theme.fontSizes.md};
  line-height: 1.6;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${Theme.spacing.xl};
  text-align: center;
`;

const StatCard = styled(motion.div)`
  background: ${Theme.colors.background};
  padding: ${Theme.spacing.xl};
  border-radius: ${Theme.borderRadius.lg};
  border: 1px solid ${Theme.colors.border};
`;

const StatNumber = styled.div`
  font-size: ${Theme.fontSizes['3xl']};
  font-weight: ${Theme.fontWeights.bold};
  color: ${Theme.colors.primary};
  margin-bottom: ${Theme.spacing.sm};
`;

const StatLabel = styled.div`
  font-size: ${Theme.fontSizes.md};
  color: ${Theme.colors.textSecondary};
  font-weight: ${Theme.fontWeights.medium};
`;

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      icon: <Code size={24} />,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces using React, TypeScript, and modern CSS frameworks.',
    },
    {
      icon: <Palette size={24} />,
      title: 'UI/UX Design',
      description: 'Designing intuitive and beautiful user experiences with attention to detail and user-centered approach.',
    },
    {
      icon: <Globe size={24} />,
      title: 'Web Development',
      description: 'Building scalable web applications with modern technologies and best practices.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed, accessibility, and search engine visibility.',
    },
    {
      icon: <Users size={24} />,
      title: 'Team Collaboration',
      description: 'Working effectively with cross-functional teams and stakeholders to deliver successful projects.',
    },
    {
      icon: <Award size={24} />,
      title: 'Quality Assurance',
      description: 'Ensuring code quality through testing, code reviews, and following industry standards.',
    },
  ];

  const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '0.9+', label: 'Years Experience' },
    { number: '30+', label: 'Happy Team members' },
    { number: '100%', label: 'Success Rate' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <AboutSection id="about" ref={ref}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          About Me
        </SectionTitle>

        <AboutContent>
          <AboutText>
            <AboutTitle
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Passionate Developer & Designer
            </AboutTitle>
            <AboutParagraph
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              I'm a passionate developer and designer with a keen eye for detail and a love for creating 
              beautiful, functional digital experiences. My work spans across web design, development, 
              and digital strategy.
            </AboutParagraph>
            <AboutParagraph
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Helping buisness ideas achieve their digital goals 
              through innovative solutions.
            </AboutParagraph>
            <AboutParagraph
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              I believe in the power of design and technology to solve complex problems and create 
              meaningful connections between brands and their audiences.
            </AboutParagraph>
          </AboutText>

          <AboutImage
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={profileImg}
              alt="Dheeraj Nair's Photo"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
            />
          </AboutImage>
        </AboutContent>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillDescription>{skill.description}</SkillDescription>
              </SkillCard>
            ))}
          </SkillsGrid>

          <StatsGrid>
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.6, delay: (skills.length * 0.1) + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
              >
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatsGrid>
        </motion.div>
      </Container>
    </AboutSection>
  );
};

export default About;
