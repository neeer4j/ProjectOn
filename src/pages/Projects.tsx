import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Stack,
  Chip,
  Grid,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Launch as LaunchIcon } from '@mui/icons-material';
import { useTheme } from '../context/ThemeContext';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

export default function Projects() {
  const { isDarkMode } = useTheme();
  
  const projects: Project[] = [
    {
      title: "MindEase",
      subtitle: "Mental Health & Wellness Platform",
      description: "A comprehensive mental health platform offering meditation guides, mood tracking, and personalized support for mental wellbeing. Features include daily mindfulness exercises, progress tracking, and expert-curated content for emotional wellness.",
      image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=2064",
      technologies: ["React", "Firebase", "Material UI", "TypeScript", "Node.js"],
      link: "https://mindease-dbed7.web.app/"
    },
    {
      title: "CodeYatra",
      subtitle: "Interactive Learning Platform",
      description: "A dynamic coding education platform designed to make learning programming accessible and engaging. Features interactive tutorials, coding challenges, and a comprehensive learning path for aspiring developers.",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074",
      technologies: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Node.js"],
      link: "https://codeyatra-iota.vercel.app/"
    }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: theme => isDarkMode ? '#0F172A' : '#F8FAFC',
      color: theme => isDarkMode ? 'white' : '#1E293B'
    }}>
      <Container maxWidth={false} sx={{ py: { xs: 4, md: 8 } }}>
        <Box textAlign="center" mb={8}>
          <Typography 
            variant="h2" 
            gutterBottom 
            sx={{ 
              color: theme => isDarkMode ? 'white' : '#1E293B',
              fontWeight: 700,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
              px: { xs: 2, md: 0 }
            }}
          >
            Featured Projects
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: theme => isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(15, 23, 42, 0.8)',
              maxWidth: '800px',
              mx: 'auto',
              mb: 6,
              fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
              px: { xs: 2, md: 0 }
            }}
          >
            Discover our latest work and innovative solutions
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, md: 4 }}>
          {projects.map((project, index) => (
            <Grid item xs={12} key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card
                  sx={{
                    maxWidth: '100%',
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: theme => isDarkMode 
                      ? '0 10px 30px rgba(0,0,0,0.2)'
                      : '0 10px 30px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease-in-out',
                    background: theme => isDarkMode 
                      ? 'rgba(30, 41, 59, 0.5)'
                      : 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(8px)',
                    border: theme => `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(15, 23, 42, 0.1)'}`,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      '& .project-image': {
                        transform: 'scale(1.05)'
                      }
                    }
                  }}
                >
                  <Box sx={{ position: 'relative', height: { xs: 200, sm: 250, md: 300 }, overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      image={project.image}
                      alt={`${project.title} Project`}
                      className="project-image"
                      sx={{
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        p: { xs: 2, sm: 3 }
                      }}
                    >
                      <Typography 
                        variant="h4" 
                        sx={{ 
                          color: 'white', 
                          fontWeight: 700, 
                          mb: 1,
                          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.25rem' }
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography 
                        variant="subtitle1" 
                        sx={{ 
                          color: 'rgba(255,255,255,0.9)',
                          fontSize: { xs: '1rem', sm: '1.1rem' }
                        }}
                      >
                        {project.subtitle}
                      </Typography>
                    </Box>
                  </Box>

                  <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        mb: 3, 
                        color: theme => isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(15, 23, 42, 0.8)',
                        lineHeight: 1.7,
                        fontSize: { xs: '0.9rem', sm: '1rem' }
                      }}
                    >
                      {project.description}
                    </Typography>

                    <Stack 
                      direction="row" 
                      spacing={1} 
                      flexWrap="wrap" 
                      sx={{ 
                        mb: 4,
                        gap: { xs: 0.5, sm: 1 }
                      }}
                    >
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          sx={{
                            m: 0.5,
                            background: theme => isDarkMode 
                              ? 'rgba(99, 102, 241, 0.15)'
                              : 'rgba(99, 102, 241, 0.1)',
                            color: '#6366F1',
                            fontWeight: 500,
                            fontSize: { xs: '0.75rem', sm: '0.875rem' },
                            height: { xs: 24, sm: 32 },
                            '&:hover': {
                              background: 'rgba(99, 102, 241, 0.2)',
                            }
                          }}
                        />
                      ))}
                    </Stack>

                    <Stack 
                      direction="row" 
                      spacing={2}
                      sx={{
                        borderTop: '1px solid',
                        borderColor: theme => isDarkMode 
                          ? 'rgba(255, 255, 255, 0.1)'
                          : 'rgba(15, 23, 42, 0.1)',
                        pt: { xs: 2, sm: 3 }
                      }}
                    >
                      <Button
                        variant="contained"
                        endIcon={<LaunchIcon />}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          py: { xs: 1, sm: 1.5 },
                          px: { xs: 3, sm: 4 },
                          fontSize: { xs: '0.875rem', sm: '1rem' },
                          background: 'linear-gradient(45deg, #6366F1 30%, #EC4899 90%)',
                          boxShadow: '0 4px 14px 0 rgba(99, 102, 241, 0.4)',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #4F46E5 30%, #DB2777 90%)',
                            boxShadow: '0 6px 20px 0 rgba(99, 102, 241, 0.6)',
                          }
                        }}
                      >
                        Visit Project
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}