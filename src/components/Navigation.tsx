import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Theme } from '../styles/Theme';

const Nav = styled(motion.nav)<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${Theme.spacing.lg} ${Theme.spacing.xl};
  background: ${props => props.isScrolled ? 'rgba(10, 10, 10, 0.9)' : 'transparent'};
  backdrop-filter: ${props => props.isScrolled ? 'blur(20px)' : 'none'};
  border-bottom: ${props => props.isScrolled ? `1px solid ${Theme.colors.border}` : 'none'};
  transition: all ${Theme.transitions.normal};

  @media (max-width: ${Theme.breakpoints.tablet}) {
    padding: ${Theme.spacing.md} ${Theme.spacing.lg};
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: ${Theme.fontSizes.xl};
  font-weight: ${Theme.fontWeights.bold};
  color: ${Theme.colors.text};
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${Theme.spacing.xl};
  align-items: center;

  @media (max-width: ${Theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: ${Theme.colors.textSecondary};
  font-weight: ${Theme.fontWeights.medium};
  transition: color ${Theme.transitions.normal};
  position: relative;

  &:hover {
    color: ${Theme.colors.text};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${Theme.colors.primary};
    transition: width ${Theme.transitions.normal};
  }

  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  color: ${Theme.colors.text};
  padding: ${Theme.spacing.sm};

  @media (max-width: ${Theme.breakpoints.tablet}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${Theme.spacing.xl};
  z-index: 999;
`;

const MobileNavLink = styled(motion.a)`
  color: ${Theme.colors.text};
  font-size: ${Theme.fontSizes['2xl']};
  font-weight: ${Theme.fontWeights.medium};
`;

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Work', id: 'work' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <Nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        isScrolled={isScrolled}
      >
        <NavContainer>
          <Logo
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('home')}
          >
            Dheeraj Nair
          </Logo>
          
          <NavLinks>
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.name}
              </NavLink>
            ))}
          </NavLinks>

          <MobileMenuButton
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        </NavContainer>
      </Nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <MobileNavLink
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
