import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { GlobalStyles } from './styles/GlobalStyles';
import { Theme } from './styles/Theme';

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${Theme.colors.background};
  color: ${Theme.colors.text};
  overflow-x: hidden;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <GlobalStyles />
      <Navigation />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <Work />
        <About />
        <Contact />
      </motion.main>
      <Footer />
    </AppContainer>
  );
};

export default App;
