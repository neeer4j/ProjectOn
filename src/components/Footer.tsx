import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        py: 3,
        textAlign: 'center'
      }}
    >
      <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
        © {new Date().getFullYear()} ProjectOn. All rights reserved.
      </Typography>
    </Box>
  );
}