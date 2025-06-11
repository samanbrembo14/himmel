import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

const navItems = [
  { title: 'Home', path: '#home' },
  { title: 'Profil', path: '#profile' },
  { title: 'Fakta', path: '#facts' },
  { title: 'Perjalanan', path: '#journey' },
  { title: 'Galeri', path: '#gallery' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Initialize smooth scrolling
  useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.path.substring(1));
      
      // Find which section is currently in view
      for (const section of sections.reverse()) { // Check from bottom to top
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If element is in view (with some buffer at the top for navbar)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed" 
        sx={{ 
          background: scrolled 
            ? 'rgba(255, 255, 255, 0.95)' 
            : 'transparent',
          boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none',
          transition: 'all 0.3s ease',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
        }}
      >
        <Container>
          <Toolbar>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography 
                variant="h5" 
                component="div" 
                sx={{ 
                  flexGrow: 1, 
                  fontWeight: 700, 
                  background: 'linear-gradient(45deg, #87CEFA, #1E90FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mr: 4
                }}
              >
                HIMMEL
              </Typography>
            </motion.div>

            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ 
                  color: theme.palette.primary.main,
                }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 2 }}>
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.path.substring(1);
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Button 
                        href={item.path}
                        sx={{ 
                          color: scrolled ? theme.palette.primary.main : '#fff',
                          fontWeight: 600,
                          position: 'relative',
                          '&:hover': {
                            backgroundColor: 'rgba(135, 206, 250, 0.1)',
                          },
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: 4,
                            left: isActive ? '20%' : '50%',
                            right: isActive ? '20%' : '50%',
                            height: '3px',
                            backgroundColor: theme.palette.primary.main,
                            borderRadius: '3px',
                            transition: 'all 0.3s ease',
                            opacity: isActive ? 1 : 0,
                          },
                          '&:hover::after': {
                            left: '20%',
                            right: '20%',
                            opacity: 1,
                          }
                        }}
                      >
                        {item.title}
                      </Button>
                    </motion.div>
                  );
                })}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            backgroundImage: 'linear-gradient(180deg, rgba(135,206,250,0.1) 0%, rgba(255,255,255,1) 100%)'
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              my: 2, 
              fontWeight: 700,
              background: 'linear-gradient(45deg, #87CEFA, #1E90FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            HIMMEL
          </Typography>
          <List>
            {navItems.map((item) => {
              const isActive = activeSection === item.path.substring(1);
              return (
                <ListItem 
                  button 
                  key={item.title}
                  component="a"
                  href={item.path}
                  onClick={handleDrawerToggle}
                  sx={{
                    backgroundColor: isActive ? 'rgba(135, 206, 250, 0.1)' : 'transparent',
                    borderLeft: isActive ? `4px solid ${theme.palette.primary.main}` : '4px solid transparent',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <ListItemText 
                    primary={item.title} 
                    primaryTypographyProps={{ 
                      fontWeight: isActive ? 700 : 600,
                      color: isActive ? theme.palette.primary.main : 'rgba(0,0,0,0.7)'
                    }} 
                  />
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;