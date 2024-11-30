import React from 'react';
import { Typography, Box, Paper, Container } from '@mui/material';
import { Formula } from '../MathContent';
import { motion } from 'framer-motion';

function BayesianAnalysis() {
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
              Bayesian Reasoning in Marriage Probability
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Typography variant="body1" paragraph>
              To analyze the factors influencing eventual marriage in a relationship, I computed both conditional probabilities and Bayesian posterior probabilities based on the available data regarding age when couples met, church attendance, coworker introductions, and marital status. These two approaches provide insights into the probability of marriage under different conditions and how that might relate to my parents ending up married.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Typography variant="h5" gutterBottom>
              Prior Belief of Marriage Probability
            </Typography>

            <Typography variant="body1" paragraph>
              The prior probability of marriage, calculated from our dataset, is 0.6491. This represents the base rate of marriages in our sample before considering any specific factors.
            </Typography>

            <Formula
              math="P(\text{married}) = \frac{N_{\text{married}}}{N_{\text{total}}}"
              description="Prior probability calculation"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Typography variant="h5" gutterBottom>
              Meeting Through Coworkers
            </Typography>

            <Typography variant="body1" component="div">
              <strong>Conditional Probability (Data-derived):</strong> Based on the data, the probability of marriage given that the couple met as coworkers is 0.7399:
            </Typography>

            <Formula
              math="P(\text{married} \mid \text{coworker}) = \frac{N_{\text{married, coworker}}}{N_{\text{coworker}}} = 0.7399"
              description="Conditional probability for coworker meetings"
            />

            <Typography variant="body1" component="div">
              <strong>Bayesian Posterior Probability:</strong> The Bayesian update after considering the coworker evidence:
            </Typography>

            <Formula
              math="P(\text{married} \mid \text{coworker}) = \frac{P(\text{coworker} \mid \text{married}) \cdot P(\text{married})}{P(\text{coworker})} = 0.7399"
              description="Bayesian posterior probability for coworker evidence"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <Typography variant="h5" gutterBottom>
              Adding Church Meeting Evidence
            </Typography>

            <Typography variant="body1" component="div">
              <strong>Conditional Probability (Data-derived):</strong> When we consider both church and coworker meetings, the marriage probability increases to 0.9013:
            </Typography>

            <Formula
              math="P(\text{married} \mid \text{church, coworker}) = \frac{N_{\text{married, church, coworker}}}{N_{\text{church, coworker}}} = 0.9013"
              description="Conditional probability for church and coworker meetings"
            />

            <Typography variant="body1" component="div">
              <strong>Bayesian Posterior Probability:</strong> After incorporating church-related evidence into the Bayesian model:
            </Typography>

            <Formula
              math="P(\text{married} \mid \text{church, coworker}) = \frac{P(\text{church} \mid \text{married, coworker}) \cdot P(\text{married} \mid \text{coworker})}{P(\text{church})} = 0.9013"
              description="Bayesian posterior probability including church evidence"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <Typography variant="h5" gutterBottom>
              Adding Age Evidence (20-30 Range)
            </Typography>

            <Typography variant="body1" component="div">
              <strong>Conditional Probability (Data-derived):</strong> When we add the age factor (20-30 range) to our previous conditions:
            </Typography>

            <Formula
              math="P(\text{married} \mid \text{20-30, church, coworker}) = \frac{N_{\text{married, 20-30, church, coworker}}}{N_{\text{20-30, church, coworker}}} = 0.9287"
              description="Conditional probability including age range"
            />

            <Typography variant="body1" component="div">
              <strong>Bayesian Posterior Probability:</strong> The final Bayesian probability after incorporating all evidence:
            </Typography>

            <Formula
              math="P(\text{married} \mid \text{20-30, church, coworker}) = \frac{P(\text{20-30} \mid \text{married, church, coworker}) \cdot P(\text{married} \mid \text{church, coworker})}{P(\text{20-30})} = 0.9287"
              description="Final Bayesian posterior probability"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <Typography variant="h5" gutterBottom>
              Analysis of Results
            </Typography>

            <Typography variant="body1" paragraph>
              Starting with a baseline prior probability of 0.6491, we see that specific factors significantly increase the likelihood of marriage:
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7, duration: 0.8 }}
              >
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.9, duration: 0.8 }}
                >
                  Meeting through coworkers raises the probability to 0.7399
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.1, duration: 0.8 }}
                >
                  Adding church meeting evidence increases it further to 0.9013
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.3, duration: 0.8 }}
                >
                  When we consider the age range of 20-30, the probability reaches 0.9287
                </motion.li>
              </motion.ul>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            <Typography variant="body1">
              This analysis demonstrates how each additional piece of evidence strengthens our prediction of marriage probability, with the combination of workplace connection, religious community, and age compatibility being particularly strong indicators. The high final probability aligns well with my parents' actual outcome.
            </Typography>

            <Box sx={{ mt: 4, bgcolor: '#f5f5f5', p: 3, borderRadius: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Analysis based on <a href="https://data.stanford.edu/hcmst" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>HCMST dataset</a> (2017-2022). Probabilities calculated using Bayesian inference and conditional probability methods.
              </Typography>
            </Box>
          </motion.div>
        </motion.div>
      </Paper>
    </Container>
  );
}

export default BayesianAnalysis;
