import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import AppRouter from './components/Router';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FF4D6D', // Vibrant rose
      light: '#FF758F',
      dark: '#C9184A',
    },
    secondary: {
      main: '#2B2D42', // Deep navy
      light: '#8D99AE',
      dark: '#14213D',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2B2D42',
      secondary: '#8D99AE',
    },
  },
  typography: {
    fontFamily: "'DM Sans', 'Inter', sans-serif",
    h1: {
      fontFamily: "'Fraunces', serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Fraunces', serif",
      fontWeight: 700,
      fontSize: '2.5rem',
      marginBottom: '1.5rem',
    },
    h3: {
      fontFamily: "'Fraunces', serif",
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.8,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)',
          border: '1px solid rgba(0, 0, 0, 0.06)',
          borderRadius: '16px',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(20px) saturate(180%)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '1rem',
          fontWeight: 500,
          padding: '12px 24px',
          borderRadius: '12px',
          transition: 'all 0.2s ease',
          letterSpacing: '0.02em',
        },
        contained: {
          boxShadow: '0 2px 8px rgba(255, 77, 109, 0.15)',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(255, 77, 109, 0.25)',
            transform: 'translateY(-1px)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width: 1200px)': {
            maxWidth: 1200,
            padding: '0 32px',
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 16,
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation />
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
