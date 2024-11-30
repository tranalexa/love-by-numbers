import React from 'react';
import { Typography, Box, Paper, Container } from '@mui/material';
import { Formula } from '../MathContent';
import { motion } from 'framer-motion';

function RegressionAnalysis() {
  // Constants from the actual model
  const MEAN_AGE = 24.32; // Mean age from our data
  const STD_AGE = 11.83;  // Standard deviation from our data
  const params = [0.62793375, 0.93787317, -0.57381537]; // Model coefficients
  const accuracy = 0.6922840454964648; // Model accuracy
  const BETA_0 = params[0]; // Intercept
  const BETA_CHURCH = params[1]; // Church coefficient
  const BETA_AGE = params[2]; // Age coefficient

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
              Logistic Regression: Predicting Marriage
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Typography variant="body1" paragraph>
              Can we predict if a couple will get married based on where they met and their age? Using logistic regression, I analyzed two key factors from the HCMST dataset: whether couples met at church (w1_q24_church) and their age when meeting (w1_age_when_met).
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Formula
              math="\text{logit}(p) = \beta_0 + \beta_1(\text{met at church}) + \beta_2(\text{standardized age})"
              description="Logistic regression model"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Typography variant="body1" paragraph>
              After training on the dataset using gradient descent (1000 steps, learning rate 0.0001), the model revealed:
            </Typography>
          </motion.div>

          <Box sx={{ pl: 4, mb: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <Typography variant="body1" component="div">
                • β₀ (intercept) = {BETA_0.toFixed(4)}
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <Typography variant="body1" component="div">
                • β₁ (church) = {BETA_CHURCH.toFixed(4)}: Strong positive effect of meeting at church
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <Typography variant="body1" component="div">
                • β₂ (standardized age) = {BETA_AGE.toFixed(4)}: Effect of age (standardized)
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.8 }}
            >
              <Typography variant="body1" component="div" sx={{ mt: 1 }}>
                Model accuracy: {(accuracy * 100).toFixed(2)}%
              </Typography>
            </motion.div>
          </Box>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.8 }}
          >
            <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
              What These Numbers Mean
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.8 }}
          >
            <Typography variant="body1" paragraph>
              The model shows that meeting at church has a significant positive effect on marriage probability (β₁ = {BETA_CHURCH.toFixed(4)}). 
              This suggests that couples who meet in religious settings have higher marriage probabilities, possibly due to shared values and community support.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.8 }}
          >
            <Typography variant="body1" paragraph>
              The age coefficient (β₂ = {BETA_AGE.toFixed(4)}) indicates that meeting later in life is associated with {BETA_AGE < 0 ? 'lower' : 'higher'} marriage likelihood. 
              Note that age is standardized (centered at {MEAN_AGE.toFixed(1)} years with standard deviation {STD_AGE.toFixed(1)} years) to improve model stability.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
              Connecting to My Parents' Story
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.7, duration: 0.8 }}
          >
            <Typography variant="body1" paragraph>
              My parents' story aligns remarkably well with these findings. They met at church, which our model identifies as a strong positive indicator for marriage (increasing odds by a factor of e^{BETA_CHURCH.toFixed(4)} ≈ {Math.exp(BETA_CHURCH).toFixed(2)}). 
              My mom was also relatively young—around 20—when they met, which the model suggests is favorable for marriage probability. 
              Their early relationship, built on shared values and family support, exemplifies how these statistical patterns play out in real life.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.9, duration: 0.8 }}
          >
            <Box sx={{ mt: 2, p: 2, bgcolor: '#f3f4f6', borderRadius: 1 }}>
              <Typography variant="body2" color="text.secondary">
                Implementation details: The model uses standardized age values and gradient descent optimization (1000 steps, learning rate 0.0001).
                Probabilities are computed using a stabilized sigmoid function with value clipping at ±500 to prevent overflow.
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Paper>
    </Container>
  );
}

export default RegressionAnalysis;
