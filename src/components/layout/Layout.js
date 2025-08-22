import React from 'react';
import { Box, CssBaseline, Container } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Navbar />
      <Container 
        component="main" 
        maxWidth="lg" 
        sx={{ 
          mt: 6, 
          mb: 6, 
          flex: 1,
          px: { xs: 2, sm: 3, md: 4 }
        }}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;

// Made with Bob
