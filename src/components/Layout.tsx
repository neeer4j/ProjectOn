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
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Code as CodeIcon,
  Info as InfoIcon,
  ContactSupport as ContactIcon,
} from '@mui/icons-material';
import Footer from './Footer';

const drawerWidth = 280;

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isProjectsPage = location.pathname === '/projects';

  const drawer = (
    <Box>
      <Toolbar sx={{ height: 80 }}>
        <Box 
          component="img" 
          src="/logo.svg" 
          alt="ProjectOn Logo" 
          sx={{ 
            height: 40,
            width: 'auto',
            cursor: 'pointer' 
          }}
          onClick={() => navigate('/')}
        />
      </Toolbar>
      <List>
        <Button
          onClick={() => navigate('/')}
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
          onClick={() => navigate('/projects')}
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

  if (isHomePage) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBar 
          position="fixed" 
          color="transparent" 
          elevation={0}
          sx={{ 
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(15, 23, 42, 0.85)', // Darker blue-gray matching theme
            width: '100%'
          }}
        >
          <Toolbar sx={{ height: 80, maxWidth: '100%', px: { xs: 2, sm: 4, md: 6 } }}>
            <Box 
              component="img" 
              src="/logo.svg" 
              alt="ProjectOn Logo" 
              sx={{ 
                height: 40,
                width: 'auto',
                mr: 2,
                cursor: 'pointer'
              }}
              onClick={() => navigate('/')}
            />
            <Box sx={{ flexGrow: 1 }} />
            <Stack 
              direction="row" 
              spacing={2}
              sx={{
                display: { xs: 'none', md: 'flex' }
              }}
            >
              <Button
                sx={{
                  color: 'white',
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
                  color: 'white',
                  fontSize: '1rem',
                  '&:hover': {
                    color: '#6366F1'
                  }
                }}
                startIcon={<ContactIcon />}
              >
                Contact Us
              </Button>
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
            backgroundColor: 'rgba(15, 23, 42, 0.85)', // Darker blue-gray matching theme
            width: '100%'
          }}
        >
          <Toolbar sx={{ height: 80, maxWidth: '100%', px: { xs: 2, sm: 4, md: 6 } }}>
            <Box 
              component="img" 
              src="/logo.svg" 
              alt="ProjectOn Logo" 
              sx={{ 
                height: 40,
                width: 'auto',
                mr: 2,
                cursor: 'pointer'
              }}
              onClick={() => navigate('/')}
            />
            <Box sx={{ flexGrow: 1 }} />
            <Stack 
              direction="row" 
              spacing={2}
              sx={{
                display: { xs: 'none', md: 'flex' }
              }}
            >
              <Button
                sx={{
                  color: 'white',
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
                  color: 'white',
                  fontSize: '1rem',
                  '&:hover': {
                    color: '#6366F1'
                  }
                }}
                startIcon={<ContactIcon />}
              >
                Contact Us
              </Button>
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
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: { xs: 2, sm: 4, md: 6 },
            width: '100%',
            pt: '80px', // Changed from marginTop to paddingTop for better spacing
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
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: 'rgba(15, 23, 42, 0.95)', // Darker blue-gray matching theme
          width: '100%',
          height: 80
        }}
      >
        <Toolbar sx={{ height: 80, maxWidth: '100%', px: { xs: 2, sm: 4, md: 6 } }}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setMobileOpen(!mobileOpen)}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box 
            component="img" 
            src="/logo.svg" 
            alt="ProjectOn Logo" 
            sx={{ 
              height: 40,
              width: 'auto',
              cursor: 'pointer'
            }}
            onClick={() => navigate('/')}
          />
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
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
          marginTop: '80px', // Updated to match the larger navbar
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}