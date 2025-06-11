import { createTheme } from '@mui/material/styles';

// Warna khas Himmel
const himmelBlue = '#87CEFA';

const theme = createTheme({
  palette: {
    primary: {
      main: himmelBlue,
      light: '#b3e0ff',
      dark: '#5d99c6',
    },
    secondary: {
      main: '#ffd700', // Gold accent (bisa disesuaikan dengan anime)
    },
    background: {
      default: '#f5f8ff', // Slight blue tint to background
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Nunito", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
        },
        containedPrimary: {
          background: `linear-gradient(45deg, ${himmelBlue} 30%, #b3e0ff 90%)`,
          boxShadow: '0 3px 10px 2px rgba(135, 206, 250, 0.3)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default theme;