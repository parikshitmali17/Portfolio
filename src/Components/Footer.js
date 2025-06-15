
import React from 'react';
import { Box, Typography, Container, } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { styled } from '@mui/system';

const iconColors = {
  linkedin: '#0A66C2',
  github: '#333',
  twitter: '#1DA1F2',
  instagram: '#E4405F'
};

const IconWrapper = styled('li')(({ theme, bgcolor }) => ({
  position: 'relative',
  background: '#fff',
  borderRadius: '50%',
  padding: '15px',
  margin: '8px',
  width: '35px',
  height: '35px',
  fontSize: '16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  '&:hover': {
    background: bgcolor,
    color: '#fff',
  },
  '&:hover .tooltip': {
    top: '-45px',
    opacity: 1,
    visibility: 'visible',
  },
}));

const TooltipBox = styled('span')({
  position: 'absolute',
  top: 0,
  fontSize: '14px',
  background: '#fff',
  color: '#fff',
  padding: '5px 8px',
  borderRadius: '5px',
  boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)',
  opacity: 0,
  pointerEvents: 'none',
  transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  '&::before': {
    content: '""',
    position: 'absolute',
    height: '8px',
    width: '8px',
    background: '#fff',
    bottom: '-3px',
    left: '50%',
    transform: 'translate(-50%) rotate(45deg)',
  },
});

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        // background: 'linear-gradient(315deg, #026e2f, #0ce680)'
        // 
        backgroundColor:'rgba(0, 0, 0, 0.87)',
        color: '#fff',
        py: 1,
        width: '100%',
        fontFamily: 'Poppins, sans-serif',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
          Parikshit Mali
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          Crafting scalable web solutions 🚀
        </Typography>
        <Box component="ul" sx={{ listStyle: 'none', display: 'flex', justifyContent: 'center', p: 0, m: 0 }}>
          <IconWrapper bgcolor={iconColors.linkedin}>
            <TooltipBox style={{backgroundColor:"black"}} className="tooltip">LinkedIn</TooltipBox>
            <a href="https://www.linkedin.com/in/parikshit-mali-a84b23193/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon sx={{ color: 'inherit' }} />
            </a>
          </IconWrapper>
          <IconWrapper bgcolor={iconColors.github}>
            <TooltipBox style={{backgroundColor:"black"}} className="tooltip">GitHub</TooltipBox>
            <a href="https://github.com/parikshitmali17" target="_blank" rel="noopener noreferrer">
              <GitHubIcon sx={{ color: 'inherit' }} />
            </a>
          </IconWrapper>
          <IconWrapper bgcolor={iconColors.twitter}>
            <TooltipBox style={{backgroundColor:"black"}} className="tooltip">Twitter</TooltipBox>
            <a href="https://twitter.com/YOUR_TWITTER" target="_blank" rel="noopener noreferrer">
              <TwitterIcon sx={{ color: 'inherit' }} />
            </a>
          </IconWrapper>
          <IconWrapper bgcolor={iconColors.instagram}>
            <TooltipBox style={{backgroundColor:"black"}} className="tooltip">Instagram</TooltipBox>
            <a href="https://www.instagram.com/parikshit.mali17?igsh=aWp0dDhiOGxmNGV2" target="_blank" rel="noopener noreferrer">
              <InstagramIcon sx={{ color: 'inherit' }} />
            </a>
          </IconWrapper>
        </Box>
        <Typography variant="body2" sx={{ mt: 2 }}>
          © {new Date().getFullYear()} Parikshit M. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
