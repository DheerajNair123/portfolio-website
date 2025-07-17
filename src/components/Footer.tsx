import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Theme } from '../styles/Theme';

const FooterSection = styled.footer`
  background: ${Theme.colors.backgroundSecondary};
  border-top: 1px solid ${Theme.colors.border};
  padding: ${Theme.spacing['2xl']} ${Theme.spacing.xl};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${Theme.spacing.xl};

  @media (max-width: ${Theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${Theme.spacing.lg};
    text-align: center;
  }
`;

const FooterBrand = styled.div`
  font-size: ${Theme.fontSizes.lg};
  font-weight: ${Theme.fontWeights.bold};
  color: ${Theme.colors.text};
`;

const FooterLinks = styled.div`
  display: flex;
  gap: ${Theme.spacing.xl};

  @media (max-width: ${Theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${Theme.spacing.md};
  }
`;

const FooterLink = styled(motion.a)`
  color: ${Theme.colors.textSecondary};
  font-weight: ${Theme.fontWeights.medium};
  transition: color ${Theme.transitions.normal};

  &:hover {
    color: ${Theme.colors.primary};
  }
`;

const ScrollToTop = styled(motion.button)`
  background: ${Theme.colors.primary};
  color: ${Theme.colors.background};
  border: none;
  border-radius: ${Theme.borderRadius.full};
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${Theme.transitions.normal};

  &:hover {
    background: ${Theme.colors.primaryHover};
    transform: translateY(-2px);
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: ${Theme.spacing.xl};
  border-top: 1px solid ${Theme.colors.border};
  color: ${Theme.colors.textSecondary};
  font-size: ${Theme.fontSizes.sm};
`;

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FooterSection>
      <Container>
        <FooterContent>
          <FooterBrand>Dheeraj Nair</FooterBrand>
          
          <FooterLinks>
            <FooterLink
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('work');
              }}
              whileHover={{ y: -2 }}
            >
              Work
            </FooterLink>
            <FooterLink
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              whileHover={{ y: -2 }}
            >
              About
            </FooterLink>
            <FooterLink
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              whileHover={{ y: -2 }}
            >
              Contact
            </FooterLink>
          </FooterLinks>

          <ScrollToTop
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </ScrollToTop>
        </FooterContent>

        <FooterBottom>
          <p>© 2024 Dheeraj Nair. All rights reserved. Built with React, TypeScript, and Framer Motion.</p>
        </FooterBottom>
      </Container>
    </FooterSection>
  );
};

export default Footer;
