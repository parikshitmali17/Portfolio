import React from 'react';
import { Box, Typography, IconButton, Grid, Container } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#121212',
        color: '#fff',
        py: 4,
        mt: 'auto', // makes it push to bottom in a flex layout
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between" alignItems="center">
          {/* Left - Brand or Name */}
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' }, mb: { xs: 2, md: 0 } }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Parikshit M.
            </Typography>
            <Typography variant="body2">Crafting scalable web solutions 🚀</Typography>
          </Grid>

          {/* Center - Social Media Icons */}
          <Grid item xs={12} md={4} sx={{ textAlign: 'center', mb: { xs: 2, md: 0 } }}>
            <IconButton
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              sx={{ color: '#fff' }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              aria-label="GitHub"
              href="https://github.com/YOUR_GITHUB"
              target="_blank"
              sx={{ color: '#fff' }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              aria-label="Twitter"
              href="https://twitter.com/YOUR_TWITTER"
              target="_blank"
              sx={{ color: '#fff' }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              aria-label="Instagram"
              href="https://instagram.com/YOUR_INSTAGRAM"
              target="_blank"
              sx={{ color: '#fff' }}
            >
              <InstagramIcon />
            </IconButton>
          </Grid>

          {/* Right - Copyright */}
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Typography variant="body2">
              © {new Date().getFullYear()} Parikshit M. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>

);
}

export default Footer;
