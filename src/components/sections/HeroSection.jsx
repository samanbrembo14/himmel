import React, { useEffect, useRef } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import gsap from 'gsap';

const HeroSection = () => {
  const heroRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // Animasi background particles
    if (particlesRef.current) {
      const particles = [];
      const numParticles = 50;
      
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
        });
      }

      // Create canvas for particles
      const canvas = document.createElement('canvas');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.pointerEvents = 'none'; // Make it non-interactive
      particlesRef.current.appendChild(canvas);

      const ctx = canvas.getContext('2d');

      // Animation loop
      const animateParticles = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
          // Update position
          p.x += p.speedX;
          p.y += p.speedY;
          
          // Wrap around edges
          if (p.x < 0) p.x = canvas.width;
          if (p.x > canvas.width) p.x = 0;
          if (p.y < 0) p.y = canvas.height;
          if (p.y > canvas.height) p.y = 0;
          
          // Draw particle
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
          ctx.fill();
        });
        
        requestAnimationFrame(animateParticles);
      };

      const animation = requestAnimationFrame(animateParticles);
      
      // Handle window resize
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        cancelAnimationFrame(animation);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  useEffect(() => {
    // Add scroll-based opacity effect for parallax
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      if (scrollY > viewportHeight * 0.2) {
        const opacity = 1 - (scrollY - viewportHeight * 0.2) / (viewportHeight * 0.8);
        const yOffset = scrollY * 0.3;
        
        if (heroRef.current && heroRef.current.querySelector('.hero-content')) {
          gsap.to(heroRef.current.querySelector('.hero-content'), {
            opacity: Math.max(opacity, 0),
            y: yOffset,
            duration: 0.1
          });
        }
      } else {
        if (heroRef.current && heroRef.current.querySelector('.hero-content')) {
          gsap.to(heroRef.current.querySelector('.hero-content'), {
            opacity: 1,
            y: 0,
            duration: 0.1
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      ref={heroRef}
      id="home"
      component="section"
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        backgroundImage: 'url("/images/backgrounds/hero-bg.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom right,rgba(0, 0, 0, 0.2))',
          zIndex: 1
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '10px',
          background: 'linear-gradient(to bottom, rgba(135, 206, 250, 0) 0%, rgba(135, 206, 250, 0.2) 10%)',
          zIndex: 2,
        }
      }}
    >
      <div ref={particlesRef} style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 2 }} />
      
      <Container className="hero-content" sx={{ position: 'relative', zIndex: 3 }}>
        <Box sx={{ maxWidth: { xs: '100%', md: '60%' } }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="overline"
              component="div"
              sx={{
                color: 'white',
                letterSpacing: 2,
                mb: 2,
                fontWeight: 600
              }}
            >
              PAHLAWAN LEGENDARIS
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                color: 'white',
                mb: 2,
                fontSize: { xs: '3rem', md: '4.5rem' },
                textShadow: '0 2px 10px rgba(0,0,0,0.2)'
              }}
            >
              HIMMEL
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              variant="h5"
              sx={{
                color: 'white',
                mb: 4,
                fontWeight: 400,
                maxWidth: '600px',
                lineHeight: 1.5
              }}
            >
              Pemimpin kelompok legendaris yang mengalahkan Raja Iblis, meninggalkan warisan yang tak terlupakan.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                size="large"
                href="#profile"
                sx={{
                  bgcolor: 'white',
                  color: '#1E90FF',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.1)',
                  },
                  px: 4,
                  py: 1.5,
                }}
              >
                Kenali Himmel
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="#facts"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)',
                  },
                  px: 4,
                  py: 1.5,
                }}
              >
                Fakta Menarik
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Container>

      <Box
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
        }}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <Button
            href="#profile"
            sx={{
              color: 'white',
              borderRadius: '50%',
              p: 1,
              backgroundColor: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(5px)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.3)',
              }
            }}
          >
            <ArrowDownwardIcon />
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default HeroSection;