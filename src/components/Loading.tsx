import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const Loading = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(-45deg, #0F172A, #1E293B, #0F172A, #1E293B)',
        backgroundSize: '400% 400%',
        animation: `${gradient} 15s ease infinite`,
        zIndex: 9999,
      }}
    >
      <Box
        sx={{
          animation: `${pulse} 2s ease-in-out infinite`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            background: 'linear-gradient(45deg, #6366F1, #EC4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2,
          }}
        >
          ProjectOn
        </Typography>
        <Box
          sx={{
            width: '60px',
            height: '60px',
            border: '3px solid rgba(99, 102, 241, 0.3)',
            borderTop: '3px solid #6366F1',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            '@keyframes spin': {
              '0%': {
                transform: 'rotate(0deg)',
              },
              '100%': {
                transform: 'rotate(360deg)',
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Loading; 