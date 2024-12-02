import React from 'react';
import { Typography, Container, Paper, Box, Grid } from '@mui/material';
import { PieChart, Pie, ResponsiveContainer, Tooltip, Label } from 'recharts';
// import { Cell } from 'recharts';
import { Formula } from '../MathContent';
import { motion } from 'framer-motion';
import WeddingCakeImage from '../../assets/images/Wedding cake.jpeg';

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
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', marginTop: '40px' }}
          >
            <img src={WeddingCakeImage} alt="Wedding Cake" style={{ width: '60%', height: 'auto', objectFit: 'cover', borderRadius: '12px' }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Typography variant="body2" display="block" align="center" gutterBottom sx={{ marginBottom: '30px' }}>
              My parents' Barbra Streisand inspired wedding cake!
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
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
              The calculated probabilities offer a clear picture of how meeting through church influences the likelihood of marriage. The probability of marriage given meeting through church is 83.33%. In contrast, the probability of marriage given not meeting through church is 63.81%, showing a significant drop in the likelihood of marriage when the couple did not meet in a church setting.
            </Typography>
          </motion.div>

          <Grid container spacing={4} sx={{ mt: 1, mb: 4 }}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Box sx={{ position: 'relative', height: 250 }}>
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
                          value="Met through church"
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
                transition={{ delay: 1.0, duration: 0.8 }}
              >
                <Box sx={{ position: 'relative', height: 250 }}>
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
                          value="Did Not Meet through church"
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
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Typography variant="body1" paragraph>
              To put this into perspective mathematically, we're working with conditional probabilities. For the couples who met through church, we calculated:
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <Formula 
              math="P(\text{Marriage} \mid \text{Met through church}) = \frac{P(\text{Marriage and Met through church})}{P(\text{Met through church})} = 0.833"
              description="Probability of marriage given meeting through church"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <Typography variant="body1" paragraph>
              For those who did not meet through church, the calculation is:
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <Formula 
              math="P(\text{Marriage} \mid \text{Did not meet through church}) = \frac{P(\text{Marriage and Not Church})}{P(\text{Not Church})} = 0.638"
              description="Probability of marriage given not meeting through church"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.8 }}
          >
            <Typography variant="body1" paragraph>
              Finally, the overall probability of marriage in the dataset, 64.91%, serves as a baseline, showing that meeting through church significantly raises the likelihood of marriage relative to the general population. These calculations suggest that the environment or context in which people meet can play a crucial role in the outcomes of their relationships.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.8 }}
          >
            <Typography variant="body1">
              Relating this back to my parents' story, it's striking to think about how their relationship fits into this statistical framework. These numbers show church meetings statistically lead to stronger, more enduring relationships. The fact that my parents are part of the 83.33% of couples who met through church and went on to marry is both reassuring and fascinating. It's almost as if their meeting through church wasn't just a random moment, but rather a statistically significant turning point.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
          </motion.div>
        </motion.div>
      </Paper>
    </Container>
  );
}

export default ChurchMarriage;
