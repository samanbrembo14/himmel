import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, Paper, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';

const ProfileSection = () => {
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
      id="profile" 
      ref={sectionRef}
      component="section"
      sx={{ 
        py: 10, 
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url("/images/backgrounds/profile-bg.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: { xs: 'scroll', md: 'fixed' }, // Disable fixed background on mobile
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(248, 249, 250, 0.4)',
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
          background: 'linear-gradient(to bottom, rgba(135, 206, 250, 0.8) 0%, rgba(248, 249, 250, 0) 100%)',
          opacity: 0.7,
          zIndex: 0,
        }
      }}
    >
      {/* Background decorative elements */}
      <Box 
        sx={{ 
          position: 'absolute', 
          top: '10%', 
          right: '5%', 
          width: '300px', 
          height: '300px', 
          borderRadius: '50%', 
          background: `radial-gradient(circle, ${theme.palette.primary.light} 0%, rgba(255,255,255,0) 70%)`,
          opacity: 0.4,
          zIndex: 0
        }} 
      />
      
      <Box 
        sx={{ 
          position: 'absolute', 
          bottom: '15%', 
          left: '5%', 
          width: '200px', 
          height: '200px', 
          borderRadius: '50%', 
          background: `radial-gradient(circle, ${theme.palette.primary.light} 0%, rgba(255,255,255,0) 70%)`,
          opacity: 0.3,
          zIndex: 0
        }} 
      />
      
      {/* Content container with center-alignment for desktop */}
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative', 
          zIndex: 1,
          maxWidth: isDesktop ? '1100px' : 'auto',
          mx: 'auto'
        }}
      >
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
            Profil Himmel
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}>
            Sang Pahlawan yang Nama dan Kebaikannya Selalu Dikenang
          </Typography>
        </Box>
        
        <Grid container spacing={5} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box className="scroll-hidden">
              <Paper 
                elevation={0}
                sx={{ 
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(135, 206, 250, 0.2)',
                  position: 'relative',
                  maxWidth: { xs: '100%', md: '90%' },
                  mx: 'auto'
                }}
              >
                {/* Gambar Himmel */}
                <Box
                  component="img"
                  src="/images/himmel/himmel-1.jpeg"
                  alt="Himmel"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    transition: 'transform 0.8s ease',
                    '&:hover': {
                      transform: 'scale(1.03)',
                    },
                  }}
                />
                {/* Overlay effect */}
                <Box 
                  sx={{ 
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '50%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                  }} 
                />
              </Paper>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box 
              className="scroll-hidden stagger-children"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                p: { xs: 3, md: 4 },
                borderRadius: '16px',
                backdropFilter: 'blur(5px)',
                boxShadow: '0 10px 30px rgba(135, 206, 250, 0.15)',
              }}
            >
              <Typography variant="h4" gutterBottom fontWeight={600} color={theme.palette.primary.main}>
                Sang Pemimpin Legendaris
              </Typography>
              
              <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                Himmel adalah pahlawan legendaris yang memimpin kelompoknya untuk mengalahkan Raja Iblis, mengakhiri 
                perang yang telah berlangsung selama 10 tahun. Dikenal karena keberaniannya, kebijaksanaannya, 
                dan kemampuannya untuk melihat kebaikan dalam diri setiap orang.
              </Typography>
              
              <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                Kelompok pahlawannya terdiri dari Frieren sang penyihir elf, Heiter sang pendeta, 
                dan Eisen sang prajurit dwarf. Bersama-sama, mereka melewati berbagai rintangan dan 
                akhirnya berhasil mengalahkan Raja Iblis.
              </Typography>
              
              <Typography variant="body1" paragraph>
                Meski Himmel telah meninggal karena usia tua, kenangannya tetap hidup terutama dalam hati 
                Frieren. Kematiannya menjadi titik awal bagi Frieren untuk memulai perjalanan 
                memahami manusia dan menghargai waktu singkat yang mereka miliki di dunia.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProfileSection;