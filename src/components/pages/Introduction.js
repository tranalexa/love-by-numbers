import React from 'react';
import { Typography, Container, Paper, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { motion } from 'framer-motion';
import DadNavy from '../../assets/images/Dad navy.jpeg';
import MomPageant from '../../assets/images/Mom pageant.jpeg';

function Introduction() {
  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      <Paper sx={{ p: 6 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            textAlign: 'center',
            mb: 6 
          }}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1
              }}
            >
              <FavoriteIcon sx={{ 
                fontSize: 40, 
                color: 'secondary.main',
                mb: 2 
              }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Typography variant="h1" gutterBottom sx={{ 
                fontSize: { xs: '2.5rem', md: '3.75rem' },
                fontWeight: 700,
                background: 'linear-gradient(45deg, #ff4d6d 30%, #c9184a 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Love by the Numbers
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 600 }}>
                A statistical exploration of how my parents found love
              </Typography>
            </motion.div>
          </Box>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', paddingBottom: '40px' }}
            >
              <img src={DadNavy} alt="Dad in Navy" style={{ width: '35%', height: 'auto', objectFit: 'cover', borderRadius: '16px' }} />
              <img src={MomPageant} alt="Mom in Pageant" style={{ width: '35%', height: 'auto', objectFit: 'cover', borderRadius: '16px' }} />
            </motion.div>

            <Typography variant="body1" paragraph>
              It all began when a Navy doctor, working with my dad, came up with a clever plan: he'd introduce my dad to my mom—a pageant queen—if my dad agreed to set him up with a cousin in San Francisco. My dad, amused and curious, agreed, unknowingly setting the stage for a meeting that would change their lives.
            </Typography>

            <Typography variant="body1" paragraph>
              The doctor, aware my mom attended a Vietnamese church in San Leandro, decided this would be the perfect spot for their first meeting. But on that day, my mom wasn't there—she'd gone to an amusement park. Instead, my dad met my grandparents, who welcomed him warmly. Through the connection at church, my dad was later introduced to my mom via a group date, and the rest, as they say, is history.
            </Typography>

            <Typography variant="body1" paragraph>
              Their story is full of twists and chance encounters, which led me to question: what are the odds that two people, living separate lives, would come together in this way? This question drives my CS109 Challenge project, where I'm analyzing the probabilities behind different aspects of their meeting. Through this project, I'm not just quantifying their story, but also reflecting on how chance, choice, and context shape the connections that bring people together.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Box sx={{ mt: 4, bgcolor: '#f5f5f5', p: 3, borderRadius: 2 }}>
              <Typography variant="body2" color="text.secondary">
                This project uses data from the <a href="https://data.stanford.edu/hcmst" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>How Couples Meet and Stay Together (HCMST) dataset</a>.
                While based on real data, this analysis has limitations due to the nature of the dataset, including small sample sizes and potential biases. The goal is to celebrate love's beautiful improbability, not reduce it to numbers!
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Paper>
    </Container>
  );
}

export default Introduction;
