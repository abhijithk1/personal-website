import React from 'react';
import { 
  Typography, 
  Paper
} from '@mui/material';
import { 
  Timeline, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineConnector, 
  TimelineContent, 
  TimelineDot, 
  TimelineOppositeContent 
} from '@mui/lab';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Software Developer',
      company: 'IBM India Software Labs',
      period: 'Jul 2022 - Present',
      description: 'Developed and maintained backend applications using Golang. Developed and maintained AI agentic application and tools using Python. Collaborated with multiple teams across the globe to improve the quality and bring innovative ideas into features.',
      type: 'work'
    },
    {
      id: 2,
      title: 'Software Developer Intern',
      company: 'IBM India Software Labs',
      period: 'Jan 2022 - Jul 2022',
      description: 'Assisted in developing web applications using Golang and React. Participated in code reviews and testing.',
      type: 'work'
    },
    {
      id: 3,
      title: 'Bachelor of Technology in Electronics & Communication with Honours',
      company: 'Kerala Technological University',
      period: '2018 - 2022',
      description: 'Focused on problem solving, electronics and communication engineering, and software development.',
      type: 'education'
    }
  ];

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Experience
      </Typography>
      <Typography variant="subtitle1" paragraph align="center" sx={{ mb: 4 }}>
        My professional journey and education
      </Typography>

      <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, borderRadius: 2 }}>
        <Timeline position="alternate">
          {experiences.map((exp) => (
            <TimelineItem key={exp.id}>
              <TimelineOppositeContent color="text.secondary">
                {exp.period}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color={exp.type === 'work' ? 'primary' : 'secondary'}>
                  {exp.type === 'work' ? <WorkIcon /> : <SchoolIcon />}
                </TimelineDot>
                {exp.id !== experiences.length && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={2} sx={{ p: 2 }}>
                  <Typography variant="h6" component="h3">
                    {exp.title}
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    {exp.company}
                  </Typography>
                  <Typography variant="body2">
                    {exp.description}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Paper>
    </>
  );
};

export default Experience;

// Made with Bob
