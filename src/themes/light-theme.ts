'use client';

import { Nunito } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

declare module '@mui/material/styles' {
}
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
  palette: {
    mode: 'light',
    primary: {
      main: '#E6F1FC',
    },
    secondary: {
      main: '#99C7F5',
    },
    warning: {
      main: '#0073E6',
    },
    error: {
      main: '#F2F6FA',
    },
    background: {
      default: '#F2F6FA',
    },
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
});

export default theme;
