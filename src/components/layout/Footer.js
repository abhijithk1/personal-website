import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} My Portfolio
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
          <IconButton color="primary" aria-label="GitHub" component={Link} href="https://github.com/abhijithk1" target="_blank">
            <GitHubIcon />
          </IconButton>
          <IconButton color="primary" aria-label="LinkedIn" component={Link} href="https://linkedin.com/in/abhijith-k-0807/" target="_blank">
            <LinkedInIcon />
          </IconButton>
          <IconButton color="primary" aria-label="Email" component={Link} href="mailto:abhijith0807@gmail.com">
            <EmailIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

// Made with Bob
