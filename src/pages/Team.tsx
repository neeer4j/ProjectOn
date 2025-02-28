import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Chip,
  Stack,
  Container,
} from '@mui/material';

export default function Team() {
  const team = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Team Lead',
      expertise: ['Algorithms', 'System Design'],
      projects: ['Algorithm Visualizer', 'Compiler Design'],
      avatar: 'AJ',
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Backend Developer',
      expertise: ['Databases', 'API Design'],
      projects: ['Database Manager'],
      avatar: 'SC',
    },
    {
      id: 3,
      name: 'Mike Rodriguez',
      role: 'Frontend Developer',
      expertise: ['React', 'UI/UX'],
      projects: ['Algorithm Visualizer'],
      avatar: 'MR',
    },
  ];

  return (
    <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
      <Box sx={{ py: 4 }}>
        <Box
          sx={{
            background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
            p: 3,
            borderRadius: 2,
            color: 'white',
            mb: 4,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            Team Members
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {team.map((member) => (
            <Grid item xs={12} md={4} key={member.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  transition: 'all 0.3s ease-in-out',
                  position: 'relative',
                  overflow: 'visible',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    '&::before': {
                      opacity: 1,
                      transform: 'translate(-50%, -50%) scale(1)',
                    }
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
                    borderRadius: 'inherit',
                    transform: 'translate(-50%, -50%) scale(0.95)',
                    opacity: 0,
                    transition: 'all 0.3s ease-in-out',
                    zIndex: -1,
                  }
                }}
                elevation={0}
              >
                <CardContent sx={{ p: 3 }}>
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    mb={3}
                  >
                    <Avatar
                      sx={{
                        width: 64,
                        height: 64,
                        background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        boxShadow: '0 4px 14px 0 rgba(99, 102, 241, 0.4)',
                      }}
                    >
                      {member.avatar}
                    </Avatar>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                        {member.name}
                      </Typography>
                      <Typography 
                        sx={{ 
                          fontSize: '0.95rem',
                          color: 'secondary.main',
                          fontWeight: 500
                        }}
                      >
                        {member.role}
                      </Typography>
                    </Box>
                  </Stack>

                  <Typography 
                    variant="subtitle2" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 600,
                      color: 'primary.main',
                      mb: 1.5 
                    }}
                  >
                    Expertise
                  </Typography>
                  <Box mb={3}>
                    {member.expertise.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        sx={{ 
                          mr: 1, 
                          mb: 1,
                          borderRadius: 1.5,
                          background: 'rgba(99, 102, 241, 0.1)',
                          color: 'primary.main',
                          border: '1px solid',
                          borderColor: 'primary.light',
                          '& .MuiChip-label': {
                            fontWeight: 500
                          }
                        }}
                      />
                    ))}
                  </Box>

                  <Typography 
                    variant="subtitle2" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 600,
                      color: 'secondary.main',
                      mb: 1.5 
                    }}
                  >
                    Current Projects
                  </Typography>
                  <Box>
                    {member.projects.map((project) => (
                      <Chip
                        key={project}
                        label={project}
                        size="small"
                        sx={{ 
                          mr: 1, 
                          mb: 1,
                          borderRadius: 1.5,
                          background: 'rgba(236, 72, 153, 0.1)',
                          color: 'secondary.main',
                          border: '1px solid',
                          borderColor: 'secondary.light',
                          '& .MuiChip-label': {
                            fontWeight: 500
                          }
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}