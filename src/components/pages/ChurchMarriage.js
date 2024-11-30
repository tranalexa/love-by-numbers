import React from 'react';
import { Typography, Container, Paper, Box, Grid } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Label } from 'recharts';
import { Formula } from '../MathContent';
import { motion } from 'framer-motion';

function ChurchMarriage() {
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
              Church to Marriage?
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Typography variant="body1" paragraph>
              So it's already established that they had quite a rare meeting in church. Could this have played a role in the fact that they ended up getting married?
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Typography variant="body1" paragraph>
              The calculated probabilities offer a clear picture of how meeting at church influences the likelihood of marriage. The probability of marriage given meeting at church is 83.33%. In contrast, the probability of marriage given not meeting at church is 63.81%, showing a significant drop in the likelihood of marriage when the couple did not meet in a church setting.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Typography variant="body1" paragraph>
              To put this into perspective mathematically, we're working with conditional probabilities. For the couples who met at church, we calculated:
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <Formula 
              math="P(\text{Marriage} \mid \text{Met at Church}) = \frac{P(\text{Marriage and Met at Church})}{P(\text{Met at Church})} = 0.833"
              description="Probability of marriage given meeting at church"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <Typography variant="body1" paragraph>
              For those who did not meet at church, the calculation is:
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <Formula 
              math="P(\text{Marriage} \mid \text{Did not meet at Church}) = \frac{P(\text{Marriage and Not Church})}{P(\text{Not Church})} = 0.638"
              description="Probability of marriage given not meeting at church"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.8 }}
          >
            <Typography variant="body1" paragraph>
              Finally, the overall probability of marriage in the dataset, 64.91%, serves as a baseline, showing that meeting at church significantly raises the likelihood of marriage relative to the general population. These calculations suggest that the environment or context in which people meet can play a crucial role in the outcomes of their relationships.
            </Typography>
          </motion.div>

          <Grid container spacing={4} sx={{ my: 4 }}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.9, duration: 0.8 }}
              >
                <Box sx={{ position: 'relative', height: 300 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'Married', value: 83.33, fill: '#FF4D6D' },
                          { name: 'Not Married', value: 16.67, fill: '#FFE5E5' }
                        ]}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        dataKey="value"
                      >
                        <Label
                          value="Met at Church"
                          position="center"
                          style={{ fontSize: '16px', fill: '#2B2D42' }}
                        />
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.1, duration: 0.8 }}
              >
                <Box sx={{ position: 'relative', height: 300 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'Married', value: 63.81, fill: '#FF758F' },
                          { name: 'Not Married', value: 36.19, fill: '#FFE5E5' }
                        ]}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        dataKey="value"
                      >
                        <Label
                          value="Did Not Meet at Church"
                          position="center"
                          style={{ fontSize: '16px', fill: '#2B2D42' }}
                        />
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.8 }}
          >
            <Typography variant="body1">
              Relating this back to my parents' story, it's striking to think about how their relationship fits into this statistical framework. These numbers show that church meetings statistically lead to stronger, more enduring relationships. The fact that my parents are part of the 83.33% of couples who met at church and went on to marry is both reassuring and fascinating. It's almost as if their meeting at church wasn't just a random moment, but rather a statistically significant turning point.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            <Box sx={{ mt: 4, bgcolor: '#f5f5f5', p: 3, borderRadius: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Data from <a href="https://data.stanford.edu/hcmst" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>HCMST dataset</a> (2017-2022). Success rates calculated using
                Bayesian probability methods.
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Paper>
    </Container>
  );
}

export default ChurchMarriage;
