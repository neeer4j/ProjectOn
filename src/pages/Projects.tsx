import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  IconButton,
  Button,
  Stack,
  Container,
} from '@mui/material';
import { GitHub as GitHubIcon, Link as LinkIcon } from '@mui/icons-material';

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Algorithm Visualizer',
      description: 'Interactive tool for visualizing sorting and pathfinding algorithms',
      technologies: ['React', 'TypeScript', 'D3.js'],
      category: 'Algorithms',
      difficulty: 'Intermediate',
      githubLink: 'https://github.com/example/algo-viz',
    },
    {
      id: 2,
      name: 'Database Manager',
      description: 'A GUI application for managing SQL databases with query visualization',
      technologies: ['React', 'Node.js', 'SQLite'],
      category: 'Databases',
      difficulty: 'Advanced',
      githubLink: 'https://github.com/example/db-manager',
    },
    {
      id: 3,
      name: 'Compiler Design',
      description: 'Simple compiler implementation for a custom programming language',
      technologies: ['Python', 'LLVM'],
      category: 'Systems',
      difficulty: 'Advanced',
      githubLink: 'https://github.com/example/mini-compiler',
    },
  ];

  return (
    <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
      <Box sx={{ py: 4 }}>
        <Stack 
          direction="row" 
          justifyContent="space-between" 
          alignItems="center" 
          mb={4}
          sx={{
            background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
            p: 3,
            borderRadius: 2,
            color: 'white'
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 600 }}>CS Projects</Typography>
          <Button 
            variant="contained"
            color="secondary"
            sx={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.2)',
              }
            }}
          >
            Add New Project
          </Button>
        </Stack>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} key={project.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px -8px rgba(99, 102, 241, 0.25)',
                    '& .project-tech': {
                      borderColor: 'primary.main',
                    }
                  }
                }}
                elevation={0}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                    {project.name}
                  </Typography>
                  <Typography 
                    color="textSecondary" 
                    gutterBottom
                    sx={{ 
                      fontSize: '0.95rem',
                      mb: 2.5
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box mt={2} mb={3}>
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        className="project-tech"
                        sx={{ 
                          mr: 1, 
                          mb: 1,
                          borderRadius: 1.5,
                          border: '1px solid',
                          borderColor: 'grey.200',
                          background: 'transparent',
                          transition: 'all 0.3s ease-in-out',
                          '& .MuiChip-label': {
                            fontWeight: 500,
                            color: 'primary.main'
                          }
                        }}
                      />
                    ))}
                  </Box>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Box>
                      <Chip
                        label={project.category}
                        color="primary"
                        size="small"
                        sx={{ 
                          mr: 1,
                          borderRadius: 1.5,
                          background: 'linear-gradient(135deg, #6366F1 0%, #818CF8 100%)',
                          '& .MuiChip-label': {
                            fontWeight: 500,
                            color: 'white'
                          }
                        }}
                      />
                      <Chip
                        label={project.difficulty}
                        color="secondary"
                        size="small"
                        sx={{ 
                          borderRadius: 1.5,
                          background: 'linear-gradient(135deg, #EC4899 0%, #F472B6 100%)',
                          '& .MuiChip-label': {
                            fontWeight: 500,
                            color: 'white'
                          }
                        }}
                      />
                    </Box>
                    <Box>
                      <IconButton
                        href={project.githubLink}
                        target="_blank"
                        size="small"
                        sx={{ 
                          mr: 1,
                          color: 'primary.main',
                          '&:hover': {
                            background: 'rgba(99, 102, 241, 0.1)'
                          }
                        }}
                      >
                        <GitHubIcon />
                      </IconButton>
                      <IconButton 
                        size="small"
                        sx={{ 
                          color: 'secondary.main',
                          '&:hover': {
                            background: 'rgba(236, 72, 153, 0.1)'
                          }
                        }}
                      >
                        <LinkIcon />
                      </IconButton>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}