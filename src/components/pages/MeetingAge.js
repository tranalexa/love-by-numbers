import React from 'react';
import { Typography, Container, Paper, Box } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Formula } from '../MathContent';
import { motion } from 'framer-motion';

function MeetingAge() {
  const data = [
    { age: 18, probability: 0.02 },
    { age: 20, probability: 0.05 },
    { age: 22, probability: 0.08 },
    { age: 24, probability: 0.10 },
    { age: 26, probability: 0.09 },
    { age: 28, probability: 0.07 },
    { age: 30, probability: 0.05 },
  ];

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
              Meeting Age: Mean and Variance
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Typography variant="body1" paragraph>
              The age distribution analysis uses the Central Limit Theorem to understand the typical age ranges for meeting significant others. Here's the mathematical framework:
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Box sx={{ mb: 4 }}>
              <Formula 
                math="\begin{aligned}
                  \mu &= \frac{1}{n}\sum_{i=1}^n x_i = 24.32 \\
                  \sigma^2 &= \frac{1}{n-1}\sum_{i=1}^n (x_i - \mu)^2 = 139.99 \\
                  \sigma &= \sqrt{139.99} = 11.83
                \end{aligned}"
                description="Sample mean and variance calculations for meeting age"
              />
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Typography variant="body1" paragraph>
              For my mom's age (20), we calculate the z-score:
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <Box sx={{ mb: 4 }}>
              <Formula 
                math="z = \frac{x - \mu}{\sigma} = \frac{20 - 24.32}{11.83} = -0.562"
                description="Z-score calculation showing how many standard deviations from the mean"
              />
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <Typography variant="body1" paragraph>
              A z-score of -0.562 indicates that my mom's age when meeting my mom was about 0.562 standard deviations below the mean, placing her in the 28.7th percentile of the age distribution.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <Box sx={{ height: 400, my: 4 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="age" label={{ value: 'Age', position: 'bottom' }} />
                  <YAxis label={{ value: 'Probability', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="probability" 
                    stroke="#8884d8"
                    strokeWidth={2}
                  >
                    <motion.animate
                      attributeName="strokeDashoffset"
                      from="1000"
                      to="0"
                      dur="1.5s"
                      begin="1.7s"
                      fill="freeze"
                    />
                  </Line>
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.8 }}
          >
            <Typography variant="h5" gutterBottom>
              Statistical Insights
            </Typography>
          </motion.div>

          <Box sx={{ pl: 4 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.1, duration: 0.8 }}
            >
              <Typography variant="body1" paragraph>
                • Peak meeting age range: 22-26 years
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.3, duration: 0.8 }}
            >
              <Typography variant="body1" paragraph>
                • Mean meeting age: 24.32 years
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
            >
              <Typography variant="body1" paragraph>
                • Standard deviation: 11.83 years
              </Typography>
            </motion.div>
          </Box>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.7, duration: 0.8 }}
          >
            <Typography variant="body1" paragraph sx={{ mt: 2 }}>
              This data offers fascinating context for my parents' story. Meeting at 20 years old placed them on the earlier side of the spectrum, and their early connection reflects not only a young beginning but also a somewhat uncommon alignment of timing that underscores the uniqueness of their love story.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.9, duration: 0.8 }}
          >
            <Box sx={{ mt: 4, bgcolor: '#f5f5f5', p: 3, borderRadius: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Analysis based on <a href="https://data.stanford.edu/hcmst" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>HCMST dataset</a> (2017-2022). Age probabilities normalized and smoothed
                for visualization purposes.
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Paper>
    </Container>
  );
}

export default MeetingAge;
