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
import LandingContactForm from '../components/LandingContactForm';
import { useTheme } from '../context/ThemeContext';

const GradientText = styled('h1')({
  background: 'linear-gradient(90deg, #6366F1, #EC4899)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 800,
  position: 'relative',
  display: 'block',
  margin: 0,
  transform: 'translateZ(0)',
  backfaceVisibility: 'hidden'
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
  const { isDarkMode } = useTheme();
  
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
            backgroundColor: 'rgba(15, 23, 42, 0.75)',
            zIndex: 1
          },
          perspective: 1000,
          perspectiveOrigin: 'center center',
        }}
      >
        <Container 
          maxWidth={false} 
          sx={{ 
            px: { xs: 2, sm: 4, md: 6 },
            position: 'relative',
            zIndex: 2,
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale'
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
                  width: '100%',
                  padding: '3rem 0'
                }}
              >
                <Box sx={{ 
                  overflow: 'visible',
                  position: 'relative',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '240px'
                }}>
                  <GradientText
                    sx={{ 
                      fontSize: { xs: '3rem', sm: '7rem', md: '8rem' },
                      textAlign: 'center',
                      letterSpacing: '-0.02em',
                      pb: 2
                    }}
                  >
                    ProjectOn
                  </GradientText>
                </Box>
                <Typography variant="h4" sx={{ 
                  mb: { xs: 4, md: 6 }, 
                  lineHeight: 1.4,
                  color: '#ffffff',
                  textAlign: 'center',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  fontSize: { xs: '1.25rem', sm: '2rem', md: '2.5rem' },
                  fontWeight: 500,
                  maxWidth: '900px',
                  mx: 'auto',
                  px: { xs: 2, md: 0 }
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
        bgcolor: theme => isDarkMode ? '#0F172A' : '#F8FAFC',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: theme => isDarkMode
            ? 'linear-gradient(180deg, rgba(15, 23, 42, 0.3) 0%, rgba(15, 23, 42, 0.9) 100%)'
            : 'linear-gradient(180deg, rgba(248, 250, 252, 0.3) 0%, rgba(248, 250, 252, 0.9) 100%)',
          zIndex: 0
        }
      }}>
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 }, position: 'relative', zIndex: 1 }}>
          <Box textAlign="center" mb={8} sx={{ maxWidth: '800px', mx: 'auto' }}>
            <Typography variant="h3" gutterBottom sx={{ 
              fontWeight: 700, 
              color: theme => isDarkMode ? 'white' : '#1E293B'
            }}>
              Our Services
            </Typography>
            <Typography variant="h6" sx={{ 
              color: theme => isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(15, 23, 42, 0.8)',
              maxWidth: 600, 
              mx: 'auto' 
            }}>
              With a passion for innovation and a commitment to quality, ProjectOn is here to bring your projects to life. Let's create something amazing together!
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 2, md: 4 }}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      background: theme => isDarkMode 
                        ? 'rgba(30, 41, 59, 0.5)'
                        : 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(8px)',
                      border: theme => `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(15, 23, 42, 0.1)'}`,
                      willChange: 'transform',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        background: theme => isDarkMode 
                          ? 'rgba(30, 41, 59, 0.8)'
                          : 'rgba(255, 255, 255, 1)',
                        boxShadow: '0 12px 40px -8px rgba(0, 0, 0, 0.2)',
                        '& .icon-wrapper': {
                          background: 'linear-gradient(135deg, #6366F1 0%, #0EA5E9 100%)',
                          transform: 'scale(1.1)',
                          '& svg': {
                            color: 'white',
                            transform: 'scale(1.1)',
                          }
                        }
                      }
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 }, textAlign: 'center' }}>
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
                          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                          willChange: 'transform',
                          '& svg': {
                            color: '#6366F1',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            willChange: 'transform',
                          }
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography variant="h5" gutterBottom sx={{ 
                        fontWeight: 600, 
                        color: theme => isDarkMode ? 'white' : '#1E293B',
                        mb: 2
                      }}>
                        {service.title}
                      </Typography>
                      <Typography sx={{ 
                        color: theme => isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(15, 23, 42, 0.8)',
                        lineHeight: 1.7
                      }}>
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
          bgcolor: theme => isDarkMode ? '#0F172A' : '#F8FAFC',
          borderTop: theme => `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(15, 23, 42, 0.1)'}`,
          position: 'relative',
          scrollMarginTop: '80px',
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
          <Box textAlign="center" mb={6} sx={{ maxWidth: '900px', mx: 'auto' }}>
            <Typography variant="h3" gutterBottom sx={{ 
              fontWeight: 700, 
              color: theme => isDarkMode ? 'white' : '#1E293B'
            }}>
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
                  color: theme => isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(15, 23, 42, 0.8)',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.8,
                  maxWidth: '900px',
                  mx: 'auto',
                  px: { xs: 2, md: 4 }
                }}
              >
               Four passionate Computer Science graduates came together with a shared vision—to build innovative, high-quality software solutions that push the boundaries of technology. Driven by their love for coding, problem-solving, and cutting-edge advancements, they founded ProjectOn, a platform dedicated to developing web apps, mobile applications, and scalable software for businesses, individuals, and aspiring developers.

