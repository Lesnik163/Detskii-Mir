'use client';

import { Nunito } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

export const nunito = Nunito({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});
const theme = createTheme({
  typography: {
    fontFamily: nunito.style.fontFamily,
  },
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        page: {
          background: blue[50],
          ':hover': {
            background: 'red[800]',
          },
        },
        previousNext: {
          background: blue[50],
          ':hover': {
            background: '#0073E6',
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#0073E6',
    },
  },
});

export default theme;
