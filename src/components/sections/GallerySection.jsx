import React, { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Modal,
  Fade,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

// Placeholder images (In a real scenario, you'd replace these with actual images of Himmel)
const galleryImages = [
  {
    id: 1,
    title: "Himmel sebagai Pahlawan",
    description: "Himmel memimpin kelompoknya melawan Raja Iblis",
    image: "/images/himmel/himmel-1.jpeg"
  },
  {
    id: 2,
    title: "Saat-saat Bersama Tim",
    description: "Himmel bersama Frieren, Heiter, dan Eisen",
    image: "/images/himmel/himmel-2.jpeg"
  },
  {
    id: 3,
    title: "Himmel Himmel Himmel",
    description: "All About Himmel Kunnnn",
    image: "/images/himmel/himmel-3.jpeg"
  },
  {
    id: 4,
    title: "Himmel kunnnn",
    description: "Manis banget ya senyumannya himmel",
    image: "/images/himmel/himmel-4.jpeg"
  },
  {
    id: 5,
    title: "Dalam Kedamaian",
    description: "Himmel menikmati hidupnya setelah mengalahkan Raja Iblis",
    image: "/images/himmel/himmel-5.jpeg"
  },
  {
    id: 6,
    title: "Perpisahan",
    description: "Saat-saat terakhir Himmel bersama teman-temannya",
    image: "/images/himmel/himmel-6.jpeg"
  }
];

const GallerySection = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
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

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box 
      id="gallery" 
      ref={sectionRef}
      component="section"
      sx={{ 
        py: 10,
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url("/images/backgrounds/gallery-bg.jpg")',
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
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(248, 249, 250, 0) 100%)',
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
            Galeri
          </Typography>
          <Typography 
            variant="subtitle1" 
            color="text.secondary" 
            sx={{ maxWidth: '800px', mx: 'auto', mb: 2 }}
          >
            Kenangan visual dari kehidupan dan petualangan Himmel
          </Typography>
        </Box>

        {/* Container untuk centering di desktop */}
        <Box sx={{ 
          maxWidth: isDesktop ? '1100px' : 'auto',
          mx: 'auto'
        }}>
          <Grid container spacing={3} justifyContent="center">
            {galleryImages.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={item.id} sx={{ display: 'flex' }}>
                <Box 
                  className="scroll-hidden" 
                  sx={{ 
                    width: '100%',
                    height: '100%',
                    transitionDelay: `${index * 0.1}s`,
                    display: 'flex'
                  }}
                >
                  <Card 
                    sx={{ 
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 10px 30px rgba(135, 206, 250, 0.3)',
                        '& .MuiCardMedia-root': {
                          transform: 'scale(1.05)'
                        }
                      }
                    }}
                    onClick={() => handleOpen(item)}
                  >
                    <Box 
                      sx={{ 
                        overflow: 'hidden', 
                        position: 'relative', 
                        // Fixed aspect ratio for consistent sizing
                        paddingTop: '56.25%' /* 16:9 Aspect Ratio */ 
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={item.image}
                        alt={item.title}
                        sx={{ 
                          transition: 'transform 0.5s ease',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </Box>
                    <CardContent sx={{ 
                      flexGrow: 1,
                      height: { xs: 'auto', md: '120px' }, // Fixed height for content on desktop
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}>
                      <Typography 
                        variant="h6" 
                        component="div" 
                        gutterBottom 
                        fontWeight={600}
                        sx={{
                          display: '-webkit-box',
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 4
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: 'relative',
              maxWidth: '90%',
              maxHeight: '90%',
              outline: 'none',
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
            }}
          >
            {selectedImage && (
              <>
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    bgcolor: 'rgba(0,0,0,0.5)',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'rgba(0,0,0,0.7)',
                    }
                  }}
                  onClick={handleClose}
                >
                  <CloseIcon />
                </IconButton>
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '80vh',
                    display: 'block',
                  }}
                />
                <Box 
                  sx={{ 
                    bgcolor: 'white', 
                    p: 2 
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    {selectedImage.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {selectedImage.description}
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default GallerySection;