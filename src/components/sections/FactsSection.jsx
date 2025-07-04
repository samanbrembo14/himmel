import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { himmelFacts } from '../../data/HimmelData';

const FactsSection = () => {
  const theme = useTheme();
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
      id="facts" 
      ref={sectionRef}
      component="section"
      sx={{ 
        py: 10,
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url("/images/backgrounds/facts-bg.jpeg")',
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
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(3px)',
          zIndex: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: 'linear-gradient(to bottom, rgba(248, 249, 250, 1) 0%, rgba(255, 255, 255, 0) 100%)',
          zIndex: 0,
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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
            Fakta Menarik
          </Typography>
          <Typography 
            variant="subtitle1" 
            color="text.secondary" 
            sx={{ maxWidth: '800px', mx: 'auto', mb: 2 }}
          >
            Hal-hal menarik yang mungkin belum kamu ketahui tentang Himmel
          </Typography>
        </Box>
        
        {/* Container untuk centering di desktop */}
        <Box sx={{ 
          maxWidth: isDesktop ? '1000px' : 'auto',
          mx: 'auto'
        }}>
          <Grid container spacing={3} justifyContent="center">
            {himmelFacts.map((fact, index) => (
              <Grid item xs={12} sm={6} md={3} key={fact.id} sx={{ display: 'flex' }}>
                <Box 
                  className="scroll-hidden" 
                  sx={{ 
                    width: '100%',
                    height: { xs: 'auto', md: '340px' }, // Fixed height for desktop
                    transitionDelay: `${index * 0.1}s`,
                    display: 'flex'
                  }}
                >
                  <Card 
                    elevation={0} 
                    sx={{ 
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '16px',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 10px 30px rgba(135, 206, 250, 0.2)',
                      },
                      background: 'white',
                      border: '1px solid rgba(135, 206, 250, 0.2)',
                    }}
                  >
                    <CardContent sx={{ 
                      p: 3, 
                      flexGrow: 1, 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center',
                      justifyContent: 'space-between' 
                    }}>
                      {/* Icon container */}
                      <Box 
                        className="icon-container"
                        sx={{ 
                          display: 'flex', 
                          justifyContent: 'center', 
                          alignItems: 'center',
                          mb: 3,
                          width: '80px',
                          height: '80px',
                          position: 'relative',
                        }}
                      >
                        {/* Gambar PNG */}
                        <Box
                          component="img"
                          src={`/images/himmel/${fact.iconImage}`}
                          alt={fact.title}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 4px 8px rgba(135, 206, 250, 0.5))',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                              transform: 'scale(1.1)',
                            }
                          }}
                        />
                      </Box>
                      
                      <Box>
                        <Typography 
                          variant="h6" 
                          component="h3" 
                          align="center" 
                          gutterBottom
                          sx={{ fontWeight: 600 }}
                        >
                          {fact.title}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          color="text.secondary"
                          align="center"
                        >
                          {fact.description}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default FactsSection;