import React, { useState } from 'react';
import { 
  Typography, 
  Grid, 
  Paper, 
  TextField, 
  Button, 
  Box, 
  Alert, 
  Snackbar, 
  Card, 
  CardContent, 
  Link 
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const contactInfo = [
    {
      icon: <EmailIcon fontSize="large" color="primary" />,
      title: 'Email',
      content: 'abhijith0807@gmail.com',
      link: 'mailto:abhijith0807@gmail.com'
    },
    {
      icon: <PhoneIcon fontSize="large" color="primary" />,
      title: 'Phone',
      content: '+91 9745932997',
      link: 'tel:+919745932997'
    },
    {
      icon: <LinkedInIcon fontSize="large" color="primary" />,
      title: 'LinkedIn',
      content: 'linkedin.com/in/abhijith-k-0807',
      link: 'https://linkedin.com/in/abhijith-k-0807/'
    },
    {
      icon: <GitHubIcon fontSize="large" color="primary" />,
      title: 'GitHub',
      content: 'github.com/abhijithk1',
      link: 'https://github.com/abhijithk1'
    },
    {
      icon: <LocationOnIcon fontSize="large" color="primary" />,
      title: 'Location',
      content: 'Kerala, India',
      link: null
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real application, you would send the form data to a server here
      console.log('Form submitted:', formData);
      
      // Show success message
      setSnackbar({
        open: true,
        message: 'Message sent successfully! I will get back to you soon.',
        severity: 'success'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      setSnackbar({
        open: true,
        message: 'Please fix the errors in the form.',
        severity: 'error'
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({
      ...snackbar,
      open: false
    });
  };

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Contact Me
      </Typography>
      <Typography variant="subtitle1" paragraph align="center" sx={{ mb: 4 }}>
        Get in touch for opportunities or just to say hello
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Contact Information
            </Typography>
            <Typography variant="body2" paragraph color="textSecondary">
              Feel free to reach out through any of these channels:
            </Typography>
            
            <Box sx={{ mt: 4 }}>
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  variant="outlined" 
                  sx={{ 
                    mb: 2,
                    transition: '0.3s',
                    '&:hover': {
                      boxShadow: 2
                    }
                  }}
                >
                  <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ mr: 2 }}>
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography variant="subtitle1">
                        {info.title}
                      </Typography>
                      {info.link ? (
                        <Link 
                          href={info.link} 
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          underline="hover"
                          color="primary"
                        >
                          {info.content}
                        </Link>
                      ) : (
                        <Typography variant="body2" color="textSecondary">
                          {info.content}
                        </Typography>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={7}>
          <Paper elevation={3} sx={{ p: { xs: 3, md: 4 } }}>
            <Typography variant="h5" gutterBottom>
              Send Me a Message
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    margin="normal"
                    error={!!errors.name}
                    helperText={errors.name}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                    error={!!errors.email}
                    helperText={errors.email}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    margin="normal"
                    error={!!errors.message}
                    helperText={errors.message}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{ mt: 2 }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity} 
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Contact;

// Made with Bob
