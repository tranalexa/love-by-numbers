import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Home() {
  return (
    <Box sx={{ flexGrow: 1, py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper elevation={0} sx={{ p: 4, textAlign: 'center', bgcolor: 'transparent' }}>
              <FavoriteIcon sx={{ fontSize: 60, color: 'secondary.main', mb: 2 }} />
              <Typography variant="h1" component="h1" gutterBottom>
                Love by the Numbers
              </Typography>
              <Typography variant="h5" color="text.secondary" paragraph>
                A Statistical Journey Through My Parents' Love Story
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h2" gutterBottom>
                Introduction
              </Typography>
              <Typography variant="body1" paragraph>
                It all began when a Navy doctor, working with my dad, came up with a clever plan: 
                he'd introduce my dad to my mom—a pageant queen—if my dad agreed to set him up 
                with a cousin in San Francisco. My dad, amused and curious, agreed, unknowingly 
                setting the stage for a meeting that would change their lives.
              </Typography>
              <Typography variant="body1" paragraph>
                Through this project, I'm exploring the improbable nature of their meeting through 
                the lens of data science and probability theory. From analyzing meeting places to 
                applying complex statistical models, this analysis reveals the beautiful 
                improbability of their love story.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h2" gutterBottom>
                The Analysis
              </Typography>
              <Typography variant="body1" paragraph>
                This project combines statistical analysis with personal narrative, using real data 
                and probability theory to explore how two people find each other. Through various 
                statistical methods including Bayesian analysis, the Central Limit Theorem, and 
                logistic regression, we uncover the mathematical poetry behind their love story.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
