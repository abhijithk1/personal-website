import React from 'react';
import { 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  CardActions, 
  Button, 
  Chip, 
  Box 
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with product listings, shopping cart, user authentication, and payment processing.',
      image: '/project-placeholder-1.jpg',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
      githubUrl: 'https://github.com/abhijithk1/ecommerce-platform',
      liveUrl: 'https://ecommerce-platform-demo.netlify.app'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A task management application with drag-and-drop functionality, task categorization, and user collaboration features.',
      image: '/project-placeholder-2.jpg',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material UI'],
      githubUrl: 'https://github.com/abhijithk1/task-management-app',
      liveUrl: 'https://task-management-demo.netlify.app'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current weather conditions and forecasts for multiple locations using a weather API.',
      image: '/project-placeholder-3.jpg',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Weather API'],
      githubUrl: 'https://github.com/abhijithk1/weather-dashboard',
      liveUrl: 'https://weather-dashboard-demo.netlify.app'
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'A blog platform with content management system, user authentication, and commenting functionality.',
      image: '/project-placeholder-4.jpg',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      githubUrl: 'https://github.com/abhijithk1/blog-platform',
      liveUrl: 'https://blog-platform-demo.vercel.app'
    },
    {
      id: 5,
      title: 'Recipe Finder',
      description: 'A recipe finder application that allows users to search for recipes based on ingredients, dietary restrictions, and meal types.',
      image: '/project-placeholder-5.jpg',
      technologies: ['React', 'Redux', 'Food API', 'CSS Modules'],
      githubUrl: 'https://github.com/abhijithk1/recipe-finder',
      liveUrl: 'https://recipe-finder-demo.netlify.app'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects, skills, and experience.',
      image: '/project-placeholder-6.jpg',
      technologies: ['React', 'Material UI', 'React Router'],
      githubUrl: 'https://github.com/abhijithk1/portfolio-website',
      liveUrl: '#'
    }
  ];

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Projects
      </Typography>
      <Typography variant="subtitle1" paragraph align="center" sx={{ mb: 4 }}>
        A collection of my recent work and personal projects
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6
                }
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
                sx={{ backgroundColor: 'grey.300' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
                  {project.technologies.map((tech) => (
                    <Chip 
                      key={tech} 
                      label={tech} 
                      size="small" 
                      variant="outlined" 
                      color="primary"
                    />
                  ))}
                </Box>
              </CardContent>
              <CardActions>
                <Button 
                  size="small" 
                  startIcon={<GitHubIcon />}
                  href={project.githubUrl}
                  target="_blank"
                >
                  GitHub
                </Button>
                <Button 
                  size="small" 
                  startIcon={<LaunchIcon />}
                  href={project.liveUrl}
                  target="_blank"
                  disabled={project.liveUrl === '#'}
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Projects;

// Made with Bob
