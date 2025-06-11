import React from 'react';
import { Box } from '@mui/material';

const SectionDivider = ({ topColor, bottomColor, height = 10 }) => {
  return (
    <Box 
      className="section-divider"
      sx={{ 
        height: `${height}px`, 
        position: 'relative', 
        zIndex: 1,
        marginTop: `-${height}px`,
        background: `linear-gradient(to bottom, ${topColor} 0%, ${bottomColor} 100%)`,
        pointerEvents: 'none',
      }}
    />
  );
};

export default SectionDivider;