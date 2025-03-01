import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  Snackbar,
  Alert,
  Container,
  CircularProgress,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import emailjs from '@emailjs/browser';
import { useTheme } from '../context/ThemeContext';

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.mode === 'dark' 
        ? 'rgba(255, 255, 255, 0.23)' 
        : 'rgba(15, 23, 42, 0.23)',
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.7)' 
      : 'rgba(15, 23, 42, 0.7)',
  },
  '& .MuiOutlinedInput-input': {
    color: theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.9)' 
      : 'rgba(15, 23, 42, 0.9)',
  },
}));

const LandingContactForm = () => {
  const [formData, setFormData] = useState({
    user_email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    user_email: false,
    message: false,
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isDarkMode } = useTheme();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    setErrors(prev => ({
      ...prev,
      [name]: false,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      user_email: !validateEmail(formData.user_email),
      message: formData.message.trim() === '',
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(error => error)) {
      setSnackbar({
        open: true,
        message: 'Please fill in all required fields correctly.',
        severity: 'error',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.user_email,
        to_name: 'ProjectOn Team',
        message: formData.message,
        reply_to: formData.user_email,
      };

      console.log('Sending email with params:', templateParams);
      console.log('Using service:', EMAILJS_SERVICE_ID);
      console.log('Using template:', EMAILJS_TEMPLATE_ID);

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result.text);

      setSnackbar({
        open: true,
        message: 'Thank you for your message! We will get back to you soon.',
        severity: 'success',
      });

      setFormData({
        user_email: '',
        message: '',
      });
    } catch (error: any) {
      console.error('Error details:', {
        message: error.message,
        text: error.text,
        name: error.name,
        error
      });
      
      setSnackbar({
        open: true,
        message: `Failed to send message: ${error.message || 'Unknown error'}`,
        severity: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        background: theme => isDarkMode 
          ? 'rgba(15, 23, 42, 0.6)'
          : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderRadius: 2,
        border: theme => `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(15, 23, 42, 0.1)'}`,
        py: { xs: 6, md: 8 },
        px: { xs: 2, sm: 4 },
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          align="center"
          sx={{
            mb: 2,
            background: 'linear-gradient(45deg, #6366F1, #EC4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Get in Touch
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{ 
            mb: 4,
            color: theme => isDarkMode 
              ? 'rgba(255, 255, 255, 0.7)'
              : 'rgba(15, 23, 42, 0.7)',
          }}
        >
          Have questions? We'd love to hear from you.
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3} maxWidth="600px" mx="auto">
            <StyledTextField
              fullWidth
              label="Email"
              name="user_email"
              type="email"
              value={formData.user_email}
              onChange={handleChange}
              error={errors.user_email}
              helperText={errors.user_email && 'Please enter a valid email address'}
              required
              disabled={isSubmitting}
            />
            <StyledTextField
              fullWidth
              multiline
              rows={4}
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              helperText={errors.message && 'Message is required'}
              required
              disabled={isSubmitting}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={isSubmitting}
              sx={{
                py: 1.5,
                background: 'linear-gradient(45deg, #6366F1, #EC4899)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #4F46E5, #DB2777)',
                },
              }}
            >
              {isSubmitting ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                'Send Message'
              )}
            </Button>
          </Stack>
        </form>
      </Container>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default LandingContactForm; 