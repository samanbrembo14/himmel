import React, { useEffect, useRef } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Stepper, 
  Step, 
  StepLabel, 
  StepContent, 
  Paper, 
  useTheme, 
  useMediaQuery,
  Card
} from '@mui/material';
import { motion } from 'framer-motion';
import { journeyTimeline } from '../../data/HimmelData';

const JourneySection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const sectionRef = useRef(null);
  
  useEffect(() => {
    // Initialize Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-show');
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all elements with scroll-hidden class in this section
    const hiddenElements = sectionRef.current.querySelectorAll('.scroll-hidden');
    hiddenElements.forEach((el) => observer.observe(el));
    
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <Box 
      id="journey" 
      ref={sectionRef}
      component="section"
      sx={{ 
        py: 10,
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url("/images/backgrounds/journey-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: { xs: 'scroll', md: 'fixed' }, // Fix background resizing on mobile
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(2px)',
          zIndex: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: 'linear-gradient(to bottom, rgba(230, 244, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
          zIndex: 1,
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box textAlign="center" mb={8} className="scroll-hidden">
          <Typography 
            variant="h2" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(45deg, #1E90FF, #87CEFA)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Perjalanan Legendaris
          </Typography>
          <Typography 
            variant="subtitle1" 
            color="text.secondary" 
            sx={{ maxWidth: '800px', mx: 'auto', mb: 2 }}
          >
            Kisah epik Himmel dan kelompoknya menuju kemenangan atas Raja Iblis
          </Typography>
        </Box>

        {/* Container untuk timeline dengan max-width untuk desktop */}
        <Box 
          sx={{ 
            maxWidth: isDesktop ? '800px' : 'auto',
            mx: 'auto',
            // Tambahkan background card untuk seluruh timeline
            bgcolor: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '20px',
            p: 4,
            boxShadow: '0 10px 30px rgba(135, 206, 250, 0.15)',
            backdropFilter: 'blur(10px)'
          }} 
          className="scroll-hidden"
        >
          <Stepper 
            orientation={isMobile ? "vertical" : "vertical"} 
            sx={{ 
              mb: 4,
              '& .MuiStepConnector-line': {
                borderColor: theme.palette.primary.light,
                borderLeftWidth: 2,
              }
            }}
          >
            {journeyTimeline.map((item, index) => (
              <Step key={item.id} active={true}>
                <StepLabel
                  StepIconProps={{
                    sx: {
                      color: theme.palette.primary.main,
                      '&.Mui-active': {
                        color: theme.palette.primary.main,
                      },
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      border: `2px solid ${theme.palette.primary.main}`,
                      background: 'white'
                    }
                  }}
                >
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600,
                      color: theme.palette.primary.main
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    variant="subtitle2" 
                    sx={{ 
                      color: 'text.secondary',
                      fontWeight: 500
                    }}
                  >
                    {item.year}
                  </Typography>
                </StepLabel>
                <StepContent>
                  <Box sx={{ mb: 2 }} className="scroll-hidden" style={{ transitionDelay: `${index * 0.2}s` }}>
                    {/* Card wrapper untuk setiap item timeline */}
                    <Card
                      elevation={0}
                      sx={{
                        p: 3,
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        boxShadow: '0 5px 15px rgba(135, 206, 250, 0.2)',
                        borderLeft: `4px solid ${theme.palette.primary.main}`,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 8px 20px rgba(135, 206, 250, 0.3)',
                        }
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'text.primary',
                          lineHeight: 1.6
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Card>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>

          <Box 
            sx={{ 
              mt: 6,
              p: 4,
              borderRadius: '16px',
              bgcolor: 'rgba(135, 206, 250, 0.1)',
              border: '1px solid rgba(135, 206, 250, 0.2)',
              boxShadow: '0 8px 20px rgba(135, 206, 250, 0.1)'
            }} 
            className="scroll-hidden"
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontStyle: 'italic',
                textAlign: 'center',
                color: theme.palette.primary.dark,
                fontWeight: 500,
              }}
            >
              "Aku ingin melihat kembang api bersamamu lagi suatu hari nanti."
            </Typography>
            <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
              — Himmel kepada Frieren
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default JourneySection;