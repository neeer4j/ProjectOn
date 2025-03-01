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
import { 
  Code, 
  People, 
  Speed, 
  Email as EmailIcon,
  Phone as PhoneIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';

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
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Handle initial load and subsequent hash changes
    const handleHashScroll = () => {
      if (window.location.hash === '#about') {
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
      } else if (window.location.hash === '#contact') {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Handle the initial hash on mount
    handleHashScroll();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);

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
      <Box sx={{ 
        py: { xs: 8, md: 12 }, 
        bgcolor: '#0F172A',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.3) 0%, rgba(15, 23, 42, 0.9) 100%)',
          zIndex: 0
        }
      }}>
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 }, position: 'relative', zIndex: 1 }}>
          <Box textAlign="center" mb={8} sx={{ maxWidth: '800px', mx: 'auto' }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, color: 'white' }}>
              Our Services
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: 600, mx: 'auto' }}>
            With a passion for innovation and a commitment to quality, ProjectOn is here to bring your projects to life. Let's create something amazing together!
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
                      background: 'rgba(30, 41, 59, 0.5)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        background: 'rgba(30, 41, 59, 0.8)',
                        boxShadow: '0 12px 40px -8px rgba(0, 0, 0, 0.5)',
                        '& .icon-wrapper': {
                          background: 'linear-gradient(135deg, #6366F1 0%, #0EA5E9 100%)',
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
                          background: 'rgba(99, 102, 241, 0.1)',
                          transition: 'all 0.3s ease-in-out',
                          '& svg': {
                            color: '#6366F1',
                            transition: 'all 0.3s ease-in-out',
                          }
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'white' }}>
                        {service.title}
                      </Typography>
                      <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
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

      {/* About Founders Section */}
      <Box 
        ref={aboutRef}
        id="about"
        sx={{ 
          py: { xs: 8, md: 12 }, 
          bgcolor: '#0F172A',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
          scrollMarginTop: '80px',
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
          <Box textAlign="center" mb={6} sx={{ maxWidth: '900px', mx: 'auto' }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, color: 'white' }}>
              About Us
            </Typography>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  maxWidth: '900px',
                  mx: 'auto',
                  px: { xs: 2, md: 4 }
                }}
              >
                Four passionate Computer Science graduates came together with a shared vision—to build innovative software solutions that push the boundaries of technology. Driven by their love for coding, problem-solving, and cutting-edge advancements, they founded ProjectOn, a platform dedicated to creating web apps, mobile applications, and scalable software for businesses and individuals. With expertise in development, UI/UX design, and system architecture, they strive to turn ideas into reality, ensuring high-quality, user-friendly, and future-ready solutions. Their mission is simple: to empower businesses with technology and make a lasting impact in the digital world.
              </Typography>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* What We Offer Section */}
      <Box 
        sx={{ 
          py: { xs: 8, md: 12 }, 
          bgcolor: '#0F172A',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
          <Box textAlign="center" mb={6} sx={{ maxWidth: '900px', mx: 'auto' }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, color: 'white' }}>
              What We Offer
            </Typography>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  maxWidth: '900px',
                  mx: 'auto',
                  px: { xs: 2, md: 4 },
                  textAlign: 'center',
                  mb: 6
                }}
              >
                At ProjectOn, we turn ideas into reality by crafting cutting-edge web apps, mobile apps, and digital solutions tailored to your needs. Whether you're a startup looking for a sleek website, a business in need of a high-performance mobile app, or an entrepreneur with a groundbreaking tech idea, we've got you covered.
              </Typography>

              <Box sx={{ 
                maxWidth: '800px', 
                mx: 'auto',
                px: { xs: 2, md: 4 },
                py: 4,
                background: 'rgba(30, 41, 59, 0.5)',
                backdropFilter: 'blur(8px)',
                borderRadius: 4,
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}>
                <Stack spacing={2} sx={{ maxWidth: '600px', mx: 'auto' }}>
                  <Typography 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      fontSize: '1.1rem'
                    }}
                  >
                    ✔️ Custom Web Applications
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      fontSize: '1.1rem'
                    }}
                  >
                    ✔️ High-Performance Mobile Apps (iOS & Android)
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      fontSize: '1.1rem'
                    }}
                  >
                    ✔️ Scalable & Secure Software Solutions
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      fontSize: '1.1rem'
                    }}
                  >
                    ✔️ UI/UX Design for Seamless User Experience
                  </Typography>
                  <Typography 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      fontSize: '1.1rem'
                    }}
                  >
                    ✔️ End-to-End Development Support
                  </Typography>
                </Stack>
              </Box>

              <Typography 
                variant="h6" 
                sx={{ 
                  color: 'white',
                  textAlign: 'center',
                  mt: 6,
                  fontWeight: 500
                }}
              >
                Get in touch today and start your journey with ProjectOn!
              </Typography>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Contact Us Section */}
      <Box 
        ref={contactRef}
        id="contact"
        sx={{ 
          py: { xs: 8, md: 12 }, 
          bgcolor: '#0F172A',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
          scrollMarginTop: '80px', // Add offset for fixed header
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
          <Box textAlign="center" mb={6} sx={{ maxWidth: '900px', mx: 'auto' }}>
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, color: 'white' }}>
              Contact Us
            </Typography>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  maxWidth: '700px',
                  mx: 'auto',
                  mb: 6
                }}
              >
                Get in touch with us for any questions about our services or to discuss your next project.
              </Typography>
              
              <Grid container spacing={4} sx={{ maxWidth: '800px', mx: 'auto' }}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ 
                    p: 4, 
                    textAlign: 'center',
                    height: '100%',
                    background: 'rgba(30, 41, 59, 0.5)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: 2,
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    }
                  }}>
                    <EmailIcon sx={{ fontSize: 40, color: '#6366F1', mb: 2 }} />
                    <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
                      Email Us
                    </Typography>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      connect.projecton@gmail.com
                    </Typography>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)', mt: 1 }}>
                      Let's discuss your next project!
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ 
                    p: 4, 
                    textAlign: 'center',
                    height: '100%',
                    background: 'rgba(30, 41, 59, 0.5)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: 2,
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    }
                  }}>
                    <PhoneIcon sx={{ fontSize: 40, color: '#6366F1', mb: 2 }} />
                    <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
                      Call Us
                    </Typography>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      +91 9995772632
                    </Typography>
                    <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      Mon - Fri, 9:00 - 18:00
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </motion.div>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}