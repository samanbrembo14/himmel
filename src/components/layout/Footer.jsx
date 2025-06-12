import React from 'react';
import { Box, Container, Typography, Grid, Link, IconButton, Divider, useTheme } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { motion } from 'framer-motion';

const Footer = () => {
  const theme = useTheme();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Box 
      sx={{ 
        position: 'relative',
        overflow: 'hidden',
        pt: 8,
        pb: 4,
        backgroundImage: 'url("/images/backgrounds/footer-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundAttachment: { xs: 'scroll', md: 'fixed' }, // Disable fixed background on mobile
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(26, 26, 46, 0.95)',
          zIndex: 0,
        },
      }}
    >
      {/* Decorative elements */}
      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(135,206,250,0.1) 0%, rgba(0,0,0,0) 70%)`,
          zIndex: 1,
        }}
      />
      
      <Box 
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(135,206,250,0.05) 0%, rgba(0,0,0,0) 70%)`,
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, color: 'white' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography 
                variant="h4" 
                sx={{ 
                  mb: 2,
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #87CEFA, #48D1CC)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                HIMMEL
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: 'rgba(255,255,255,0.7)' }}>
                Website penggemar yang didedikasikan untuk Himmel, sang pahlawan legendaris dari anime "Frieren: Beyond Journey's End".
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton sx={{ color: theme.palette.primary.main }}>
                  <TwitterIcon />
                </IconButton>
                <IconButton sx={{ color: theme.palette.primary.main }}>
                  <FacebookIcon />
                </IconButton>
                <IconButton sx={{ color: theme.palette.primary.main }}>
                  <InstagramIcon />
                </IconButton>
                <IconButton sx={{ color: theme.palette.primary.main }}>
                  <YouTubeIcon />
                </IconButton>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Typography variant="h6" sx={{ mb: 2, color: 'white' }}>
                Navigasi
              </Typography>
              <Link href="#home" underline="none" sx={{ display: 'block', mb: 1, color: 'rgba(255,255,255,0.7)', '&:hover': { color: theme.palette.primary.light } }}>
                Beranda
              </Link>
              <Link href="#profile" underline="none" sx={{ display: 'block', mb: 1, color: 'rgba(255,255,255,0.7)', '&:hover': { color: theme.palette.primary.light } }}>
                Profil
              </Link>
              <Link href="#facts" underline="none" sx={{ display: 'block', mb: 1, color: 'rgba(255,255,255,0.7)', '&:hover': { color: theme.palette.primary.light } }}>
                Fakta
              </Link>
              <Link href="#journey" underline="none" sx={{ display: 'block', mb: 1, color: 'rgba(255,255,255,0.7)', '&:hover': { color: theme.palette.primary.light } }}>
                Perjalanan
              </Link>
              <Link href="#gallery" underline="none" sx={{ display: 'block', mb: 1, color: 'rgba(255,255,255,0.7)', '&:hover': { color: theme.palette.primary.light } }}>
                Galeri
              </Link>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography variant="h6" sx={{ mb: 2, color: 'white' }}>
                Tentang Anime
              </Typography>
              <Link href="https://myanimelist.net/anime/52991/Sousou_no_Frieren?quot=" underline="none" sx={{ display: 'block', mb: 1, color: 'rgba(255,255,255,0.7)', '&:hover': { color: theme.palette.primary.light } }}>
                Frieren: Beyond Journey's End
              </Link>
              <Link href="https://frieren.fandom.com/wiki/List_of_Characters" underline="none" sx={{ display: 'block', mb: 1, color: 'rgba(255,255,255,0.7)', '&:hover': { color: theme.palette.primary.light } }}>
                Karakter Lainnya
              </Link>
              <Link href="https://myanimelist.net/anime/producer/11/Madhouse" underline="none" sx={{ display: 'block', mb: 1, color: 'rgba(255,255,255,0.7)', '&:hover': { color: theme.palette.primary.light } }}>
                Studio Madhouse
              </Link>
              <Link href="https://frieren.fandom.com/wiki/Frieren:_Beyond_Journey%27s_End_(Manga)" underline="none" sx={{ display: 'block', mb: 1, color: 'rgba(255,255,255,0.7)', '&:hover': { color: theme.palette.primary.light } }}>
                Manga Original
              </Link>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Typography variant="h6" sx={{ mb: 2, color: 'white' }}>
                Kontak
              </Typography>
              <Typography sx={{ mb: 1, color: 'rgba(255,255,255,0.7)' }}>
                Email: info@himmel-fansite.com
              </Typography>
              <Typography sx={{ mb: 1, color: 'rgba(255,255,255,0.7)' }}>
                Discord: discord.gg/himmel-fans
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: 'rgba(255,255,255,0.1)' }} />

        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          <Typography variant="body2" sx={{ mb: { xs: 2, sm: 0 } }}>
            © {new Date().getFullYear()} Himmel Fansite. Dibuat oleh Alwi Arfan untuk penggemar.
          </Typography>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconButton 
              onClick={scrollToTop} 
              sx={{ 
                color: 'white',
                bgcolor: theme.palette.primary.main,
                '&:hover': {
                  bgcolor: theme.palette.primary.dark,
                }
              }}
            >
              <ArrowUpwardIcon />
            </IconButton>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;