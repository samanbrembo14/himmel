import React from 'react';
import { Paper, Typography, Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { useScrollObserver } from '../../hooks/useScrollObserver';

const QuoteCard = ({ quote, character }) => {
  const theme = useTheme();
  const [ref, isVisible] = useScrollObserver({ threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6 }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 4,
          borderRadius: 4,
          position: 'relative',
          background: 'linear-gradient(135deg, rgba(135,206,250,0.1) 0%, rgba(255,255,255,0.8) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(135,206,250,0.3)',
        }}
      >
        <Box 
          sx={{ 
            position: 'absolute',
            top: -15,
            left: 20,
            color: theme.palette.primary.main,
            transform: 'scale(2)',
            opacity: 0.4
          }}
        >
          <FormatQuoteIcon fontSize="large" />
        </Box>

        <Typography
          variant="h5"
          sx={{
            fontStyle: 'italic',
            fontWeight: 500,
            color: theme.palette.primary.dark,
            mb: 2,
            mt: 2,
            position: 'relative',
            zIndex: 1
          }}
        >
          {quote}
        </Typography>
        
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: 'right',
            fontWeight: 600,
          }}
        >
          — {character}
        </Typography>
      </Paper>
    </motion.div>
  );
};

export default QuoteCard;