

import React from 'react';
import { Typography, useTheme, useMediaQuery, Box } from '@mui/material';
import '../App.css';
import BasicModal from './Modal';

function StreetLamp() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const headingFontSize = isMobile ? '1.3rem' : isTablet ? '1.8rem' : '2.5rem';
  const subTextFontSize = isMobile ? '0.95rem' : isTablet ? '1.2rem' : '1.4rem';

  return (
    <>
      <Typography
        variant="h1"
        className="lamp-watermark"
        sx={{
          fontSize: headingFontSize,
          padding: '20px',
          textAlign: 'center',
          
        }}
      >
        Build Smart. Scale Fast. Ship Globally. 🚀
      </Typography>

      <div className='lamps'>
        <input type="checkbox" name="btn" id="btn" defaultChecked />
        <div className="lamp-content">
          <div className="lamp-buildings">
            <div className="lamp-window"></div>
            <div className="lamp-window"></div>
            <div className="lamp-window"></div>
            <div className="lamp-window"></div>
            <div className="lamp-window"></div>
            <div className="lamp-window"></div>
          </div>

          <div className="lamp-ground">
            <div className="lamp-sewer"></div>
            <Typography
              component="h3"
              sx={{ pt: '145px', color: 'black', fontSize: subTextFontSize, px: 2 }}
            >
              Freelance Full-Stack & Serverless Developer turning your web ideas into scalable digital products.
            </Typography>
          </div>

          <div className="lamp-streetlamp">
            <Typography
              component="h3"
              sx={{
                color: 'red',
                paddingBottom: '200px',
                paddingLeft: '50px',
                paddingTop: '70px',
                fontSize: subTextFontSize,
              }}
            >
              Light ME Up !
            </Typography>

            <div className="lamp-base" />
            <div className="lamp-basetop" />
            <div className="lamp-pole" />
            <div className="lamp-poletop" />
            <div className="lamp-head">
              <label htmlFor="btn"></label>
              <div className="lamp-top"></div>
              <div className="lamp-glass"></div>
              <div className="lamp-bot"></div>
            </div>
            <div className="lamp-light"></div>
            <div className="lamp-ground-light">
              <Box sx={{ display: 'flex', justifyContent: 'center', pt: '30px' }}>
                <BasicModal />
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StreetLamp;
