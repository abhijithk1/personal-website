import React from 'react';
import { 
  Typography, 
  Grid, 
  Paper, 
  Box, 
  LinearProgress, 
  Chip 
} from '@mui/material';

const Skills = () => {
  const technicalSkills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'TypeScript', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'SQL', level: 75 },
    { name: 'Git', level: 85 },
  ];

  const frameworks = [
    'React', 'Redux', 'Express.js', 'Next.js', 'Material UI', 'Bootstrap', 
    'Tailwind CSS', 'Jest', 'React Testing Library'
  ];

  const tools = [
    'VS Code', 'Git', 'GitHub', 'GitLab', 'Docker', 'Webpack', 'npm', 'Jira', 
    'Figma', 'Adobe XD', 'Postman'
  ];

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Skills & Technologies
      </Typography>
      <Typography variant="subtitle1" paragraph align="center" sx={{ mb: 4 }}>
        My technical expertise and proficiency levels
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Technical Skills
            </Typography>
            {technicalSkills.map((skill) => (
              <Box key={skill.name} sx={{ mt: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body1">{skill.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {skill.level}%
                  </Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={skill.level} 
                  sx={{ height: 8, borderRadius: 5, mt: 1 }} 
                />
              </Box>
            ))}
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container spacing={4} direction="column">
            <Grid item>
              <Paper elevation={3} sx={{ p: { xs: 3, md: 4 } }}>
                <Typography variant="h5" gutterBottom>
                  Frameworks & Libraries
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {frameworks.map((framework) => (
                    <Chip 
                      key={framework} 
                      label={framework} 
                      color="primary" 
                      variant="outlined" 
                      sx={{ m: 0.5 }} 
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
            <Grid item>
              <Paper elevation={3} sx={{ p: { xs: 3, md: 4 } }}>
                <Typography variant="h5" gutterBottom>
                  Tools & Platforms
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {tools.map((tool) => (
                    <Chip 
                      key={tool} 
                      label={tool} 
                      color="secondary" 
                      variant="outlined" 
                      sx={{ m: 0.5 }} 
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Skills;

// Made with Bob
