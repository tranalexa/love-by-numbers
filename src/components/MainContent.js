import React from 'react';
import { Container, Typography, Box, Paper, Grid, Link } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Cell, PieChart, Pie, Label } from 'recharts';
import { Formula, smallFormula,InlineFormula, DistributionPlot, StatisticalNote } from './MathContent';
import ageData from '../processed_data.json';
import { AnimatePresence, motion } from 'framer-motion';

const meetingPlacesData = [
  { name: 'Church', probability: 5.83 },
  { name: 'College', probability: 7.80 },
  { name: 'Bar/Restaurant', probability: 19.79 },
  { name: 'Party', probability: 9.68 },
  { name: 'Public Spaces', probability: 3.95 },
  { name: 'Blind Date', probability: 3.00 },
];

const sampleMeansData = [
  { mean: 21.50, frequency: 1 },
  { mean: 21.86, frequency: 0 },
  { mean: 22.21, frequency: 0 },
  { mean: 22.57, frequency: 0 },
  { mean: 22.93, frequency: 4 },
  { mean: 23.29, frequency: 6 },
  { mean: 23.64, frequency: 21 },
  { mean: 24.00, frequency: 26 },
  { mean: 24.36, frequency: 34 },
  { mean: 24.71, frequency: 47 },
  { mean: 25.07, frequency: 75 },
  { mean: 25.43, frequency: 55 },
  { mean: 25.79, frequency: 74 },
  { mean: 26.14, frequency: 73 },
  { mean: 26.50, frequency: 82 },
  { mean: 26.86, frequency: 75 },
  { mean: 27.22, frequency: 87 },
  { mean: 27.57, frequency: 83 },
  { mean: 27.93, frequency: 70 },
  { mean: 28.29, frequency: 45 },
  { mean: 28.65, frequency: 39 },
  { mean: 29.00, frequency: 30 },
  { mean: 29.36, frequency: 23 },
  { mean: 29.72, frequency: 25 },
  { mean: 30.07, frequency: 8 },
  { mean: 30.43, frequency: 9 },
  { mean: 30.79, frequency: 2 },
  { mean: 31.15, frequency: 0 },
  { mean: 31.50, frequency: 5 },
  { mean: 31.86, frequency: 1 }
];

const Section = ({ id, children }) => (
  <section id={id} style={{ minHeight: '100vh', paddingTop: '80px', scrollMarginTop: '80px' }}>
    <Box sx={{ py: 8 }}>
      {children}
    </Box>
  </section>
);