With expertise in software development, UI/UX design, and system architecture, they strive to turn ideas into reality, ensuring that every project they build is efficient, user-friendly, and future-ready. Beyond serving businesses, ProjectOn is also committed to helping students and young innovators bring their ideas to life. Whether it's a final-year project, a startup prototype, or an academic software solution, they provide professional guidance, structured development processes, and industry-standard technology to ensure top-tier results.

Their mission is simple: to empower businesses and students alike with technology, bridging the gap between innovation and execution while making a lasting impact in the digital world.
              </Typography>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* What We Offer Section */}
      <Box 
        sx={{ 
          py: { xs: 8, md: 12 }, 
          bgcolor: theme => isDarkMode ? '#0F172A' : '#F8FAFC',
          borderTop: theme => `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(15, 23, 42, 0.1)'}`,
          position: 'relative',
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
          <Box textAlign="center" mb={6} sx={{ maxWidth: '900px', mx: 'auto' }}>
            <Typography variant="h3" gutterBottom sx={{ 
              fontWeight: 700, 
              color: theme => isDarkMode ? 'white' : '#1E293B'
            }}>
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
                  color: theme => isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(15, 23, 42, 0.8)',
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
                py: { xs: 3, md: 4 },
                background: theme => isDarkMode 
                  ? 'rgba(30, 41, 59, 0.5)'
                  : 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(8px)',
                borderRadius: 4,
                border: theme => `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(15, 23, 42, 0.1)'}`,
              }}>
                <Stack spacing={2} sx={{ maxWidth: '600px', mx: 'auto' }}>
                  {['Custom Web Applications',
                    'High-Performance Mobile Apps (iOS & Android)',
                    'Scalable & Secure Software Solutions',
                    'UI/UX Design for Seamless User Experience',
                    'End-to-End Development Support'].map((item, index) => (
                    <Typography 
                      key={index}
                      sx={{ 
                        color: theme => isDarkMode ? 'rgba(255, 255, 255, 0.9)' : 'rgba(15, 23, 42, 0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        px: { xs: 1, md: 0 }
                      }}
                    >
                      ✔️ {item}
                    </Typography>
                  ))}
                </Stack>
              </Box>

              <Typography 
                variant="h6" 
                sx={{ 
                  color: theme => isDarkMode ? 'white' : '#1E293B',
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

      {/* Contact Section */}
      <Box
        ref={contactRef}
        id="contact"
        sx={{
          py: { xs: 8, md: 12 },
          background: theme => isDarkMode ? '#0F172A' : '#F8FAFC',
          position: 'relative',
          overflow: 'hidden',
          scrollMarginTop: '80px',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: theme => `linear-gradient(90deg, transparent, ${
              isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(15,23,42,0.1)'
            }, transparent)`,
          },
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <LandingContactForm />
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'center',
                  width: '100%',
                  maxWidth: '1000px',
                  mx: 'auto',
                  mt: 4
                }}>
                  <Grid 
                    container 
                    spacing={{ xs: 2, md: 4 }} 
                    sx={{ 
                      width: 'auto',
                      margin: { xs: '-16px', md: '0 auto' },
                      justifyContent: 'center'
                    }}
                  >
                    {[
                      {
                        icon: <EmailIcon sx={{ fontSize: 40, color: '#6366F1', mb: 2 }} />,
                        title: 'Email Us',
                        content: [
                          'connect.projecton@gmail.com',
                          'Let\'s discuss your next project!'
                        ]
                      },
                      {
                        icon: <PhoneIcon sx={{ fontSize: 40, color: '#6366F1', mb: 2 }} />,
                        title: 'Call Us',
                        content: [
                          '+91 9995772632',
                          'Mon - Fri, 9:00 - 18:00'
                        ]
                      }
                    ].map((item, index) => (
                      <Grid item xs={12} sm={6} md={5} key={index}>
                        <Box sx={{ 
                          p: { xs: 3, md: 4 }, 
                          textAlign: 'center',
                          height: '100%',
                          background: theme => isDarkMode 
                            ? 'rgba(30, 41, 59, 0.5)'
                            : 'rgba(255, 255, 255, 0.9)',
                          backdropFilter: 'blur(8px)',
                          borderRadius: 2,
                          border: theme => `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(15, 23, 42, 0.1)'}`,
                          transition: 'transform 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                          }
                        }}>
                          {item.icon}
                          <Typography variant="h6" sx={{ 
                            color: theme => isDarkMode ? 'white' : '#1E293B',
                            mb: 1 
                          }}>
                            {item.title}
                          </Typography>
                          {item.content.map((text, i) => (
                            <Typography 
                              key={i} 
                              sx={{ 
                                color: theme => isDarkMode 
                                  ? 'rgba(255, 255, 255, 0.7)' 
                                  : 'rgba(15, 23, 42, 0.8)',
                                mt: i > 0 ? 1 : 0
                              }}
                            >
                              {text}
                            </Typography>
                          ))}
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}