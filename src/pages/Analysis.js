import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Placeholder data - replace with actual data when available
const meetingPlacesData = [
  { name: 'Church', probability: 5.83 },
  { name: 'College', probability: 7.80 },
  { name: 'Bar/Restaurant', probability: 19.79 },
  { name: 'Party', probability: 9.68 },
  { name: 'Public Spaces', probability: 3.95 },
  { name: 'Blind Date', probability: 3.00 },
];

function Analysis() {
  return (
    <Box sx={{ flexGrow: 1, py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h2" gutterBottom>
                Meeting Places Analysis
              </Typography>
              <Typography variant="body1" paragraph>
                The data shows interesting patterns in where couples typically meet. While bars and 
                restaurants dominate as meeting places, the story of my parents meeting at church 
                represents a more unique path.
              </Typography>
              <Box sx={{ height: 400, mt: 4 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={meetingPlacesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis label={{ value: 'Probability (%)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Bar dataKey="probability" fill="#e74c3c" />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h2" gutterBottom>
                Church to Marriage Probability
              </Typography>
              <Typography variant="body1" paragraph>
                The data reveals that couples who meet at church have a significantly higher 
                probability of marriage (83.33%) compared to couples who meet elsewhere (63.81%). 
                This statistical insight adds another layer to understanding my parents' journey.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Analysis;
