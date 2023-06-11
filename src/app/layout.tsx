'use client';

import React from 'react';
import { Metadata } from 'next';
import { IChildren } from '@/interfaces/childrenInterface';
import ThemeProvider from '@/themes/mui-theme-provider';
// import theme from '@/themes/light-theme';
import Providers from './redux/provider';

export const metadata: Metadata = {
  title: 'DetMir',
  description: 'DetMir web app',
};

export default function RootLayout({ children }: IChildren) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
