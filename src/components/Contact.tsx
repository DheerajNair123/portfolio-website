import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Theme } from '../styles/Theme';

const ContactSection = styled.section`
  padding: ${Theme.spacing['5xl']} ${Theme.spacing.xl};
  background: ${Theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactTitle = styled(motion.h2)`
  font-size: ${Theme.fontSizes['5xl']};
  font-weight: ${Theme.fontWeights.bold};
  text-align: center;
  margin-bottom: ${Theme.spacing.lg};
  color: ${Theme.colors.text};

  @media (max-width: ${Theme.breakpoints.tablet}) {
    font-size: ${Theme.fontSizes['4xl']};
  }
`;

const ContactSubtitle = styled(motion.p)`
  font-size: ${Theme.fontSizes.xl};
  color: ${Theme.colors.textSecondary};
  text-align: center;
  margin-bottom: ${Theme.spacing['4xl']};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${Theme.spacing['4xl']};
  margin-bottom: ${Theme.spacing['4xl']};

  @media (max-width: ${Theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${Theme.spacing['2xl']};
  }
`;

const ContactInfo = styled.div``;

const ContactForm = styled(motion.form)`
  background: ${Theme.colors.backgroundSecondary};
  padding: ${Theme.spacing['2xl']};
  border-radius: ${Theme.borderRadius.xl};
  border: 1px solid ${Theme.colors.border};
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${Theme.spacing.lg};
  margin-bottom: ${Theme.spacing.xl};
  color: ${Theme.colors.text};
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${Theme.colors.primary}20;
  border-radius: ${Theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Theme.colors.primary};
  flex-shrink: 0;
`;

const ContactDetails = styled.div`
  h4 {
    font-size: ${Theme.fontSizes.lg};
    font-weight: ${Theme.fontWeights.semibold};
    margin-bottom: ${Theme.spacing.xs};
    color: ${Theme.colors.text};
  }

  p {
    color: ${Theme.colors.textSecondary};
    font-size: ${Theme.fontSizes.md};
  }

  a {
    color: ${Theme.colors.textSecondary};
    transition: color ${Theme.transitions.normal};
    
    &:hover {
      color: ${Theme.colors.primary};
    }
  }
`;

const FormGroup = styled.div`
  margin-bottom: ${Theme.spacing.lg};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${Theme.spacing.sm};
  font-weight: ${Theme.fontWeights.medium};
  color: ${Theme.colors.text};
`;

const Input = styled.input`
  width: 100%;
  padding: ${Theme.spacing.md};
  border: 1px solid ${Theme.colors.border};
  border-radius: ${Theme.borderRadius.md};
  background: ${Theme.colors.background};
  color: ${Theme.colors.text};
  font-size: ${Theme.fontSizes.md};
  transition: border-color ${Theme.transitions.normal};

  &:focus {
    outline: none;
    border-color: ${Theme.colors.primary};
  }

  &::placeholder {
    color: ${Theme.colors.textSecondary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: ${Theme.spacing.md};
  border: 1px solid ${Theme.colors.border};
  border-radius: ${Theme.borderRadius.md};
  background: ${Theme.colors.background};
  color: ${Theme.colors.text};
  font-size: ${Theme.fontSizes.md};
  resize: vertical;
  font-family: inherit;
  transition: border-color ${Theme.transitions.normal};

  &:focus {
    outline: none;
    border-color: ${Theme.colors.primary};
  }

  &::placeholder {
    color: ${Theme.colors.textSecondary};
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: ${Theme.spacing.md} ${Theme.spacing.lg};
  background: ${Theme.colors.primary};
  color: ${Theme.colors.background};
  border: none;
  border-radius: ${Theme.borderRadius.md};
  font-size: ${Theme.fontSizes.md};
  font-weight: ${Theme.fontWeights.medium};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${Theme.spacing.sm};
  transition: all ${Theme.transitions.normal};

  &:hover {
    background: ${Theme.colors.primaryHover};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ContactDetails2 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${Theme.spacing.xl};
  margin-bottom: ${Theme.spacing['3xl']};
`;

const DetailCard = styled(motion.div)`
  background: ${Theme.colors.backgroundSecondary};
  padding: ${Theme.spacing.xl};
  border-radius: ${Theme.borderRadius.lg};
  border: 1px solid ${Theme.colors.border};
  text-align: center;
`;

const DetailTitle = styled.h4`
  font-size: ${Theme.fontSizes.sm};
  font-weight: ${Theme.fontWeights.semibold};
  color: ${Theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: ${Theme.spacing.sm};
`;

const DetailValue = styled.p`
  font-size: ${Theme.fontSizes.md};
  color: ${Theme.colors.text};
  font-weight: ${Theme.fontWeights.medium};
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: ${Theme.spacing.lg};
  margin-top: ${Theme.spacing.xl};
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  background: ${Theme.colors.backgroundSecondary};
  border: 1px solid ${Theme.colors.border};
  border-radius: ${Theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Theme.colors.textSecondary};
  transition: all ${Theme.transitions.normal};

  &:hover {
    background: ${Theme.colors.primary};
    border-color: ${Theme.colors.primary};
    color: ${Theme.colors.background};
    transform: translateY(-2px);
  }
`;

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const contactItems = [
    {
      icon: <Mail size={20} />,
      title: 'Email',
      value: 'dheerajnairp@gmail.com',
      link: 'mailto:dheerajnairp@gmail.com',
    },
    {
      icon: <Phone size={20} />,
      title: 'Phone',
      value: '+91 9405920401',
      link: 'tel:+91 9405920401',
    },
    {
      icon: <MapPin size={20} />,
      title: 'Location',
      value: 'Pune, India',
      link: null,
    },
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
    <ContactSection id="contact" ref={ref}>
      <Container>
        <ContactTitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Let's work together
        </ContactTitle>
        
        <ContactSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Have a project in mind? Let's discuss how we can bring your vision to life.
        </ContactSubtitle>

        <ContactContent>
          <ContactInfo>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {contactItems.map((item, index) => (
                <ContactItem
                  key={index}
                  variants={itemVariants}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ContactIcon>{item.icon}</ContactIcon>
                  <ContactDetails>
                    <h4>{item.title}</h4>
                    {item.link ? (
                      <a href={item.link}>{item.value}</a>
                    ) : (
                      <p>{item.value}</p>
                    )}
                  </ContactDetails>
                </ContactItem>
              ))}
            </motion.div>
          </ContactInfo>

          <ContactForm
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="dheeraj.nair@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                placeholder="Project Discussion"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={18} />
              Send Message
            </SubmitButton>
          </ContactForm>
        </ContactContent>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <ContactDetails2>
            <DetailCard variants={itemVariants}>
              <DetailTitle>VERSION</DetailTitle>
              <DetailValue>2024 © Edition</DetailValue>
            </DetailCard>
            <DetailCard variants={itemVariants}>
              <DetailTitle>LOCAL TIME</DetailTitle>
              <DetailValue>{currentTime} GMT-5</DetailValue>
            </DetailCard>
            <DetailCard variants={itemVariants}>
              <DetailTitle>AVAILABILITY</DetailTitle>
              <DetailValue>Open for new projects</DetailValue>
            </DetailCard>
          </ContactDetails2>
        </motion.div>

        <SocialLinks>
          <SocialLink
            href="https://github.com/DheerajNair123"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={20} />
          </SocialLink>
          <SocialLink
            href="https://linkedin.com/in/dheerajnairp"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin size={20} />
          </SocialLink>
          <SocialLink
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Twitter size={20} />
          </SocialLink>
          <SocialLink
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Instagram size={20} />
          </SocialLink>
        </SocialLinks>
      </Container>
    </ContactSection>
  );
};

export default Contact;
