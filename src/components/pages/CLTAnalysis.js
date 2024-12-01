import React from 'react';
import { Typography, Container, Paper, Box } from '@mui/material';
import { Formula } from '../MathContent';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import ageData from '../../processed_data.json';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

function CLTAndMeetingAge() {
  const meetingAgeData = [
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
              Meeting Age and Central Limit Theorem Analysis
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Typography variant="body1" paragraph>
              The expected age for meeting a future spouse was calculated as 24.32 years, basd on those who married, while the broader expected age for meeting any significant other is 26.65 years. The variance in meeting age is 139.99, with a standard deviation of 11.83 years.
            </Typography>
          </motion.div>
          <Box sx={{ height: 500, my: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" gutterBottom align="center">
              Ages When People Met
            </Typography>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1 }}
            >
              <BarChart 
                width={700}
                height={400}
                data={ageData.ageDistribution}
                margin={{ top: 5, right: 30, left: 20, bottom: 25 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="age" 
                  label={{ 
                    value: 'Age When Met', 
                    position: 'insideBottom',
                    offset: -10
                  }}
                  tickFormatter={(value) => Math.round(value)}
                  domain={['dataMin', 'dataMax']}
                  type="number"
                  dy={10}
                />
                <YAxis 
                  label={{ value: 'Frequency', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip 
                  formatter={(value, name) => [`${value} couples`, 'Frequency']}
                  labelFormatter={(label) => `Age: ${Math.round(Number(label))}`}
                />
                <Bar dataKey="frequency" fill="#8884d8" />
              </BarChart>
            </motion.div>
          </Box>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Typography variant="body1" paragraph>
              For my mom's age at the time of meeting my dad (20 years old), we calculate the z-score: 
            </Typography>
            <Formula
              math={"z = \\frac{x - \\mu}{\\sigma} = \\frac{20 - 26.65}{11.83} = -0.562"}
              description="Z-score calculation showing how many standard deviations from the mean."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Box sx={{ height: 500, my: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h6" gutterBottom align="center">
                Distribution of Sample Means (Central Limit Theorem)
              </Typography>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 1 }}
              >
                <BarChart 
                  width={700}
                  height={400}
                  data={ageData.cltDistribution}
                  margin={{ top: 5, right: 30, left: 20, bottom: 25 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="mean" 
                    label={{ 
                      value: 'Sample Mean', 
                      position: 'insideBottom',
                      offset: -10
                    }}
                    tickFormatter={(value) => Math.round(value)}
                    domain={['dataMin', 'dataMax']}
                    type="number"
                    dy={10}
                  />
                  <YAxis 
                    label={{ value: 'Frequency', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip 
                    formatter={(value, name) => [`${value} samples`, 'Frequency']}
                    labelFormatter={(label) => `Mean: ${Math.round(Number(label))}`}
                  />
                  <Bar dataKey="frequency" fill="#8884d8" />
                </BarChart>
              </motion.div>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Typography variant="body1" paragraph>
              The data shows that the average meeting age is 24.3 years (σ = 11.8). My mom was 20 when she met my dad, placing her in the 28.7th percentile - somewhat earlier than typical, but not unusually so.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
          
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <Typography variant="body1" paragraph>
              The original distribution of ages is right-skewed, showing that younger couples are more common in the dataset. Most couples meet in their early 20s, with fewer meetings happening later in life.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.8 }}
          >
            <Typography variant="h6" gutterBottom align="center">
              Meeting Age: Mean and Variance
            </Typography>
            <Typography variant="body1" paragraph>
              The age distribution analysis further applies the CLT to understand the typical age ranges for meeting significant others. Here's the mathematical framework:
            </Typography>
            <Box sx={{ mb: 4 }}>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={meetingAgeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="age" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="probability" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <Typography variant="h5" gutterBottom>
              What This Means for My Parents
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <Typography variant="body1">
              My parents' story fits within these broader trends. Meeting at 20, my mom was on the younger side of the distribution, joining the majority of couples who connected in their early twenties. While their timing was somewhat early, it wasn't unusual - and perhaps contributed to their enduring connection.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.8 }}
          >
            <Box sx={{ mt: 4, bgcolor: '#f5f5f5', p: 3, borderRadius: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Analysis based on <a href="https://data.stanford.edu/hcmst" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>HCMST dataset</a> (2017-2022) with n=1000 sample size.
                All values rounded to three decimal places for clarity.
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Paper>
    </Container>
  );
}

export default CLTAndMeetingAge;
