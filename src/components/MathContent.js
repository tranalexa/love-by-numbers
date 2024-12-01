import React from 'react';
import { Box, Typography } from '@mui/material';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export const SmallFormula = ({ math, description }) => (
  <Box sx={{ 
    my: 4,
    px: 6,
    py: 5,
    bgcolor: '#F8FAFC',
    borderRadius: '16px',
    border: '1px solid rgba(0, 0, 0, 0.06)',
    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.03)',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
      transform: 'translateY(-2px)',
    },
  }}>
    <Box sx={{
      '& .katex': {
        fontSize: '1.15rem',
      },
      '& .katex-display': {
        margin: '0.5em 0',
      },
    }}>
      <BlockMath math={math} />
    </Box>
    {description && (
      <Typography 
        variant="body2"
        sx={{ 
          mt: 3,
          textAlign: 'center',
          color: '#6B7280',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.95rem',
          letterSpacing: '0.01em',
          lineHeight: 1.6,
        }}
      >
        {description}
      </Typography>
    )}
  </Box>
);

export const Formula = ({ math, description }) => (
  <Box sx={{ 
    my: 4,
    px: 6,
    py: 5,
    bgcolor: '#F8FAFC',
    borderRadius: '16px',
    border: '1px solid rgba(0, 0, 0, 0.06)',
    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.03)',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
      transform: 'translateY(-2px)',
    },
  }}>
    <Box sx={{
      '& .katex': {
        fontSize: '1.5rem',
      },
      '& .katex-display': {
        margin: '0.5em 0',
      },
    }}>
      <BlockMath math={math} />
    </Box>
    {description && (
      <Typography 
        variant="body2"
        sx={{ 
          mt: 3,
          textAlign: 'center',
          color: '#6B7280',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.95rem',
          letterSpacing: '0.01em',
          lineHeight: 1.6,
        }}
      >
        {description}
      </Typography>
    )}
  </Box>
);

export const InlineFormula = ({ math }) => (
  <Box 
    component="span" 
    sx={{ 
      mx: 1,
      color: '#FF4D6D',
      '& .katex': {
        fontSize: '1.1em',
      },
    }}
  >
    <InlineMath math={math} />
  </Box>
);

export const StatisticalNote = ({ children }) => (
  <Box sx={{ 
    my: 4,
    p: 4,
    bgcolor: '#F8FAFC',
    borderRadius: '16px',
    border: '1px solid rgba(0, 0, 0, 0.06)',
    position: 'relative',
    display: 'flex',
    gap: 3,
    alignItems: 'flex-start',
    '&::before': {
      content: '""',
      width: '4px',
      height: '100%',
      position: 'absolute',
      left: 0,
      top: 0,
      borderRadius: '4px 0 0 4px',
      background: 'linear-gradient(180deg, #FF4D6D 0%, #FF758F 100%)',
    },
  }}>
    <Typography 
      variant="body2" 
      sx={{ 
        pl: 2,
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '0.95rem',
        lineHeight: 1.7,
        letterSpacing: '0.01em',
        color: '#4B5563',
        '& strong': { 
          color: '#FF4D6D',
          fontWeight: 600,
        }
      }}
    >
      {children}
    </Typography>
  </Box>
);

export const DistributionPlot = ({ data, title, description }) => (
  <Box sx={{ 
    my: 4,
    p: 5,
    bgcolor: '#FFFFFF',
    borderRadius: '16px',
    border: '1px solid rgba(0, 0, 0, 0.06)',
    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.03)',
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
    },
  }}>
    <Typography 
      variant="h6" 
      gutterBottom
      sx={{ 
        fontFamily: "'Fraunces', serif",
        fontSize: '1.5rem',
        fontWeight: 600,
        color: '#2B2D42',
        mb: 3,
      }}
    >
      {title}
    </Typography>
    {/* Distribution plot implementation will go here */}
    {description && (
      <Typography 
        variant="body2" 
        sx={{ 
          mt: 3,
          color: '#6B7280',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '0.95rem',
          letterSpacing: '0.01em',
          lineHeight: 1.6,
        }}
      >
        {description}
      </Typography>
    )}
  </Box>
);

export const ProbabilityTree = ({ data, title }) => (
  <Box sx={{ 
    my: 4,
    p: 4,
    bgcolor: '#fff',
    borderRadius: 2,
    border: '1px solid rgba(26,26,26,0.1)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
  }}>
    {/* Probability tree implementation will go here */}
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
  </Box>
);
