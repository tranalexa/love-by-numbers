import React from 'react';
import { Typography, Paper, Container } from '@mui/material';
// import katex from 'katex';
import 'katex/dist/katex.min.css';
import { motion } from 'framer-motion';
import './BayesianAnalysis.css';
import { Formula, SmallFormula } from '../MathContent';
import WeddingShoot from '../../assets/images/Wedding shoot.jpeg';

// function CustomFormula({ math, description }) {
//   const formulaRef = React.useRef();

//   React.useEffect(() => {
//     katex.render(math, formulaRef.current, {
//       throwOnError: false,
//       displayMode: true,
//     });
//   }, [math]);

//   return (
//     <div>
//       <div ref={formulaRef} className="small-formula" />
//       <Typography variant="body2" className="caption">
//         {description}
//       </Typography>
//     </div>
//   );
// }

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
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', marginTop: '40px' }}
          >
            <img src={WeddingShoot} alt="Wedding Shoot" style={{ width: '60%', height: 'auto', objectFit: 'cover', borderRadius: '12px' }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Typography variant="body2" display="block" align="center" gutterBottom sx={{ marginBottom: '30px' }}>
              My parents' wedding photoshoot at the Palace of Fine Arts in San Francisco
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Typography variant="body1" paragraph>
              To analyze the factors influencing eventual marriage in a relationship, I computed both conditional probabilities and Bayesian posterior probabilities based on the available data regarding age when couples met, church attendance, coworker introductions, and marital status. These two approaches provide insights into the probability of marriage under different conditions and how that might relate to my parents ending up married.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
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
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Typography variant="h5" gutterBottom>
              Meeting Through Coworkers
            </Typography>

            <Typography variant="body1" component="div">
              <strong>Conditional Probability (Data-derived):</strong> Based on the data, the probability of marriage given that the couple met through a coworker is 0.7399:
            </Typography>

            <Formula
              math="P(\text{married} \mid \text{coworker}) = \frac{N_{\text{married, coworker}}}{N_{\text{coworker}}} = 0.7399"
              description="Conditional probability for coworker meetings"
            />

            <Typography variant="body1" component="div">
              <strong>Bayesian Posterior Probability:</strong> The Bayesian update after considering the coworker evidence:
            </Typography>

            <Formula
              math="P(\text{married} \mid \text{coworker}) = \frac{P(\text{coworker} \mid \text{married}) \cdot P(\text{married})}{P(\text{coworker})} = 0.7561"
              description="Bayesian posterior probability for coworker evidence"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <Typography variant="h5" gutterBottom>
              Adding Church Meeting Evidence
            </Typography>

            <Typography variant="body1" component="div">
              <strong>Conditional Probability (Data-derived):</strong> When we consider both church and coworker meetings, the marriage probability increases to 0.8889:
            </Typography>

            <Formula
              math="P(\text{married} \mid \text{church, coworker}) = \frac{N_{\text{married, church, coworker}}}{N_{\text{church, coworker}}} = 0.8889"
              description="Conditional probability for church and coworker meetings"
            />

            <Typography variant="body1" component="div">
              <strong>Bayesian Posterior Probability:</strong> After incorporating church-related evidence into the Bayesian model:
            </Typography>

            <SmallFormula
              math="P(\text{married} \mid \text{church, coworker}) = \frac{P(\text{church} \mid \text{married, coworker}) \cdot P(\text{married} \mid \text{coworker})}{P(\text{church})} = 0.9013"
              description="Bayesian posterior probability including church evidence"
              sx={{ fontSize: '0.75em' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <Typography variant="h5" gutterBottom>
              Adding Age Evidence (20-30 Range)
            </Typography>

            <Typography variant="body1" component="div">
              <strong>Conditional Probability (Data-derived):</strong> When we add the age factor (20-30 range) to our previous conditions, the conditional probability of marriage becomes 1.0.
            </Typography>

            <Formula
              math="P(\text{married} \mid \text{20-30, church, coworker}) = \frac{N_{\text{married, 20-30, church, coworker}}}{N_{\text{20-30, church, coworker}}} = 1.0"
              description="Conditional probability including age range"
            />

            <Typography variant="body1" component="div">
              <strong>Bayesian Posterior Probability:</strong> The final Bayesian probability after incorporating all evidence:
            </Typography>

            <SmallFormula
              math="P(\text{married} \mid \text{20-30, church, coworker}) = \frac{P(\text{20-30} \mid \text{married, church, coworker}) \cdot P(\text{married} \mid \text{church, coworker})}{P(\text{20-30})} = 0.9287"
              description="Final Bayesian posterior probability"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.8 }}
          >
            <Typography variant="h5" gutterBottom>
              Analysis of Results
            </Typography>

            <Typography variant="body1" paragraph>
              Starting with a baseline prior probability of 0.6491, we see that specific factors significantly increase the likelihood of marriage:
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.3, duration: 0.8 }}
              >
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.5, duration: 0.8 }}
                >
                  Meeting through coworkers raises the probability to 0.7561
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.7, duration: 0.8 }}
                >
                  Adding church meeting evidence increases it further to 0.9013
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.9, duration: 0.8 }}
                >
                  When we consider the age range of 20-30, the probability reaches 0.9287
                </motion.li>
              </motion.ul>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.1, duration: 0.8 }}
          >
            <Typography variant="body1">
              This analysis demonstrates how each additional piece of evidence strengthens our prediction of marriage probability, 
              with the combination of workplace connection, religious community, and age compatibility being particularly strong indicators. 
              The Bayesian updates aligned closely with the calculated 
              conditional probabilities in the dataset, supporting the outcome of my parents' relationship and the fact that they ended up getting married.
            </Typography>
           </motion.div>
        </motion.div>
      </Paper>
    </Container>
  );
}

export default BayesianAnalysis;
