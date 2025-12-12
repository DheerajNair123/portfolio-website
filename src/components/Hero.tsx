import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Theme } from '../styles/Theme';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${Theme.spacing.xl};
  position: relative;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
  z-index: -1;
`;

const GreetingsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  opacity: 0.3;
  z-index: 0;
`;

const Greeting = styled(motion.div)`
  font-size: ${Theme.fontSizes['4xl']};
  font-weight: ${Theme.fontWeights.bold};
  color: ${Theme.colors.textSecondary};
  user-select: none;

  @media (max-width: ${Theme.breakpoints.tablet}) {
    font-size: ${Theme.fontSizes['2xl']};
  }
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  z-index: 1;
`;

const Subtitle = styled(motion.div)`
  font-size: ${Theme.fontSizes.lg};
  color: ${Theme.colors.primary};
  font-weight: ${Theme.fontWeights.medium};
  margin-bottom: ${Theme.spacing.md};
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Title = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: ${Theme.fontWeights.bold};
  color: ${Theme.colors.text};
  line-height: 1.1;
  margin-bottom: ${Theme.spacing.xl};
  
  span {
    background: linear-gradient(135deg, ${Theme.colors.primary}, ${Theme.colors.accent});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Description = styled(motion.p)`
  font-size: ${Theme.fontSizes.xl};
  color: ${Theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: ${Theme.spacing['2xl']};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${Theme.breakpoints.tablet}) {
    font-size: ${Theme.fontSizes.lg};
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: ${Theme.spacing.lg};
  justify-content: center;
  margin-bottom: ${Theme.spacing['3xl']};

  @media (max-width: ${Theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled(motion.button)`
  padding: ${Theme.spacing.md} ${Theme.spacing.xl};
  border-radius: ${Theme.borderRadius.lg};
  font-weight: ${Theme.fontWeights.medium};
  font-size: ${Theme.fontSizes.md};
  transition: all ${Theme.transitions.normal};
  position: relative;
  overflow: hidden;
  
  &.primary {
    background: ${Theme.colors.primary};
    color: ${Theme.colors.background};
    
    &:hover {
      background: ${Theme.colors.primaryHover};
      transform: translateY(-2px);
    }
  }
  
  &.secondary {
    background: transparent;
    color: ${Theme.colors.text};
    border: 2px solid ${Theme.colors.border};
    
    &:hover {
      border-color: ${Theme.colors.primary};
      transform: translateY(-2px);
    }
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: ${Theme.spacing.lg};
  justify-content: center;
  margin-bottom: ${Theme.spacing['2xl']};
`;

const SocialLink = styled(motion.a)`
  color: ${Theme.colors.textSecondary};
  transition: color ${Theme.transitions.normal};
  
  &:hover {
    color: ${Theme.colors.primary};
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: ${Theme.spacing.xl};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${Theme.spacing.sm};
  color: ${Theme.colors.textSecondary};
  cursor: pointer;
  
  span {
    font-size: ${Theme.fontSizes.sm};
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showGreetings, setShowGreetings] = useState(true);

  const texts = ['Designer', 'Developer', 'Creator', 'Innovator'];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = texts[currentIndex];

      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));

        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));

        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreetings(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  const greetings = [
    'Hello', 'Bonjour', 'Hola', 'Ciao', 'Olá', 'こんにちは', 
    'Hallo', 'Guten Tag', 'Привет', 'नमस्ते', '안녕하세요'
  ];

  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection id="home">
      <HeroBackground />
      
      {showGreetings && (
        <GreetingsContainer>
          {greetings.map((greeting, index) => (
            <Greeting
              key={greeting}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: [0, 0.5, 0.3], 
                scale: [0.8, 1.1, 1] 
              }}
              transition={{ 
                delay: index * 0.3, 
                duration: 1.5,
                times: [0, 0.6, 1],
                ease: "easeInOut"
              }}
            >
              {greeting}
            </Greeting>
          ))}
        </GreetingsContainer>
      )}

      <HeroContent>
        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Innovative and Enthusiastic Software Developer
        </Subtitle>
        
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          I'm <span>Dheeraj Nair</span>, a <span>{displayText}</span>
          <motion.span
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          >
            |
          </motion.span>
        </Title>
        
        <Description
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Helping brands stand out in the digital era. 
        </Description>
        
        <ButtonContainer
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Button
            className="primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToWork}
          >
            View My Work
          </Button>
          <Button
            className="secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const link = document.createElement('a');
              link.href = require('../assets/Resume.pdf');
              link.download = 'Main.pdf';
              link.target = '_blank';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Download CV
          </Button>
        </ButtonContainer>
        
        <SocialLinks
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <SocialLink
            href="https://github.com/DheerajNair123"
            target="_blank"
            whileHover={{ scale: 1.2, y: -2 }}
          >
            <Github size={24} />
          </SocialLink>
          <SocialLink
            href="https://linkedin.com/in/dheerajnairp"
            target="_blank"
            whileHover={{ scale: 1.2, y: -2 }}
          >
            <Linkedin size={24} />
          </SocialLink>
          <SocialLink
            href="mailto:dheerajnairp@gmail.com"
            whileHover={{ scale: 1.2, y: -2 }}
          >
            <Mail size={24} />
          </SocialLink>
        </SocialLinks>
      </HeroContent>
      
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.8 }}
        onClick={scrollToWork}
      >
        <span>Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