const pageVariants = {
  initial: {
    opacity: 0,
    x: -20
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

function MainContent() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        style={{ flex: 1 }}
      >
        <Box sx={{ flexGrow: 1, bgcolor: 'background.default' }}>
          <Container maxWidth="lg">
            {/* Title Cover Section */}
            <Box
              sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#2B2D42',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
                pb: 8,
                pt: 8,
              }}
            >
              <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontFamily: 'Fraunces, serif',
                      fontSize: { xs: '3rem', md: '5rem' },
                      mb: 3,
                      background: 'linear-gradient(45deg, #FF4D6D 30%, #FF8FA3 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 700,
                    }}
                  >
                    Love by the Numbers
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: { xs: '1.2rem', md: '1.5rem' },
                      mb: 4,
                      color: '#FF8FA3',
                      maxWidth: '800px',
                      mx: 'auto',
                    }}
                  >
                    A Statistical Journey Through My Parents' Love Story
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 2,
                      mb: 4,
                    }}
                  >
                    <FavoriteIcon sx={{ color: '#FF4D6D', fontSize: '2rem' }} />
                    <FavoriteIcon sx={{ color: '#FF4D6D', fontSize: '2rem' }} />
                  </Box>
                </Box>
              </Container>
              {/* Background decoration */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'radial-gradient(circle at 20% 20%, rgba(255, 77, 109, 0.05) 0%, rgba(43, 45, 66, 0) 70%)',
                  zIndex: 1,
                }}
              />
            </Box>

            {/* Rest of the content */}
            <Section id="introduction">
              <Paper sx={{ p: 6 }}>
                <Typography variant="h2" sx={{ 
                  fontFamily: 'Fraunces, serif',
                  color: '#2B2D42'
                }}>
                  A Statistical Love Story
                </Typography>

                <Box sx={{ 
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr' },
                  gap: 6,
                  mb: 6
                }}>
                  <Box>
                    <Typography variant="body1" paragraph>
                      It all began when a Navy doctor, working with my dad, came up with a clever plan: he'd introduce my dad to my mom—a pageant queen—if my dad agreed to set him up with a cousin in San Francisco. My dad, amused and curious, agreed, unknowingly setting the stage for a meeting that would change their lives.
                    </Typography>

                    <Typography variant="body1" paragraph>
                      The doctor, aware my mom attended a Vietnamese church in San Leandro, decided this would be the perfect spot for their first meeting. But on that day, my mom wasn't there—she'd gone to an amusement park. Instead, my dad met my grandparents, who welcomed him warmly. Through the connection at church, my dad was later introduced to my mom via a group date, and the rest, as they say, is history.
                    </Typography>

                    <Typography variant="body1" paragraph>
                      Their story is full of twists and chance encounters, which led me to question: what are the odds that two people, living separate lives, would come together in this way? This question drives my CS109 Challenge project, where I'm analyzing the probabilities behind different aspects of their meeting. Through this project, I'm not just quantifying their story, but also reflecting on how chance, choice, and context shape the connections that bring people together.
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Section>

            <Section id="meeting-places">
              <Paper elevation={3} sx={{ p: 6, mb: 8, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h2" gutterBottom>
                  Meeting Place Analysis
                </Typography>

                <Box sx={{ mb: 4 }}>
                  <Formula 
                    math="P(\text{Location}) = \frac{\text{Number of couples who met at location}}{\text{Total number of couples}}"
                    description="Basic probability calculation for meeting locations"
                  />
                </Box>

                <Grid container spacing={4} sx={{ mb: 6 }}>
                  <Grid item xs={12} md={6}>
                    <ResponsiveContainer width="100%" height={400}>
                      <BarChart
                        data={meetingPlacesData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 50
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis 
                          dataKey="name" 
                          angle={-45}
                          textAnchor="end"
                          height={60}
                          interval={0}
                        />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="probability" fill="#FF758F">
                          {meetingPlacesData.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`}
                              fill={entry.name === 'Church' ? '#FF4D6D' : '#FF758F'}
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <StatisticalNote>
                      Meeting at church (5.83%) is significantly less common than at bars/restaurants (19.79%) or through school (10.86%). This makes my parents' story particularly special—they found each other in a statistically rare venue.
                    </StatisticalNote>
                  </Grid>
                </Grid>
              </Paper>
            </Section>

            <Section id="clt">
              <Paper elevation={3} sx={{ p: 6, mb: 8, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h2" gutterBottom>
                  The Central Limit Theorem at Work
                </Typography>

                <Typography variant="body1" paragraph>
                  Let's see how the Central Limit Theorem reveals patterns in meeting ages. When we take repeated samples from our data, the means of these samples form a normal distribution - a key insight from the CLT:
                </Typography>

                <Box sx={{ height: 400, my: 4 }}>
                  <Typography variant="h6" gutterBottom align="center">
                    Distribution of Sample Means (Central Limit Theorem)
                  </Typography>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={ageData.cltDistribution}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="mean" 
                        label={{ 
                          value: 'Sample Mean Age', 
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
                        labelFormatter={(label) => `Mean Age: ${Number(label).toFixed(1)}`}
                      />
                      <Bar dataKey="frequency" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </Box>

                <Typography variant="body1" paragraph>
                  The data shows that the average meeting age is 24.3 years (σ = 11.8). My mom was 20 when she met my dad, placing her in the 28.7th percentile - somewhat earlier than typical, but not unusually so.
                </Typography>

                <Box sx={{ height: 400, my: 4 }}>
                  <Typography variant="h6" gutterBottom align="center">
                    Ages When People Met
                  </Typography>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={ageData.ageDistribution}>
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
                  </ResponsiveContainer>
                </Box>

                <Typography variant="body1" paragraph>
                  The original distribution of ages is right-skewed, showing that younger couples are more common in the dataset. Most couples meet in their early 20s, with fewer meetings happening later in life.
                </Typography>

                <Typography variant="h5" gutterBottom>
                  What This Means for My Parents
                </Typography>

                <Typography variant="body1" paragraph>
                  My parents' story fits within these broader trends. Meeting at 20, my mom was on the younger side of the distribution, and their early connection reflects not only a young beginning but also a somewhat uncommon alignment of timing that underscores the uniqueness of their love story.
                </Typography>
              </Paper>
            </Section>

            <Section id="church-marriage">
              <Paper sx={{ p: 6 }}>
                <Typography variant="h2" gutterBottom>
                  Church to Marriage?
                </Typography>

                <Typography variant="body1" paragraph>
                  So it's already established that they had quite a rare meeting in church. Could this have played a role in the fact that they ended up getting married?
                </Typography>

                <Typography variant="body1" paragraph>
                  The calculated probabilities offer a clear picture of how meeting at church influences the likelihood of marriage. The probability of marriage given meeting at church is 83.33%. In contrast, the probability of marriage given not meeting at church is 63.81%, showing a significant drop in the likelihood of marriage when the couple did not meet in a church setting.
                </Typography>

                <Typography variant="body1" paragraph>
                  To put this into perspective mathematically, we're working with conditional probabilities. For the couples who met at church, we calculated:
                </Typography>

                <Box sx={{ mb: 4 }}>
                  <Formula 
                    math="P(\text{Marriage} \mid \text{Met at Church}) = \frac{P(\text{Marriage and Met at Church})}{P(\text{Met at Church})} = 0.833"
                    description="Probability of marriage given meeting at church"
                  />
                </Box>

                <Typography variant="body1" paragraph>
                  For those who did not meet at church, the calculation is:
                </Typography>

                <Box sx={{ mb: 4 }}>
                  <Formula 
                    math="P(\text{Marriage} \mid \text{Did not meet at Church}) = \frac{P(\text{Marriage and Not Church})}{P(\text{Not Church})} = 0.638"
                    description="Probability of marriage given not meeting at church"
                  />
                </Box>

                <Typography variant="body1" paragraph>
                  Finally, the overall probability of marriage in the dataset, 64.91%, serves as a baseline, showing that meeting at church significantly raises the likelihood of marriage relative to the general population. These calculations suggest that the environment or context in which people meet can play a crucial role in the outcomes of their relationships.
                </Typography>

                <Grid container spacing={4} sx={{ my: 4 }}>
                  <Grid item xs={12} md={6}>
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
                  </Grid>
                  <Grid item xs={12} md={6}>
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
                              value="Other Venues"
                              position="center"
                              style={{ fontSize: '16px', fill: '#2B2D42' }}
                            />
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </Box>
                  </Grid>
                </Grid>

                <Typography variant="body1">
                  Relating this back to my parents' story, it's striking to think about how their relationship fits into this statistical framework. These numbers show that church meetings statistically lead to stronger, more enduring relationships. The fact that my parents are part of the 83.33% of couples who met at church and went on to marry is both reassuring and fascinating. It's almost as if their meeting at church wasn't just a random moment, but rather a statistically significant turning point.
                </Typography>
              </Paper>
            </Section>

            <Section id="meeting-age">
              <Paper sx={{ p: 6 }}>
                <Typography variant="h2" gutterBottom>
                  Meeting Age: Mean and Variance
                </Typography>
                <Typography variant="body1" paragraph>
                  The age distribution analysis uses the Central Limit Theorem to understand the typical age ranges for meeting significant others. Here's the mathematical framework:
                </Typography>

                <Formula 
                  math="\begin{aligned}
                    \mu &= \frac{1}{n}\sum_{i=1}^n x_i = 24.32 \\
                    \sigma^2 &= \frac{1}{n-1}\sum_{i=1}^n (x_i - \mu)^2 = 139.99 \\
                    \sigma &= \sqrt{139.99} = 11.83
                  \end{aligned}"
                  description="Sample mean and variance calculations for meeting age"
                />

                <Typography variant="body1" paragraph>
                  For my mom's age (20), we calculate the z-score:
                </Typography>

                <Formula 
                  math="z = \frac{x - \mu}{\sigma} = \frac{20 - 24.32}{11.83} = -0.562"
                  description="Z-score calculation showing how many standard deviations from the mean"
                />

                <Typography variant="body1" paragraph>
                  A z-score of -0.562 indicates that my mom's age when meeting my mom was about 0.562 standard deviations below the mean, placing her in the 28.7th percentile of the age distribution.
                </Typography>

                <Typography variant="body1">
                  This data offers fascinating context for my parents' story. Meeting at 20 years old placed them on the earlier side of the spectrum, and their early connection reflects not only a young beginning but also a somewhat uncommon alignment of timing that underscores the uniqueness of their love story.
                </Typography>
              </Paper>
            </Section>

            <Section id="bayesian">
              <Paper sx={{ p: 6 }}>
                <Typography variant="h2" gutterBottom>
                  Bayesian Reasoning in Marriage Probability
                </Typography>
                <Typography variant="body1" paragraph>
                  To analyze the factors influencing eventual marriage in a relationship, I computed both conditional probabilities and Bayesian posterior probabilities based on the available data regarding age when couples met, church attendance, coworker introductions, and marital status. These two approaches provide insights into the probability of marriage under different conditions and how that might relate to my parents ending up married.
                </Typography>

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

                <Typography variant="h5" gutterBottom>
                  Meeting Through Coworkers
                </Typography>

                <Typography variant="body1" component="div">
                  <strong>Conditional Probability (Data-derived):</strong> Based on the data, the probability of marriage given that the couple met as coworkers is 0.7399. This is calculated as:
                </Typography>

                <Formula
                  math="P(\text{married} \mid \text{coworker}) = \frac{N_{\text{married, coworker}}}{N_{\text{coworker}}} = 0.7399"
                  description="Conditional probability for coworker meetings"
                />

                <Typography variant="body1" component="div">
                  <strong>Bayesian Posterior Probability:</strong> The Bayesian update after considering the coworker evidence slightly increases the marriage probability to 0.7561. This is calculated using Bayes' Theorem:
                </Typography>

                <Formula
                  math="P(\text{married} \mid \text{coworker evidence}) = \frac{P(\text{coworker} \mid \text{married}) \cdot P(\text{married})}{P(\text{coworker})} = 0.7561"
                  description="Bayesian posterior probability for coworker evidence"
                />

                <Typography variant="h5" gutterBottom>
                  Meeting Through Church
                </Typography>

                <Typography variant="body1" component="div">
                  <strong>Conditional Probability (Data-derived):</strong> When the couple met through church, the marriage probability increases to 0.9013, which is quite high. This is calculated as:
                </Typography>

                <Formula
                  math="P(\text{married} \mid \text{met through church}) = \frac{N_{\text{married, church}}}{N_{\text{church}}} = 0.9013"
                  description="Conditional probability for church meetings"
                />

                <Typography variant="body1" component="div">
                  <strong>Bayesian Posterior Probability:</strong> After incorporating church-related evidence into the Bayesian model, the probability is updated using the previous Bayesian result as the prior:
                </Typography>

                <Formula
                  math="P(\text{married} \mid \text{coworker, church evidence}) = \frac{P(\text{church} \mid \text{married}) \cdot P(\text{married} \mid \text{coworker evidence})}{P(\text{church})} = 0.8889"
                  description="Bayesian posterior probability including church evidence"
                />

                <Typography variant="h5" gutterBottom>
                  Meeting in Their 20s
                </Typography>

                <Typography variant="body1" component="div">
                  <strong>Conditional Probability (Data-derived):</strong> When considering the age at which the couple met (in their 20s), the marriage probability reaches 0.9287. This is calculated as:
                </Typography>

                <Formula
                  math="P(\text{married} \mid \text{age between 20 and 30}) = \frac{N_{\text{married, age between 20 and 30}}}{N_{\text{age between 20 and 30}}} = 0.9287"
                  description="Conditional probability for age range"
                />

                <Typography variant="body1" component="div">
                  <strong>Bayesian Posterior Probability:</strong> The Bayesian model shows a final updated probability of 1.0, reflecting a very high likelihood of marriage. The previous posterior is updated as the prior for this step:
                </Typography>

                <Formula
                  math="P(\text{married} \mid \text{all evidence}) = \frac{P(\text{age between 20-30} \mid \text{married}) \cdot P(\text{married} \mid \text{coworker, church evidence})}{P(\text{age between 20-30})} = 1.0"
                  description="Final Bayesian posterior probability"
                />

                <Typography variant="h5" gutterBottom>
                  Analysis of Results
                </Typography>

                <Typography variant="body1" paragraph>
                  Starting with a baseline prior probability of 0.6491, we see that specific factors significantly increase the likelihood of marriage. The final Bayesian result of 1.0 suggests that meeting at a young age, through church, and in a professional setting strongly contributed to the success of my parents' relationship. Notably, the Bayesian predictions closely mirror the conditional probabilities calculated directly from the data.
                </Typography>

                <Typography variant="body1" paragraph>
                  This analysis demonstrates how Bayesian methods can refine predictions by integrating new information, providing a clearer picture of relationship dynamics.
                </Typography>
              </Paper>
            </Section>

            <Section id="regression">
              <Paper sx={{ p: 6, mb: 8 }}>
                <Typography variant="h2" gutterBottom>
                  Logistic Regression: Predicting Marriage
                </Typography>

                <Typography variant="body1" paragraph>
                  Can we predict if a couple will get married based on where they met and their age? Using logistic regression, I analyzed two key factors from the HCMST dataset: whether couples met at church (w1_q24_church) and their age when meeting (w1_age_when_met).
                </Typography>

                <Formula
                  math="\text{logit}(p) = \beta_0 + \beta_1(\text{met at church}) + \beta_2(\text{age when met})"
                  description="Logistic regression model"
                />

                <Typography variant="body1" paragraph>
                  After training on the dataset using gradient descent (1000 steps, learning rate 0.0001), the model revealed:
                </Typography>

                <Box sx={{ pl: 4, mb: 2 }}>
                  <Typography variant="body1" component="div">
                    • β₀ (intercept) = 0.6279: Base probability of marriage
                  </Typography>
                  <Typography variant="body1" component="div">
                    • β₁ (church meeting) = 0.9379: Strong positive effect on marriage odds
                  </Typography>
                  <Typography variant="body1" component="div">
                    • β₂ (age) = -0.5738: Negative effect with increasing age
                  </Typography>
                  <Typography variant="body1" component="div" sx={{ mt: 1 }}>
                    Model accuracy: 69.23%
                  </Typography>
                </Box>

                <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
                  What These Numbers Mean
                </Typography>

                <Typography variant="body1" paragraph>
                  The strong positive coefficient for church meetings (0.9379) suggests that couples who meet in religious settings have significantly higher marriage probabilities. This might be attributed to shared values and strong community support - factors that often contribute to relationship success.
                </Typography>

                <Typography variant="body1" paragraph>
                  Interestingly, the negative age coefficient (-0.5738) indicates that meeting later in life is associated with lower marriage likelihood. This could reflect that individuals meeting later might have established career paths or personal goals that make marriage less of a priority.
                </Typography>

                <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
                  Connecting to My Parents' Story
                </Typography>

                <Typography variant="body1" paragraph>
                  My parents' story aligns remarkably well with these findings. They met at church, which our model identifies as a strong positive indicator for marriage. My mom was also relatively young—around 20—when they met, which the model suggests is favorable for marriage probability. Their early relationship, built on shared values and family support, exemplifies how these statistical patterns play out in real life.
                </Typography>

                <Box sx={{ mt: 2, p: 2, bgcolor: '#f3f4f6', borderRadius: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Curious about the implementation? Check out the{' '}
                    <Link 
                      href="https://github.com/alexatran/love-by-numbers/blob/main/analysis/logistic_regression.py" 
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: '#2563eb', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                    >
                      complete logistic regression code
                    </Link>
                    {' '}on GitHub.
                  </Typography>
                </Box>
              </Paper>
            </Section>
          </Container>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
}

export default MainContent;
