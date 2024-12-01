import React from 'react';
import { Typography, Container, Paper, Box } from '@mui/material';
import { Formula } from '../MathContent';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import ageData from '../../processed_data.json';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import DadDrink from '../../assets/images/Dad drink.jpeg';
import MomDrink from '../../assets/images/Mom drink.jpeg';

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
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Typography variant="h2" gutterBottom>
              Meeting Age and Central Limit Theorem Analysis
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px' }}
          >
            <img src={DadDrink} alt="Dad Drink" style={{ width: '45%', height: 'auto', objectFit: 'cover', borderRadius: '12px' }} />
            <img src={MomDrink} alt="Mom Drink" style={{ width: '45%', height: 'auto', objectFit: 'cover', borderRadius: '12px' }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ marginTop: '20px' }}
          >
            <Typography variant="body2" display="block" align="center" gutterBottom sx={{ marginBottom: '30px' }}>
              Date night at Planet Hollywood!
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Typography variant="body1" paragraph>
              The expected age for meeting a future spouse was calculated as 24.32 years, basd on those who married, while the broader expected age for meeting any significant other is 26.65 years. The variance in meeting age is 139.99, with a standard deviation of 11.83 years.
            </Typography>
          </motion.div>
          <Box sx={{ height: 470, my: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Typography variant="h6" gutterBottom align="center">
                Meeting Age: Frequency Distribution
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
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
                    offset: -15
                  }}
                  tickFormatter={(value) => Math.round(value)}
                  domain={['dataMin', 'dataMax']}
                  type="number"
                  dy={10}
                />
                <YAxis 
                  label={{ value: 'Frequency', angle: -90, position: 'insideLeft', dx: -10, dy: 50 }}
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
            transition={{ delay: 0.8, duration: 0.8 }}
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
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Box sx={{ height: 470, my: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h6" gutterBottom align="center">
                Distribution of Sample Means (Central Limit Theorem)
              </Typography>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
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
                    label={{ value: 'Frequency', angle: -90, position: 'insideLeft', dx: -10, dy: 50 }}
                  />
                  <Tooltip 
                    formatter={(value, name) => [`${value} samples`, 'Frequency']}
                    labelFormatter={(label) => `Mean: ${Math.round(Number(label))}`}
                  />
                  <Bar dataKey="frequency" fill="#82ca9d" />
                </BarChart>
              </motion.div>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            style={{ marginTop: '0px', paddingBottom: '0px' }}
          >
            <Typography variant="body1" paragraph>
              I noticed the age when couples met is right-skewed, with many meeting in their early 20s. To explore this, I used the Central Limit Theorem (CLT), sampling 50 couples 1,000 times and calculating the mean age of each sample. As expected, the means formed a normal distribution, illustrating the CLT.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
          
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <Typography variant="body1" paragraph>
              From my CLT analysis, I found the mean age at which couples met across the samples to be 26.63 years, with a standard deviation of 1.71 years. The 95% confidence interval for the mean is [26.52, 26.74], providing a range which the true mean age is likely to fall.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.8 }}
            style={{ paddingBottom: '5px' }}
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
        </motion.div>
      </Paper>
    </Container>
  );
}

export default CLTAndMeetingAge;
