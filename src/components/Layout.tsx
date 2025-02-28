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
  Stack,
  Button,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Code as CodeIcon,
} from '@mui/icons-material';

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
          Projects
        </Button>
      </List>
    </Box>
  );

  if (isHomePage) {
    return (
      <Box>
        <AppBar 
          position="fixed" 
          color="transparent" 
          elevation={0}
          sx={{ 
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(30, 41, 59, 0.8)',
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
              spacing={3} 
              alignItems="center"
            >
              <Button
                onClick={() => navigate('/projects')}
                sx={{
                  color: 'white',
                  fontSize: '1rem',
                  textTransform: 'none',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                Projects
              </Button>
              <Button
                variant="contained"
                sx={{
                  py: 1.5,
                  px: 3,
                  background: 'linear-gradient(45deg, #6366F1 30%, #EC4899 90%)',
                  boxShadow: '0 4px 14px 0 rgba(99, 102, 241, 0.4)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #4F46E5 30%, #DB2777 90%)',
                    boxShadow: '0 6px 20px 0 rgba(99, 102, 241, 0.6)',
                    transform: 'translateY(-2px)',
                  },
                  fontSize: '1rem',
                  transition: 'all 0.2s ease-in-out'
                }}
              >
                Get Started
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
        <Box component="main" sx={{ width: '100%' }}>
          {children}
        </Box>
      </Box>
    );
  }

  if (isProjectsPage) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <AppBar 
          position="fixed" 
          sx={{ 
            background: 'linear-gradient(45deg, #6366F1 30%, #EC4899 90%)',
            height: 80
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
                cursor: 'pointer'
              }}
              onClick={() => navigate('/')}
            />
          </Toolbar>
        </AppBar>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: { xs: 2, sm: 4, md: 6 },
            width: '100%',
            marginTop: '80px',
          }}
        >
          {children}
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar 
        position="fixed" 
        sx={{ 
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: 'linear-gradient(45deg, #6366F1 30%, #EC4899 90%)',
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
    </Box>
  );
}