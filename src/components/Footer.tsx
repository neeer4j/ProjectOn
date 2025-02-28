import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import {
  LinkedIn,
  GitHub,
  Facebook,
  Instagram,
  Twitter
} from '@mui/icons-material';

export default function Footer() {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        py: 4,
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="white" gutterBottom>
              Company
            </Typography>
            <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
              About Us
            </Typography>
            <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
              Our Services
            </Typography>
            <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
              Projects
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="white" gutterBottom>
              Support
            </Typography>
            <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
              FAQ
            </Typography>
            <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
              Contact Us
            </Typography>
            <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
              Privacy Policy
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="white" gutterBottom>
              Services
            </Typography>
            <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
              Software Development
            </Typography>
            <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
              Web Application
            </Typography>
            <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
              Mobile Application
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="white" gutterBottom>
              Connect With Us
            </Typography>
            <Box sx={{ mt: 1 }}>
              <IconButton sx={{ 
                color: 'rgba(255, 255, 255, 0.7)',
                '&:hover': { color: '#6366F1' }
              }}>
                <LinkedIn />
              </IconButton>
              <IconButton sx={{ 
                color: 'rgba(255, 255, 255, 0.7)',
                '&:hover': { color: '#6366F1' }
              }}>
                <GitHub />
              </IconButton>
              <IconButton sx={{ 
                color: 'rgba(255, 255, 255, 0.7)',
                '&:hover': { color: '#6366F1' }
              }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ 
                color: 'rgba(255, 255, 255, 0.7)',
                '&:hover': { color: '#6366F1' }
              }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ 
                color: 'rgba(255, 255, 255, 0.7)',
                '&:hover': { color: '#6366F1' }
              }}>
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ 
          mt: 4, 
          pt: 2, 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center'
        }}>
          <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
            © {new Date().getFullYear()} ProjectOn. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}