import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';

function About() {
  return (
    <Box sx={{ flexGrow: 1, py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h2" gutterBottom>
                About This Project
              </Typography>
              <Typography variant="body1" paragraph>
                This project is a unique blend of data science and storytelling, created as part of 
                my CS109 Challenge. It explores the beautiful improbability of my parents' love 
                story through the lens of statistical analysis and probability theory.
              </Typography>
              <Typography variant="body1" paragraph>
                Using real data and sophisticated statistical methods, I've analyzed various aspects 
                of how couples meet and form lasting relationships. The project includes analyses of 
                meeting places, age distributions, and marriage probabilities, all while weaving in 
                the personal narrative of my parents' journey.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h2" gutterBottom>
                Disclaimer
              </Typography>
              <Typography variant="body1" paragraph>
                This project creatively combines statistical analysis with personal narrative, using 
                real data and probability theory to explore the improbability of two people finding 
                each other. While based on actual data, the analysis involves subjective 
                interpretation and simplified calculations for clarity.
              </Typography>
              <Typography variant="body1" paragraph>
                Limitations such as small sample sizes and potential survey biases may affect 
                accuracy, so conclusions should be viewed as insightful rather than definitive. The 
                aim is not to reduce love to numbers but to celebrate its beautiful improbability.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
