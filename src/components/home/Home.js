import React from 'react';
import { 
  Typography, 
  Box, 
  Grid, 
  Avatar, 
  Button, 
  Paper 
} from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, borderRadius: 2, mb: 6 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar
              alt="Your Name"
              src="/profile-placeholder.jpg"
              sx={{ width: 200, height: 200 }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h3" component="h1" gutterBottom>
              Hello, I'm Abhijith K
            </Typography>
            <Typography variant="h5" color="textSecondary" paragraph>
              Software Developer
            </Typography>
            <Typography variant="body1" paragraph>
              I am a passionate software developer with expertise in building modern web applications and AI agentic applications.
              I specialize in backend development with Golang, Python and experience in frontend development with React JS.
              I also specialise in containerisation and orchestraction with Docker and Kubernetes.
              I am certified AWS Cloud Practitoner have a strong understanding of cloud computing and have experience working with AWS Cloud Platform.
              I am also familiar with CI/CD pipelines and have experience with tools like Jenkins.
              I have a passion for building scalable, reliable, and secure software systems and am always looking to learn new technologies and improve my skills.
              I love creating elegant, efficient, and user-friendly solutions to complex problems and incorporate AI functionalities and features to enhance it's capabilities.
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Button 
                variant="contained" 
                color="primary" 
                component={Link} 
                to="/projects" 
                sx={{ mr: 2, mb: 2 }}
              >
                View My Projects
              </Button>
              <Button 
                variant="outlined" 
                color="primary" 
                component={Link} 
                to="/contact"
                sx={{ mb: 2 }}
              >
                Contact Me
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 6, mb: 3 }}>
        What I Do
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              AI Agentic Development
            </Typography>
            <Typography variant="body2">
              Creating responsive AI agents and it's tools using Python and newer AI technologies like MCP etc.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Backend Development
            </Typography>
            <Typography variant="body2">
              Building robust backend applications with Golang, Python and various databases like PostgreSQL.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Full Stack Solutions
            </Typography>
            <Typography variant="body2">
              Developing end-to-end applications that combine powerful backends with intuitive frontends.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

// Made with Bob
