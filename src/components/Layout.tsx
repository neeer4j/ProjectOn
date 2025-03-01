import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItemIcon,
  Toolbar,
  Button,
  Stack,
  Typography,
  Tooltip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Code as CodeIcon,
  Info as InfoIcon,
  ContactSupport as ContactIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
} from '@mui/icons-material';
import { useTheme } from '../context/ThemeContext';
import Footer from './Footer';

const drawerWidth = 280;

const GradientTypography = styled(Typography)({
  background: 'linear-gradient(90deg, #6366F1, #EC4899)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  cursor: 'pointer'
});

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();
  const isHomePage = location.pathname === '/';
  const isProjectsPage = location.pathname === '/projects';

  const handleAboutClick = () => {
    if (!isHomePage) {
      navigate('/#about');
      // Allow time for navigation before scrolling
      setTimeout(() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleContactClick = () => {
    if (!isHomePage) {
      navigate('/#contact');
      // Allow time for navigation before scrolling
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const closeDrawer = () => {
    setMobileOpen(false);
  };

  const drawer = (
    <Box>
      <Toolbar sx={{ height: 80 }}>
        <GradientTypography 
          variant="h4" 
          sx={{ 
            fontWeight: 800,
            letterSpacing: '-0.02em',
            fontSize: { xs: '1.75rem', sm: '2rem' }
          }}
          onClick={() => {
            navigate('/');
            closeDrawer();
          }}
        >
          ProjectOn
        </GradientTypography>
      </Toolbar>
      <List>
        <Button
          onClick={() => {
            navigate('/');
            closeDrawer();
          }}
          startIcon={
            <ListItemIcon sx={{ 
              color: location.pathname === '/' ? '#6366F1' : 'inherit',
              minWidth: 40
            }}>
              <HomeIcon />
            </ListItemIcon>
          }
          sx={{
            width: '90%',
            justifyContent: 'flex-start',
            mx: 1,
            mb: 1,
            py: 1.5,
            borderRadius: 2,
            color: location.pathname === '/' ? '#6366F1' : 'inherit',
            backgroundColor: location.pathname === '/' ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
            '&:hover': {
              backgroundColor: location.pathname === '/' 
                ? 'rgba(99, 102, 241, 0.2)' 
                : 'rgba(0, 0, 0, 0.04)'
            }
          }}
        >
          Home
        </Button>
        <Button
          onClick={() => {
            navigate('/projects');
            closeDrawer();
          }}
          startIcon={
            <ListItemIcon sx={{ 
              color: location.pathname === '/projects' ? '#6366F1' : 'inherit',
              minWidth: 40
            }}>
              <CodeIcon />
            </ListItemIcon>
          }
          sx={{
            width: '90%',
            justifyContent: 'flex-start',
            mx: 1,
            mb: 1,
            py: 1.5,
            borderRadius: 2,
            color: location.pathname === '/projects' ? '#6366F1' : 'inherit',
            backgroundColor: location.pathname === '/projects' ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
            '&:hover': {
              backgroundColor: location.pathname === '/projects' 
                ? 'rgba(99, 102, 241, 0.2)' 
                : 'rgba(0, 0, 0, 0.04)'
            }
          }}
        >
          Our Projects
        </Button>
        <Button
          onClick={() => {
            handleAboutClick();
            closeDrawer();
          }}
          startIcon={
            <ListItemIcon sx={{ minWidth: 40 }}>
              <InfoIcon />
            </ListItemIcon>
          }
          sx={{
            width: '90%',
            justifyContent: 'flex-start',
            mx: 1,
            mb: 1,
            py: 1.5,
            borderRadius: 2,
          }}
        >
          About Us
        </Button>
        <Button
          onClick={() => {
            handleContactClick();
            closeDrawer();
          }}
          startIcon={
            <ListItemIcon sx={{ minWidth: 40 }}>
              <ContactIcon />
            </ListItemIcon>
          }
          sx={{
            width: '90%',
            justifyContent: 'flex-start',
            mx: 1,
            mb: 1,
            py: 1.5,
            borderRadius: 2,
          }}
        >
          Contact Us
        </Button>
      </List>
    </Box>
  );

  const ThemeToggleButton = () => (
    <Tooltip title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
      <IconButton
        onClick={toggleTheme}
        sx={{
          ml: 2,
          color: 'inherit',
          '&:hover': {
            color: theme => theme.palette.primary.main,
          },
        }}
      >
        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );

  if (isHomePage) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBar 
          position="fixed" 
          color="transparent" 
          elevation={0}
          sx={{ 
            backdropFilter: 'blur(8px)',
            backgroundColor: isDarkMode 
              ? 'rgba(15, 23, 42, 0.85)'
              : 'rgba(248, 250, 252, 0.85)',
            width: '100%'
          }}
        >
          <Toolbar sx={{ height: 80, maxWidth: '100%', px: { xs: 2, sm: 4, md: 6 } }}>
            <GradientTypography 
              variant="h4" 
              sx={{ 
                fontWeight: 800,
                letterSpacing: '-0.02em',
                mr: 2
              }}
              onClick={() => navigate('/')}
            >
              ProjectOn
            </GradientTypography>
            <Box sx={{ flexGrow: 1 }} />
            <Stack 
              direction="row" 
              spacing={2}
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
              }}
            >
              <Button
                onClick={handleAboutClick}
                sx={{
                  color: isDarkMode ? 'white' : 'text.primary',
                  fontSize: '1rem',
                  '&:hover': {
                    color: '#6366F1'
                  }
                }}
                startIcon={<InfoIcon />}
              >
                About Us
              </Button>
              <Button
                sx={{
                  color: isDarkMode ? 'white' : 'text.primary',
                  fontSize: '1rem',
                  '&:hover': {
                    color: '#6366F1'
                  }
                }}
                startIcon={<ContactIcon />}
                onClick={handleContactClick}
              >
                Contact Us
              </Button>
              <ThemeToggleButton />
            </Stack>
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{ ml: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Box component="main" sx={{ width: '100%', flexGrow: 1 }}>
          {children}
        </Box>
        <Footer />
      </Box>
    );
  }

  if (isProjectsPage) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBar 
          position="fixed" 
          color="transparent" 
          elevation={0}
          sx={{ 
            backdropFilter: 'blur(8px)',
            backgroundColor: isDarkMode 
              ? 'rgba(15, 23, 42, 0.85)'
              : 'rgba(248, 250, 252, 0.85)',
            width: '100%'
          }}
        >
          <Toolbar sx={{ height: 80, maxWidth: '100%', px: { xs: 2, sm: 4, md: 6 } }}>
            <GradientTypography 
              variant="h4" 
              sx={{ 
                fontWeight: 800,
                letterSpacing: '-0.02em',
                mr: 2
              }}
              onClick={() => navigate('/')}
            >
              ProjectOn
            </GradientTypography>
            <Box sx={{ flexGrow: 1 }} />
            <Stack 
              direction="row" 
              spacing={2}
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center'
              }}
            >
              <Button
                onClick={handleAboutClick}
                sx={{
                  color: isDarkMode ? 'white' : 'text.primary',
                  fontSize: '1rem',
                  '&:hover': {
                    color: '#6366F1'
                  }
                }}
                startIcon={<InfoIcon />}
              >
                About Us
              </Button>
              <Button
                sx={{
                  color: isDarkMode ? 'white' : 'text.primary',
                  fontSize: '1rem',
                  '&:hover': {
                    color: '#6366F1'
                  }
                }}
                startIcon={<ContactIcon />}
                onClick={handleContactClick}
              >
                Contact Us
              </Button>
              <ThemeToggleButton />
            </Stack>
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{ 
                ml: 2, 
                display: { md: 'none' },
                color: isDarkMode ? 'white' : 'text.primary'
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              backgroundColor: isDarkMode 
                ? 'rgba(15, 23, 42, 0.95)'
                : 'rgba(248, 250, 252, 0.95)'
            }
          }}
        >
          {drawer}
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: { xs: 2, sm: 4, md: 6 },
            width: '100%',
            pt: '80px',
            backgroundColor: isDarkMode ? '#0F172A' : '#F8FAFC'
          }}
        >
          {children}
        </Box>
        <Footer />
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar 
        position="fixed" 
        sx={{ 
          zIndex: theme => theme.zIndex.drawer + 1,
          backgroundColor: isDarkMode 
            ? 'rgba(15, 23, 42, 0.95)'
            : 'rgba(248, 250, 252, 0.95)',
          width: '100%',
          height: 80
        }}
      >
        <Toolbar sx={{ height: 80, maxWidth: '100%', px: { xs: 2, sm: 4, md: 6 } }}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setMobileOpen(!mobileOpen)}
            sx={{ 
              mr: 2, 
              display: { sm: 'none' },
              color: isDarkMode ? 'white' : 'text.primary'
            }}
          >
            <MenuIcon />
          </IconButton>
          <GradientTypography 
            variant="h4" 
            sx={{ 
              fontWeight: 800,
              letterSpacing: '-0.02em'
            }}
            onClick={() => navigate('/')}
          >
            ProjectOn
          </GradientTypography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              backgroundColor: isDarkMode 
                ? 'rgba(15, 23, 42, 0.95)'
                : 'rgba(248, 250, 252, 0.95)'
            }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              backgroundColor: isDarkMode 
                ? 'rgba(15, 23, 42, 0.95)'
                : 'rgba(248, 250, 252, 0.95)'
            }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 4, md: 6 },
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          marginTop: '80px',
          backgroundColor: isDarkMode ? '#0F172A' : '#F8FAFC'
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}