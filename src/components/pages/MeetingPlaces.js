import React from 'react';
import { Typography, Box, Paper, Container } from '@mui/material';
// import Grid from '@mui/material/Grid';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Formula } from '../MathContent';
import { motion } from 'framer-motion';
import BeachImage from '../../assets/images/Beach.jpeg';

const meetingPlacesData = [
  { name: 'Church', probability: 5.83 },
  { name: 'College', probability: 7.80 },
  { name: 'Bar/Restaurant', probability: 19.79 },
  { name: 'Party', probability: 9.68 },
  { name: 'Public Spaces', probability: 3.95 },
  { name: 'Blind Date', probability: 3.00 },
];

function MeetingPlaces() {
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
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Typography variant="h2" gutterBottom>
              Meeting Place Analysis
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', marginTop: '40px' }}
          >
            <img src={BeachImage} alt="Beach" style={{ width: '60%', height: 'auto', objectFit: 'cover', borderRadius: '12px' }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Typography variant="body2" display="block" align="center" gutterBottom>
              My parents in Monterey, California
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Box sx={{ mb: 4 }}>
              <Formula 
                math="P(\text{Church Meeting}) = \frac{N_{\text{Church Meetings}}}{N_{\text{Total Meetings}}} = 0.0583"
                description="Probability of meeting through church"
              />
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Typography variant="body1" paragraph>
              According to the HCMST dataset, only 5.83% of couples met through church, making it a relatively rare meeting place compared to more common venues like bars and restaurants (19.79%). This makes my parents' meeting quite unique statistically.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            style={{ width: '100%', height: 400, marginBottom: '2rem' }}
          >
            <ResponsiveContainer>
              <BarChart
                data={meetingPlacesData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="name"
                  angle={-45}
                  textAnchor="end"
                  height={60}
                  interval={0}
                  tick={{ fontSize: 10 }}
                />
                <YAxis
                  label={{ 
                    value: 'Probability (%)', 
                    angle: -90, 
                    position: 'insideLeft',
                    style: { textAnchor: 'middle' }
                  }}
                />
                <Tooltip />
                <Bar 
                  dataKey="probability" 
                  fill="#ff4d6d"
                  name="Probability (%)"
                  component={({ x, y, width, height, ...props }) => (
                    <motion.rect
                      x={x}
                      y={y}
                      width={width}
                      initial={{ height: 0, y: y + height }}
                      animate={{ height, y }}
                      transition={{
                        duration: 0.8,
                        delay: 1.1,
                        ease: "easeOut"
                      }}
                      {...props}
                    />
                  )}
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <Typography variant="body1" paragraph>
              The data reveals an interesting pattern in how couples meet. While bars and restaurants dominate as meeting places, religious venues like churches represent a smaller but significant fraction of initial encounters. This statistical rarity adds an extra layer of serendipity to my parents' story.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <Typography variant="body1">
              What makes their meeting even more remarkable is that it wasn't just a chance encounter through church—it was orchestrated through a mutual connection, adding another layer of probability to consider. The combination of meeting through both a mutual friend and through church represents an even rarer intersection of circumstances.
            </Typography>
          </motion.div>
        </motion.div>
      </Paper>
    </Container>
  );
}

export default MeetingPlaces;
