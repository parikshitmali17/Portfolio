
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Icon from '@mui/material/Icon';

const theme = createTheme({
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: 'red',
          color: 'white', // Optional: for text contrast
        },
      },
    },
  },
});

export default function CustomChip() {
  return (
    <ThemeProvider theme={theme}>
      <Chip icon={<Icon className="fas fa-phone-alt" />} label="Call me" />
    </ThemeProvider>
  );
}
