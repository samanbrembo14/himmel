import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const hoveredElements = document.elementsFromPoint(e.clientX, e.clientY);
      const isLinkHovered = hoveredElements.some(el => {
        const tagName = el.tagName.toLowerCase();
        return tagName === 'a' || tagName === 'button' || 
               el.classList.contains('MuiButtonBase-root') || 
               el.classList.contains('clickable');
      });
      
      setLinkHovered(isLinkHovered);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  // Mobile check - don't show custom cursor on touch devices
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      setHidden(true);
    }
  }, []);

  return (
    <>
      <Box
        className="cursor-outer"
        sx={{
          position: 'fixed',
          width: linkHovered ? '40px' : '20px',
          height: linkHovered ? '40px' : '20px',
          borderRadius: '50%',
          backgroundColor: 'transparent',
          border: '2px solid #87CEFA',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s ease-out, height 0.2s ease-out, opacity 0.2s ease-out',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
          opacity: hidden ? 0 : 0.6,
          left: position.x,
          top: position.y,
        }}
      />
      <Box
        className="cursor-inner"
        sx={{
          position: 'fixed',
          width: clicked ? '10px' : linkHovered ? '10px' : '5px',
          height: clicked ? '10px' : linkHovered ? '10px' : '5px',
          borderRadius: '50%',
          backgroundColor: '#87CEFA',
          transform: 'translate(-50%, -50%)',
          transition: clicked ? '0.1s ease-out' : '0.2s ease-out',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: hidden ? 0 : 1,
          left: position.x,
          top: position.y,
        }}
      />
    </>
  );
};

export default CustomCursor;