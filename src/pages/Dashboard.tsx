import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { GitHub as GitHubIcon, Code, People, Speed } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const GradientTypography = styled(Typography)({
  background: 'linear-gradient(90deg, #6366F1, #EC4899)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
});

const services = [
  {
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs. From desktop applications to enterprise systems, we deliver high-quality software that drives your success.',
    icon: <Code sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Web Application',
    description: 'Modern, responsive web applications built with cutting-edge technologies. Create powerful web experiences that engage users and scale with your business.',
    icon: <Speed sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Mobile Application',
    description: 'Native and cross-platform mobile applications for iOS and Android. Deliver seamless mobile experiences that keep users coming back.',
    icon: <People sx={{ fontSize: 40 }} />,
  },
];

export default function Home() {
  const navigate = useNavigate();
  
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(/images/rear-view-programmer-working-all-night-long.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.75)', // Dark overlay to ensure text readability
            zIndex: 1
          }
        }}
      >
        <Container 
          maxWidth={false} 
          sx={{ 
            px: { xs: 2, sm: 4, md: 6 },
            position: 'relative',
            zIndex: 2 // Place content above the background and overlay
          }}
        >
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={10}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '100%'
                }}
              >
                <GradientTypography variant="h1" sx={{ 
                  fontWeight: 800, 
                  mb: 4,
                  fontSize: { xs: '4.5rem', sm: '7rem', md: '11rem' },
                  lineHeight: 1,
                  textAlign: 'center',
                  letterSpacing: '-0.02em',
                  width: '100%'
                }}>
                  ProjectOn.
                </GradientTypography>
                <Typography variant="h4" sx={{ 
                  mb: 6, 
                  lineHeight: 1.4,
                  color: '#ffffff',
                  textAlign: 'center',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                  fontWeight: 500,
                  maxWidth: '900px',
                  mx: 'auto'
                }}>
                  Code. Create. Innovate. – Powering the Future with Software.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<GitHubIcon />}
                    sx={{
                      py: 1.5,
                      px: 4,
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      color: 'white',
                      '&:hover': {
                        borderColor: 'white',
                        background: 'rgba(255, 255, 255, 0.05)',
                      }
                    }}
                  >
                    View on GitHub
                  </Button>
                  <Button
                    onClick={() => navigate('/projects')}
                    variant="contained"
                    size="large"
                    sx={{
                      py: 1.5,
                      px: 4,
                      background: 'linear-gradient(45deg, #6366F1 30%, #EC4899 90%)',
                      color: 'white',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 16px rgba(99, 102, 241, 0.3)',
                      }
                    }}
                  >
                    Our Projects
                  </Button>
                </Stack>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#F8FAFC' }}>
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
          <Box textAlign="center" mb={8} sx={{ maxWidth: '800px', mx: 'auto' }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
              Our Services
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.8, maxWidth: 600, mx: 'auto' }}>
              Transforming ideas into powerful digital solutions
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: (theme) => `0 12px 40px -8px ${theme.palette.primary.light}25`,
                        '& .icon-wrapper': {
                          background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
                          '& svg': {
                            color: 'white',
                          }
                        }
                      }
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                      <Box 
                        className="icon-wrapper"
                        sx={{ 
                          mb: 2,
                          width: 60,
                          height: 60,
                          borderRadius: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          background: (theme) => theme.palette.grey[100],
                          transition: 'all 0.3s ease-in-out',
                          '& svg': {
                            color: 'primary.main',
                            transition: 'all 0.3s ease-in-out',
                          }
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                        {service.title}
                      </Typography>
                      <Typography sx={{ opacity: 0.8 }}>
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}