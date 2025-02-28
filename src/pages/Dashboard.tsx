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
import { motion, useScroll, useTransform } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { GitHub as GitHubIcon, Analytics, Code, People, Storage, Speed, Security } from '@mui/icons-material';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const GradientTypography = styled(Typography)({
  background: 'linear-gradient(90deg, #6366F1, #EC4899)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
});

const StatsCard = ({ value, label }: { value: number; label: string }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <Card 
      ref={ref}
      sx={{ 
        textAlign: 'center',
        p: 3,
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}
    >
      <Typography variant="h3" sx={{ color: '#EC4899', fontWeight: 700 }}>
        {inView ? <CountUp end={value} duration={2.5} /> : '0'}+
      </Typography>
      <Typography variant="body1" sx={{ color: 'white', opacity: 0.9, mt: 1 }}>
        {label}
      </Typography>
    </Card>
  );
};

const services = [
  {
    title: 'Project Management',
    description: 'Streamline your development workflow with powerful project management tools.',
    icon: <Code sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Team Collaboration',
    description: 'Work seamlessly with your team members in real-time.',
    icon: <People sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Analytics Dashboard',
    description: 'Get insights into your project progress and team performance.',
    icon: <Analytics sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Data Storage',
    description: 'Secure cloud storage for all your project files and documents.',
    icon: <Storage sx={{ fontSize: 40 }} />,
  },
  {
    title: 'High Performance',
    description: 'Lightning-fast project loading and real-time updates.',
    icon: <Speed sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Enterprise Security',
    description: 'Advanced security features to protect your valuable data.',
    icon: <Security sx={{ fontSize: 40 }} />,
  },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
          color: 'white',
          position: 'relative',
          pt: { xs: 14, md: 22 }, // Increased padding to accommodate larger navbar
          pb: { xs: 10, md: 15 },
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <GradientTypography variant="h2" sx={{ fontWeight: 800, mb: 3 }}>
                  Transform Your Project Management Experience
                </GradientTypography>
                <Typography variant="h5" sx={{ opacity: 0.9, mb: 4, lineHeight: 1.5 }}>
                  Streamline collaboration, boost productivity, and deliver exceptional results with our comprehensive project management platform.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      py: 1.5,
                      px: 4,
                      background: 'linear-gradient(45deg, #6366F1 30%, #EC4899 90%)',
                      boxShadow: '0 4px 14px 0 rgba(99, 102, 241, 0.4)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #4F46E5 30%, #DB2777 90%)',
                        boxShadow: '0 6px 20px 0 rgba(99, 102, 241, 0.6)',
                      }
                    }}
                  >
                    Get Started Free
                  </Button>
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
                </Stack>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ y }}
              >
                <Box
                  component="img"
                  src="/hero-image.svg"
                  alt="Project Management"
                  sx={{
                    width: '100%',
                    maxWidth: 600,
                    height: 'auto',
                    display: 'block',
                    margin: '0 auto',
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box
        sx={{
          position: 'relative',
          background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
          py: { xs: 8, md: 12 },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")',
          }
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 }, position: 'relative' }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard value={1000} label="Active Users" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard value={500} label="Projects Completed" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard value={50} label="Team Collaborations" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard value={99} label="Client Satisfaction" />
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
              Everything you need to manage your projects effectively
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

      {/* CTA Section */}
      <Box 
        sx={{ 
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
          <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
                Ready to Get Started?
              </Typography>
              <Typography sx={{ opacity: 0.8, mb: 4, maxWidth: 600, mx: 'auto' }}>
                Join thousands of developers who are already using ProjectOn to streamline their development workflow.
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  py: 2,
                  px: 6,
                  background: 'linear-gradient(45deg, #6366F1 30%, #EC4899 90%)',
                  boxShadow: '0 4px 14px 0 rgba(99, 102, 241, 0.4)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #4F46E5 30%, #DB2777 90%)',
                    boxShadow: '0 6px 20px 0 rgba(99, 102, 241, 0.6)',
                  }
                }}
              >
                Start Your Free Trial
              </Button>
            </motion.div>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}