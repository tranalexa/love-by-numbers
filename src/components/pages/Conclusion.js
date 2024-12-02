import React from 'react';
import { Typography, Container, Paper, Box, Link } from '@mui/material';
import { motion } from 'framer-motion';
import FamilyPhoto from '../../assets/images/Family.jpeg';

function Conclusion() {
  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      <Paper sx={{ p: 6 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <Typography variant="h2" gutterBottom>
              Conclusion
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Typography variant="body1" paragraph>
              Although analyzing my parents' relationship through probability shows that factors like shared spaces and people matter in the union of a couple, there's more to their story than the numbers. From a Navy doctor's introduction to a parental church connection, their bond highlights how chance events can create lasting relationships. While data shows patterns, their story reminds me that love is shaped by serendipity and timing.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Box sx={{ mt: 4 }}>
              <Typography variant="h5" gutterBottom>
                Sources and Materials
              </Typography>
              <ul>
                <li><Link href="https://data.stanford.edu/hcmst" target="_blank" rel="noopener noreferrer">How Couples Meet and Stay Together Dataset</Link></li>
                <li><Link href="https://github.com/tranalexa/love-by-numbers" target="_blank" rel="noopener noreferrer">GitHub Repository</Link></li>
                <li><Link href="https://www.overleaf.com/read/hvvhfygctynj#6de90f" target="_blank" rel="noopener noreferrer">Project Writeup</Link></li>
              </ul>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Box sx={{ mt: 4, mb: 4 , textAlign: 'center'}}>
              <Typography variant="h5" gutterBottom>
                A Note to My Parents
              </Typography>
              <Typography variant="body1" paragraph>
                Mom and Dad, if you're reading this, I hope you enjoyed my project! Thank you for your endless love and support :)
              </Typography>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Box sx={{ mt: 4, mb: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <motion.img
                  src={FamilyPhoto}
                  alt="Me with my parents"
                  style={{ width: '60%', height: 'auto', objectFit: 'cover', borderRadius: '12px' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                />
              </Box>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <Box sx={{ mt: 4, bgcolor: '#f5f5f5', p: 3, borderRadius: 2, textAlign: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                This website was created using Windsurf
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Paper>
    </Container>
  );
}

export default Conclusion;
